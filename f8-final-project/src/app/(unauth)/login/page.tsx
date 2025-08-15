'use client'

import Logo from '@/components/Logo'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Eye, EyeOff, LoaderCircle } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { loginSchema } from '@/schemas/users.schema'
import usersApi from '@/apis/users.api'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { useUserStore } from '@/store/useUser.store'

export default function LoginPage() {
  const [isShowPassword, setIsShowPassword] = useState(true)
  const router = useRouter()
  const { setAccessDecoded } = useUserStore()

  const onShowPassword = () => {
    setIsShowPassword(!isShowPassword)
  }

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const loginAPI = useMutation({
    mutationFn: usersApi.login,
    onSuccess: (res) => {
      setAccessDecoded(res.data.access, res.data.refresh)

      router.push('/classes')
    },
    onError: (error: { detail: string }) => {
      toast.error(error.detail)
    }
  })

  function onSubmit(values: z.infer<typeof loginSchema>) {
    loginAPI.mutate(values)
  }

  return (
    <div className='flex max-w-[900px]'>
      <div className='md:flex hidden bg-primary flex-1 p-8 flex-col gap-10'>
        <Image src='/login-bg.png' width={1024} height={597} alt='Gieo mầm sáng tạo, dẫn hướng đam mê' />
        <div className='uppercase flex flex-col gap-3 px-10 text-white font-semibold mt-auto text-lg'>
          <p className='mr-auto'>Gieo mầm sáng tạo...</p>
          <p className='ml-auto'>...Dẫn hướng đam mê</p>
        </div>
      </div>
      <div className='bg-white flex-1 p-8'>
        <div className='text-center flex flex-col gap-4'>
          <Logo className='mx-auto' />
          <h1 className='text-2xl text-[#1A202C] font-bold'>Đăng Nhập</h1>
          <p className='text-sm text-[#A0AEC0]'>
            Cung cấp giải pháp toàn diện cho <br /> lớp học thông minh
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='mt-8 space-y-6'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input className='border-primary h-12 px-4 md:text-base' placeholder='Nhập email' {...field} />
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
                  <div className='relative'>
                    <FormControl>
                      <Input
                        type={isShowPassword ? 'password' : 'text'}
                        className='border-primary h-12 px-4 pr-14 md:text-base'
                        placeholder='Nhập mật khẩu'
                        {...field}
                      />
                    </FormControl>
                    <button
                      type='button'
                      className='absolute right-0 top-1/2 -translate-y-1/2 h-12 px-4 cursor-pointer'
                      onClick={onShowPassword}
                    >
                      {isShowPassword ? <EyeOff className='size-6' /> : <Eye className='size-6' />}
                    </button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className='w-full h-12 font-bold text-base' disabled={loginAPI.isPending}>
              {loginAPI.isPending ? <LoaderCircle className='animate-spin size-6' /> : 'Đăng nhập'}
            </Button>
          </form>
        </Form>

        <p className='text-[#A0AEC0] text-center mt-10'>
          <Link className='text-primary hover:underline' href='/register'>
            Đăng ký
          </Link>{' '}
          tài khoản cho học viên
        </p>
      </div>
    </div>
  )
}
