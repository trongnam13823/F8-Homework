'use client'

import Logo from '@/components/Logo'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Eye, EyeOff, LoaderCircle } from 'lucide-react'
import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormItem, FormControl, FormMessage, FormField } from '@/components/ui/form'
import { registerSchema, Role, Status } from '@/schemas/users.schema'
import usersApi from '@/apis/users.api'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import RequiredMark from '@/components/RequiredMark'

export default function RegisterPage() {
  const [isShowPassword, setIsShowPassword] = useState(true)
  const router = useRouter()
  const onShowPassword = () => {
    setIsShowPassword(!isShowPassword)
  }

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      status: Status.Confirming,
      role: Role.Teacher
    }
  })

  const registerAPI = useMutation({
    mutationFn: usersApi.register,
    onSuccess: () => {
      toast.success('Đăng kí thành công')
      router.push('/login')
    },
    onError: (error: { detail: string }) => {
      toast.error(error.detail)
    }
  })

  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    registerAPI.mutate(values)
  }

  return (
    <div className='bg-white flex-1 p-8 max-w-[450px]'>
      <div className='text-center flex flex-col gap-4'>
        <Logo className='mx-auto' />
        <h1 className='text-2xl text-[#1A202C] font-bold'>Đăng ký</h1>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='mt-8 space-y-6'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <Label htmlFor='name' className='text-base'>
                  Tên của bạn <RequiredMark />
                </Label>
                <FormControl>
                  <Input
                    id='name'
                    className='border-primary h-12 px-4 md:text-base'
                    placeholder='Nhập tên của bạn'
                    {...field}
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
                <Label htmlFor='email' className='text-base'>
                  Địa chỉ email <RequiredMark />
                </Label>
                <FormControl>
                  <Input
                    type='email'
                    id='email'
                    className='border-primary h-12 px-4 md:text-base'
                    placeholder='Nhập địa chỉ email'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <Label htmlFor='password' className='text-base'>
                  Mật khẩu <RequiredMark />
                </Label>
                <FormControl>
                  <div className='relative'>
                    <Input
                      id='password'
                      type={isShowPassword ? 'password' : 'text'}
                      className='border-primary h-12 px-4 pr-14 md:text-base'
                      placeholder='Nhập mật khẩu'
                      {...field}
                    />
                    <button
                      type='button'
                      className='absolute right-0 top-1/2 -translate-y-1/2 h-12 px-4 cursor-pointer'
                      onClick={onShowPassword}
                    >
                      {isShowPassword ? <EyeOff className='size-6' /> : <Eye className='size-6' />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='confirmPassword'
            render={({ field }) => (
              <FormItem>
                <Label htmlFor='confirmPassword' className='text-base'>
                  Nhập lại mật khẩu <RequiredMark />
                </Label>
                <FormControl>
                  <Input
                    id='confirmPassword'
                    type={isShowPassword ? 'password' : 'text'}
                    className='border-primary h-12 px-4 pr-14 md:text-base'
                    placeholder='Nhập lại mật khẩu'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className='w-full h-12 font-bold text-base' type='submit'>
            {registerAPI.isPending ? <LoaderCircle className='animate-spin size-6' /> : 'Đăng ký'}
          </Button>
        </form>
      </Form>

      <p className='text-[#A0AEC0] text-center mt-10'>
        Đã có tài khoản?{' '}
        <Link className='text-primary hover:underline' href='/login'>
          Đăng nhập
        </Link>
      </p>
    </div>
  )
}
