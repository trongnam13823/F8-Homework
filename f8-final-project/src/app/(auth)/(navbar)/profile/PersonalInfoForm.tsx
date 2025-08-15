/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect, useState, ChangeEvent } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { useUserStore } from '@/store/useUser.store'
import usersApi from '@/apis/users.api'
import { personalInfoSchema } from '@/schemas/users.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { Upload } from 'lucide-react'

export default function PersonalInfoForm() {
  const { accessDecoded, setAccessDecoded } = useUserStore()
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)

  const form = useForm<z.infer<typeof personalInfoSchema>>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      name: '',
      email: '',
      school: '',
      parent_name: '',
      parent_phone: '',
      avata: null
    }
  })

  // Load dữ liệu user vào form
  useEffect(() => {
    if (accessDecoded) {
      form.reset({
        name: accessDecoded.name,
        email: accessDecoded.email,
        school: accessDecoded.school || '',
        parent_name: accessDecoded.parent_name || '',
        parent_phone: accessDecoded.parent_phone || '',
        avata: null
      })

      setAvatarPreview(accessDecoded.avata?.url || null)
    }
  }, [accessDecoded])

  // Mutation update thông tin
  const updateInfoMutation = useMutation({
    mutationFn: (data: z.infer<typeof personalInfoSchema>) => usersApi.updateInfo(accessDecoded!.id, data),
    onSuccess: (res) => {
      setAccessDecoded(res.data.access, res.data.refresh)
      toast.success('Cập nhật thông tin thành công!')
    },
    onError: (error: { detail: string }) => {
      toast.error(error?.detail || 'Cập nhật thất bại')
    }
  })

  // Handle avatar upload
  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setAvatarPreview(url)
    form.setValue('avata', { id: form.getValues().avata?.id || 0, url: '', payload: '' })
  }

  const onSubmit = (values: z.infer<typeof personalInfoSchema>) => {
    updateInfoMutation.mutate(values)
  }

  return (
    <>
      <h2 className='font-bold text-2xl mb-4'>Thông tin cơ bản</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='bg-white rounded-2xl flex flex-col p-6 shadow gap-6'>
          <div className='flex flex-col items-center gap-4'>
            <Avatar className='w-[150px] h-[150px]'>
              {avatarPreview ? (
                <AvatarImage src={avatarPreview} />
              ) : (
                <>
                  <AvatarImage src={accessDecoded?.avata.url ?? ''} />
                  <AvatarFallback>{accessDecoded?.name}</AvatarFallback>
                </>
              )}
            </Avatar>

            <Button type='button' variant='outline' asChild>
              <label className='flex items-center gap-2 cursor-pointer'>
                <input type='file' hidden onChange={handleAvatarChange} />
                <span>
                  <Upload />
                </span>
                <span>Tải lên từ máy</span>
              </label>
            </Button>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor='name'>Họ và tên</Label>
                  <FormControl>
                    <Input
                      {...field}
                      id='name'
                      placeholder='Nhập họ và tên'
                      className='border-primary h-10 px-4 md:text-base'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor='email'>Email</Label>
                  <FormControl>
                    <Input
                      {...field}
                      type='email'
                      id='email'
                      placeholder='Nhập email'
                      className='border-primary h-10 px-4 md:text-base'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='school'
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor='school'>Tên trường</Label>
                  <FormControl>
                    <Input
                      {...field}
                      id='school'
                      placeholder='Nhập tên trường'
                      className='border-primary h-10 px-4 md:text-base'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='parent_name'
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor='parent_name'>Tên phụ huynh</Label>
                  <FormControl>
                    <Input
                      {...field}
                      id='parent_name'
                      placeholder='Nhập tên phụ huynh'
                      className='border-primary h-10 px-4 md:text-base'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='parent_phone'
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor='parent_phone'>Số điện thoại phụ huynh</Label>
                  <FormControl>
                    <Input
                      {...field}
                      id='parent_phone'
                      placeholder='Nhập số điện thoại phụ huynh'
                      className='border-primary h-10 px-4 md:text-base'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type='submit' className='ml-auto w-40 h-12'>
            {updateInfoMutation.isPending ? 'Đang cập nhật...' : 'Cập nhật'}
          </Button>
        </form>
      </Form>
    </>
  )
}
