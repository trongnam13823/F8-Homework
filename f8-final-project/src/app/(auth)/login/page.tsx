'use client'

import Logo from '@/components/Logo'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [isShowPassword, setIsShowPassword] = useState(true)
  const router = useRouter()
  const onShowPassword = () => {
    setIsShowPassword(!isShowPassword)
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

        <div className='mt-8 space-y-6'>
          <Input className='border-primary h-12 px-4 md:text-base' placeholder='Nhập email' />
          <div className='relative'>
            <Input
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
          <Button className='w-full h-12 font-bold text-base' onClick={() => router.push('/classes')}>
            Đăng nhập
          </Button>
        </div>

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
