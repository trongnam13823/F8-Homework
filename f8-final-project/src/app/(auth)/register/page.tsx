'use client'

import Logo from '@/components/Logo'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { Label } from '@/components/ui/label'

export default function RegisterPage() {
  const [isShowPassword, setIsShowPassword] = useState(true)

  const onShowPassword = () => {
    setIsShowPassword(!isShowPassword)
  }
  return (
    <div className='bg-white flex-1 p-8 max-w-[450px]'>
      <div className='text-center flex flex-col gap-4'>
        <Logo className='mx-auto' />
        <h1 className='text-2xl text-[#1A202C] font-bold'>Đăng ký</h1>
      </div>

      <form className='mt-8 space-y-6'>
        <div className='space-y-2 '>
          <Label htmlFor='name' className='text-base'>
            Tên của bạn
          </Label>
          <Input id='name' className='border-primary h-12 px-4 md:text-base' placeholder='Nhập tên của bạn' />
        </div>

        <div className='space-y-2 '>
          <Label htmlFor='email' className='text-base'>
            Địa chỉ email
          </Label>
          <Input id='email' className='border-primary h-12 px-4 md:text-base' placeholder='Nhập địa chỉ email' />
        </div>

        <div className='space-y-2 '>
          <Label htmlFor='password' className='text-base'>
            Mật khẩu
          </Label>
          <div className='relative'>
            <Input
              id='password'
              type={isShowPassword ? 'password' : 'text'}
              className='border-primary h-12 px-4 pr-14 md:text-base'
              placeholder='Nhập mật khẩu'
            />

            <button
              type='button'
              className='absolute right-0 top-1/2 -translate-y-1/2 h-12 px-4 cursor-pointer'
              onClick={onShowPassword}
            >
              {isShowPassword ? <EyeOff className='size-6' /> : <Eye className='size-6' />}
            </button>
          </div>
        </div>

        <div className='space-y-2 '>
          <Label htmlFor='re-enter-password' className='text-base'>
            Nhập lại Mật khẩu
          </Label>
          <Input
            id='re-enter-password'
            type={isShowPassword ? 'password' : 'text'}
            className='border-primary h-12 px-4 pr-14 md:text-base'
            placeholder='Nhập lại mật khẩu'
          />
        </div>

        <Button className='w-full h-12 font-bold text-base'>Đăng ký</Button>
      </form>

      <p className='text-[#A0AEC0] text-center mt-10'>
        Đã có tài khoản?{' '}
        <Link className='text-primary hover:underline' href='/login'>
          Đăng nhập
        </Link>
      </p>
    </div>
  )
}
