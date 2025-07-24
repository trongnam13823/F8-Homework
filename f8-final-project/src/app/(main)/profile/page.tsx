import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Upload } from 'lucide-react'

export default function Profile() {
  return (
    <div className='md:px-8 px-4 py-8 flex flex-col gap-6 max-w-4xl mx-auto'>
      <h2 className='font-bold text-2xl'>Thông tin cơ bản</h2>

      <div className='bg-white rounded-2xl flex flex-col p-6 shadow'>
        <div className='flex flex-col gap-6'>
          <Avatar className='mx-auto size-[150px]'>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <Button type='button' variant='outline' className='w-fit mx-auto' asChild>
            <label>
              <input type='file' hidden />
              <Upload /> Tải lên từ máy
            </label>
          </Button>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-2 '>
              <Label htmlFor='fullname' className='text-base'>
                Họ và tên
              </Label>
              <Input id='fullname' className='border-primary h-10 px-4 md:text-base' placeholder='Nhập họ và tên' />
            </div>
            <div className='space-y-2 '>
              <Label htmlFor='email' className='text-base'>
                Email
              </Label>
              <Input
                id='email'
                type='email'
                className='border-primary h-10 px-4 md:text-base'
                placeholder='Nhập email'
              />
            </div>
            <div className='space-y-2 '>
              <Label htmlFor='school' className='text-base'>
                Tên trường
              </Label>
              <Input id='school' className='border-primary h-10 px-4 md:text-base' placeholder='Nhập tên trường' />
            </div>
            <div className='space-y-2 '>
              <Label htmlFor='parents' className='text-base'>
                Tên phụ huynh
              </Label>
              <Input id='parents' className='border-primary h-10 px-4 md:text-base' placeholder='Nhập tên phụ huynh' />
            </div>
            <div className='space-y-2 '>
              <Label htmlFor='parents' className='text-base'>
                Số điện thoại phụ huynh
              </Label>
              <Input
                type='tel'
                id='parents'
                className='border-primary h-10 px-4 md:text-base'
                placeholder='Nhập số điện thoại phụ huynh'
              />
            </div>
          </div>
          <Button className='ml-auto text-base h-auto'>Cập nhật</Button>
        </div>
      </div>

      <h2 className='font-bold text-2xl'>Đổi mật khẩu</h2>

      <div className='bg-white rounded-2xl flex flex-col p-6 shadow'>
        <div className='flex flex-col gap-6'>
          <div className='grid grid-cols-1 gap-6'>
            {/* Mật khẩu cũ */}
            <div className='space-y-2'>
              <Label htmlFor='old-password' className='text-base'>
                Mật khẩu cũ
              </Label>
              <Input
                id='old-password'
                type='password'
                className='border-primary h-10 px-4 md:text-base'
                placeholder='Nhập mật khẩu cũ'
              />
            </div>

            {/* Mật khẩu mới */}
            <div className='space-y-2'>
              <Label htmlFor='new-password' className='text-base'>
                Mật khẩu mới
              </Label>
              <Input
                id='new-password'
                type='password'
                className='border-primary h-10 px-4 md:text-base'
                placeholder='Nhập mật khẩu mới'
              />
            </div>

            {/* Xác nhận mật khẩu */}
            <div className='space-y-2'>
              <Label htmlFor='confirm-password' className='text-base'>
                Nhập lại mật khẩu mới
              </Label>
              <Input
                id='confirm-password'
                type='password'
                className='border-primary h-10 px-4 md:text-base'
                placeholder='Nhập lại mật khẩu mới'
              />
            </div>
          </div>

          <Button className='ml-auto text-base h-auto'>Đổi mật khẩu</Button>
        </div>
      </div>
    </div>
  )
}
