'use client'

import { useState } from 'react'
import { Edit, Trash } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription
} from '@/components/ui/dialog'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface TopicCardProps {
  id: number
  title: string
  code: string
  questionCount: number
  onDelete: () => void
}

export default function TopicCard({ id, title, code, questionCount, onDelete }: TopicCardProps) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className='p-4 bg-white rounded-xl shadow border-dashed border-primary border flex justify-between h-fit'>
      <div className='flex flex-col gap-2'>
        <h3 className='font-bold uppercase'>{title}</h3>

        <div className='mt-auto'>
          <p>
            Mã đề: <b>{code}</b>
          </p>
          <p>
            Số câu hỏi: <b>{questionCount}</b>
          </p>
        </div>
      </div>

      <div className='flex flex-col gap-2 h-fit'>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button asChild variant='secondary' size='icon' className='text-primary hover:bg-primary/10'>
              <Link href={`${pathname}/topic/${id}/edit`}>
                <Edit className='mr-1 h-4 w-4' />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Chỉnh sửa</p>
          </TooltipContent>
        </Tooltip>

        <Dialog open={open} onOpenChange={setOpen}>
          <Tooltip>
            <DialogTrigger asChild>
              <TooltipTrigger asChild>
                <Button
                  variant='secondary'
                  size='icon'
                  className='text-destructive border-destructive hover:bg-destructive/10 hover:text-destructive'
                >
                  <Trash className='mr-1 h-4 w-4' />
                </Button>
              </TooltipTrigger>
            </DialogTrigger>
            <TooltipContent>
              <p>Xóa bỏ</p>
            </TooltipContent>
          </Tooltip>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Xác nhận xóa</DialogTitle>
              <DialogDescription>
                Bạn có chắc muốn xóa Đề bài <strong>{title ?? 'này'}</strong>? Hành động này không thể hoàn tác.
              </DialogDescription>
            </DialogHeader>

            <DialogFooter>
              <Button variant='outline' onClick={() => setOpen(false)}>
                Hủy
              </Button>
              <Button
                variant='destructive'
                onClick={() => {
                  onDelete()
                  setOpen(false)
                }}
              >
                Xóa
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
