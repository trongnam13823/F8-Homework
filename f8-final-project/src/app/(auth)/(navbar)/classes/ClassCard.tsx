// ClassCard.tsx
import { Button } from '@/components/ui/button'
import { CopyIcon, DoorOpen } from 'lucide-react'
import Link from 'next/link'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { memo } from 'react'

interface ClassCardProps {
  id: number
  name: string
  studentCount: number
  code: string
}

export default memo(function ClassCard({ id, name, studentCount, code }: ClassCardProps) {
  return (
    <div>
      <div className='p-4 bg-primary/80 text-white shadow rounded-xl'>
        <div className='flex items-center justify-between'>
          <h2 className='text-xl font-bold'>{name}</h2>
          <Link
            href={`/class/${id}`}
            className='flex items-center gap-1 font-semibold hover:underline hover:scale-105 transition-transform'
          >
            <DoorOpen /> <span>Vào lớp</span>
          </Link>
        </div>

        <div className='mt-8'>
          <p className='text-4xl font-medium'>{studentCount}</p>

          <div className='flex gap-2 items-center justify-between flex-wrap'>
            <p>Thành viên tham gia</p>
            <div className='flex gap-2 items-center'>
              <p>Mã lớp: {code}</p>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={'outline'}
                    className='hover:bg-transparent hover:text-white text-white border-white p-1! h-fit text-xs'
                  >
                    <CopyIcon /> Chia sẻ
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy link mời vào lớp</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})
