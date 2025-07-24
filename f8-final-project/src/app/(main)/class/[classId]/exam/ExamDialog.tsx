'use client'

import { ReactNode, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import RequiredMark from '@/components/RequiredMark'
import InputDate from '@/components/InputDate'

type ExamFormValues = {
  name: string
  duration: string
  date: string
}

interface ExamDialogProps {
  mode: 'add' | 'edit'
  defaultValues?: Partial<ExamFormValues>
  onSubmit: (values: ExamFormValues) => void
  trigger: ReactNode
}

export function ExamDialog({ mode, defaultValues = {}, onSubmit, trigger }: ExamDialogProps) {
  const [formData, setFormData] = useState<ExamFormValues>({
    name: defaultValues.name ?? '',
    duration: defaultValues.duration ?? '',
    date: defaultValues.date ?? ''
  })

  const handleChange = (key: keyof ExamFormValues, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  const handleSubmit = () => {
    onSubmit(formData)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>{mode === 'add' ? 'Thêm bài thi mới' : 'Chỉnh sửa bài thi'}</DialogTitle>
          <DialogDescription>
            Vui lòng nhập thông tin đầy đủ để {mode === 'add' ? 'tạo' : 'cập nhật'} bài thi.
          </DialogDescription>
        </DialogHeader>

        <div className='grid gap-4'>
          <div className='grid gap-3'>
            <Label htmlFor='name'>
              Tên bài thi <RequiredMark />
            </Label>
            <Input id='name' value={formData.name} onChange={(e) => handleChange('name', e.target.value)} />
          </div>

          <div className='grid gap-3'>
            <Label htmlFor='duration'>
              Thời gian giữa các bài thi (phút) <RequiredMark />
            </Label>
            <Input
              id='duration'
              type='number'
              value={formData.duration}
              onChange={(e) => handleChange('duration', e.target.value)}
            />
          </div>

          <div className='grid gap-3'>
            <Label htmlFor='date'>
              Ngày thi <RequiredMark />
            </Label>
            <InputDate
              date={new Date(formData.date)}
              setDate={(date) => handleChange('date', date?.toISOString() ?? '')}
            />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant='outline'>Hủy</Button>
          </DialogClose>
          <Button type='submit' onClick={handleSubmit}>
            {mode === 'add' ? 'Thêm mới' : 'Cập nhật'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
