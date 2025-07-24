import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'

export function ExamSubmissionCard(props: {
  name: string
  email: string
  time: number
  total: number
  status: string
}) {
  return (
    <Link
      href={''}
      className='p-4 bg-white rounded-xl shadow border border-primary hover:bg-primary/10 cursor-pointer transition-colors block'
    >
      <div>
        <div className='flex gap-2 items-center'>
          <Avatar className='size-12'>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>{props.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className='text-left font-semibold'>{props.name}</p>
            <p className='text-left text-[#4a5568] text-sm'>{props.email}</p>
          </div>
        </div>
      </div>
      <div className='mt-5 text-sm space-y-1'>
        <p>
          Thời gian làm bài: <b>{props.time} phút</b>
        </p>
        <p>
          Số đề đã hoàn thành: <b>{props.total}</b>
        </p>
        <p>
          Trạng thái: <b className='text-orange-400'>{props.status}</b>
        </p>
      </div>
    </Link>
  )
}
