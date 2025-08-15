/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useDebounce } from 'use-debounce'
import ClassCard from './ClassCard'
import { Plus, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import RequiredMark from '@/components/RequiredMark'
import { keepPreviousData, useMutation, useQuery } from '@tanstack/react-query'
import classApi from '@/apis/class.api'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { createSchema } from '@/schemas/class.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { useUserStore } from '@/store/useUser.store'
import { useEffect, useMemo, useState } from 'react'
import { Role } from '@/schemas/users.schema'

export default function ClassesPage() {
  const { accessDecoded } = useUserStore()
  const [open, setOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const form = useForm<z.infer<typeof createSchema>>({
    resolver: zodResolver(createSchema),
    defaultValues: {
      name: '',
      code: '',
      users: []
    }
  })

  useEffect(() => {
    if (open) {
      form.reset({
        name: '',
        code: '',
        users: []
      })
    }
  }, [open])

  const { data, isFetched, isLoading, refetch } = useQuery({
    queryKey: ['class'],
    queryFn: () => classApi.get(),
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
    gcTime: 0
  })

  const createClassAPI = useMutation({
    mutationFn: classApi.create,
    onSuccess: () => {
      toast.success('Tạo lớp thành công')
      refetch()
      setOpen(false)
    },
    onError: (error: { detail: string }) => {
      toast.error(error.detail)
    }
  })

  const onSubmit = (values: z.infer<typeof createSchema>) => {
    if (accessDecoded?.id) {
      createClassAPI.mutate({
        ...values,
        users: [accessDecoded.id]
      })
    }
  }

  const [debouncedSearchTerm] = useDebounce(searchTerm, 400)

  const filteredClasses = useMemo(() => {
    return data?.data.filter((cls) => cls.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())) ?? []
  }, [debouncedSearchTerm, data?.data])

  return (
    <div className='md:px-8 px-4 py-8'>
      <div className='flex items-center justify-between gap-5 flex-wrap'>
        <h1 className='font-bold text-2xl'>Danh sách lớp học</h1>
        <div className='flex gap-4 flex-wrap md:w-fit w-full'>
          <div className='relative min-w-80 md:flex-none flex-1'>
            <Search size={20} className='absolute left-3 top-1/2 -translate-y-1/2' />
            <Input
              type='search'
              placeholder='Tìm kiếm'
              className='h-10 w-full px-4 pl-11 md:text-base'
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {accessDecoded?.role === Role.Teacher && (
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button type='button' variant='default' className='h-10 px-4 sm:w-fit w-full font-semibold'>
                  <Plus className='size-5' /> Thêm lớp
                </Button>
              </DialogTrigger>

              <DialogContent className='sm:max-w-[425px]'>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                    <DialogHeader>
                      <DialogTitle>Thêm lớp học mới</DialogTitle>
                      <DialogDescription>Vui lòng nhập thông tin đầy đủ để tạo lớp học mới.</DialogDescription>
                    </DialogHeader>
                    <div className='grid gap-4'>
                      <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                          <FormItem>
                            <Label htmlFor='name' className='text-base'>
                              Tên lớp học <RequiredMark />
                            </Label>
                            <FormControl>
                              <Input
                                id='name'
                                className='border-primary h-12 px-4 md:text-base'
                                placeholder='Nhập tên lớp học'
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name='code'
                        render={({ field }) => (
                          <FormItem>
                            <Label htmlFor='code'>
                              Mã bảo vệ <RequiredMark />
                            </Label>
                            <FormControl>
                              <Input
                                id='code'
                                className='border-primary h-12 px-4 md:text-base'
                                placeholder='Nhập mã bảo vệ'
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant='outline'>Hủy</Button>
                      </DialogClose>
                      <Button type='submit'>Tạo mới</Button>
                    </DialogFooter>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>

      <div className='mt-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {filteredClasses.length > 0 &&
          filteredClasses.map(({ id, name, users }) => (
            <ClassCard key={id} id={id} name={name} studentCount={users.length} code={id.toString()} />
          ))}

        {!isLoading && isFetched && filteredClasses.length === 0 && (
          <p className='col-span-full text-center text-gray-500'>Không tìm thấy lớp học nào.</p>
        )}
      </div>
    </div>
  )
}
