'use client'

import { useUserStore } from '@/store/useUser.store'
import usersApi from '@/apis/users.api'
import { changePasswordSchema } from '@/schemas/users.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import Cookies from 'js-cookie'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import z from 'zod'

export default function ChangePasswordForm() {
  const { accessDecoded } = useUserStore()
  const router = useRouter()

  const form = useForm<z.infer<typeof changePasswordSchema>>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      id: accessDecoded?.id || 0,
      old_password: '',
      new_password: '',
      confirmPassword: ''
    }
  })

  const changePasswordMutation = useMutation({
    mutationFn: usersApi.changePassword,
    onSuccess: () => {
      toast.success('Đổi mật khẩu thành công!')
      Cookies.remove('access')
      Cookies.remove('refresh')
      router.push('/login')
    },
    onError: (error: { detail: string }) => {
      toast.error(error?.detail || 'Đổi mật khẩu thất bại')
    }
  })

  const onSubmit = (values: z.infer<typeof changePasswordSchema>) => {
    if (accessDecoded) {
      changePasswordMutation.mutate({
        ...values,
        id: accessDecoded?.id,
        old_password: btoa(values.old_password),
        new_password: btoa(values.new_password)
      })
    }
  }

  return (
    <>
      <h2 className='font-bold text-2xl mb-4'>Đổi mật khẩu</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='bg-white rounded-2xl flex flex-col p-6 shadow gap-6'>
          <div className='grid grid-cols-1 gap-6'>
            {/* Mật khẩu cũ */}
            <FormField
              control={form.control}
              name='old_password'
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor='old_password'>Mật khẩu cũ</Label>
                  <FormControl>
                    <Input
                      {...field}
                      id='old_password'
                      type='password'
                      placeholder='Nhập mật khẩu cũ'
                      className='border-primary h-10 px-4 md:text-base'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Mật khẩu mới */}
            <FormField
              control={form.control}
              name='new_password'
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor='new_password'>Mật khẩu mới</Label>
                  <FormControl>
                    <Input
                      {...field}
                      id='new_password'
                      type='password'
                      placeholder='Nhập mật khẩu mới'
                      className='border-primary h-10 px-4 md:text-base'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Xác nhận mật khẩu mới */}
            <FormField
              control={form.control}
              name='confirmPassword'
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor='confirmPassword'>Nhập lại mật khẩu mới</Label>
                  <FormControl>
                    <Input
                      {...field}
                      id='confirmPassword'
                      type='password'
                      placeholder='Nhập lại mật khẩu mới'
                      className='border-primary h-10 px-4 md:text-base'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type='submit' className='ml-auto w-40 h-12'>
            {changePasswordMutation.isPending ? 'Đang đổi...' : 'Đổi mật khẩu'}
          </Button>
        </form>
      </Form>
    </>
  )
}
