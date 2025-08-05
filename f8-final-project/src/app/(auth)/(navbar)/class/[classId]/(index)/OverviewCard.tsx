'use client'

import { School2, CopyIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

type OverviewCardProps = {
  className?: string
  classNameName: string
  teacherName: string
  shareLink?: string
  members: {
    id: string
    fullname: string
    role: string
    avatarUrl?: string
    fallback: string
  }[]
}

export default function OverviewCard({ className, classNameName, teacherName, shareLink, members }: OverviewCardProps) {
  return (
    <div className={cn('p-6 bg-primary/80 text-white shadow rounded-xl col-span-2', className)}>
      <h2 className='flex items-center gap-2 font-bold text-2xl'>
        <School2 className='size-8' /> {classNameName}
      </h2>
      <p className='mt-2 text-lg'>Giáo viên: {teacherName}</p>

      <div className='flex items-center justify-between gap-10 mt-1'>
        <div className='flex items-center gap-2 self-end flex-wrap'>
          <p>Chia sẻ lớp học:</p>
          {shareLink && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant='outline'
                  className='hover:bg-transparent hover:text-white text-white border-white p-1! h-fit text-xs font-semibold'
                  onClick={() => navigator.clipboard.writeText(shareLink)}
                >
                  <CopyIcon /> Sao chép liên kết
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Copy link</p>
              </TooltipContent>
            </Tooltip>
          )}
        </div>

        <div className='*:data-[slot=avatar]:ring-background *:data-[slot=avatar]:ring-2 flex -space-x-2 '>
          {members.slice(0, 4).map((member, index) => (
            <Avatar key={index} className='md:size-12 size-8'>
              <AvatarImage src={member.avatarUrl} alt={member.fullname} />
              <AvatarFallback className='text-black bg-muted'>{member.fallback}</AvatarFallback>
            </Avatar>
          ))}

          {members.length > 4 && (
            <div className='md:size-12 size-8 rounded-full bg-white text-primary font-semibold text-xs md:text-sm flex items-center justify-center border-2 border-background'>
              +{members.length - 4}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
