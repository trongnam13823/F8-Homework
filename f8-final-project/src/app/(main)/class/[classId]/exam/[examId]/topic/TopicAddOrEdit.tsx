'use client'

import RequiredMark from '@/components/RequiredMark'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Plus, Upload } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Fragment } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function TopicAddOrEdit({ mode }: { mode: 'add' | 'edit' }) {
  const pathname = usePathname()
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 gap-6 xl:h-full'>
      <div className='bg-white rounded-xl xl:overflow-hidden flex items-center justify-center min-h-96'>
        <Button type='button' variant='secondary' className='bg-primary/10 hover:bg-primary/20' asChild>
          <label>
            <input type='file' hidden />
            <Upload /> Tải lên từ máy
          </label>
        </Button>
      </div>
      <div className='bg-white rounded-xl flex flex-col gap-6'>
        <div className='flex gap-2 justify-end p-6 pb-0'>
          <Button variant='outline' asChild>
            <Link href={pathname.split('/topic')[0]}>Hủy</Link>
          </Button>
          <Button>
            <Plus /> {mode === 'add' ? 'Thêm mới' : 'Cập nhật'}
          </Button>
        </div>

        <div className='xl:flex-1 xl:relative'>
          <div className='xl:absolute xl:inset-0 w-full h-full grid grid-cols-1 md:grid-cols-2 gap-6 overflow-auto scrollbar-thin p-6 pt-0'>
            <div className='space-y-2 '>
              <Label htmlFor='title' className='text-base'>
                Tên đề <RequiredMark />
              </Label>
              <Input id='title' className='border-primary h-10 px-4 md:text-base' placeholder='Nhập tiêu đề' />
            </div>
            <div className='space-y-2 '>
              <Label htmlFor='code' className='text-base'>
                Mã đề <RequiredMark />
              </Label>
              <Input id='code' className='border-primary h-10 px-4 md:text-base' placeholder='Nhập mã đề' />
            </div>
            <div className='space-y-2 '>
              <Label htmlFor='time' className='text-base'>
                Thời gian (phút) <RequiredMark />
              </Label>
              <Input id='time' className='border-primary h-10 px-4 md:text-base' placeholder='Nhập mã đề' />
            </div>
            <div className='space-y-2 '>
              <Label htmlFor='length' className='text-base'>
                Số câu <RequiredMark />
              </Label>
              <Input type='number' id='length' className='border-primary h-10 px-4 md:text-base' placeholder='Số câu' />
            </div>

            {Array.from({ length: 40 }).map((_, index) => (
              <Fragment key={index}>
                <div className='flex gap-2 items-center'>
                  <p className='font-semibold text-primary text-nowrap'>Câu {index + 1}: </p>
                  <Select value='choose 1 answer'>
                    <SelectTrigger className='border-primary flex-1'>
                      <SelectValue placeholder='' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='choose 1 answer'>Chọn 1 đáp án</SelectItem>
                      <SelectItem value='choose multiple answers'>Chọn nhiều đáp án</SelectItem>
                      <SelectItem value='fill in the blank'>Điền vào chỗ trống</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <RadioGroup defaultValue='comfortable' className='flex items-center justify-between'>
                  <div className='flex items-center gap-3'>
                    <Label className='cursor-pointer text-lg' htmlFor={'a' + index}>
                      <RadioGroupItem value={'a' + index} id={'a' + index} />A
                    </Label>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Label className='cursor-pointer text-lg' htmlFor={'b' + index}>
                      <RadioGroupItem value={'b' + index} id={'b' + index} />B
                    </Label>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Label className='cursor-pointer text-lg' htmlFor={'c' + index}>
                      <RadioGroupItem value={'c' + index} id={'c' + index} />C
                    </Label>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Label className='cursor-pointer text-lg' htmlFor={'d' + index}>
                      <RadioGroupItem value={'d' + index} id={'d' + index} />D
                    </Label>
                  </div>
                </RadioGroup>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
