import { FileClock, Clock } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

type Activity = {
  id: string
  avatarUrl?: string
  fallback: string
  title: React.ReactNode
  time: string
}

type RecentActivitiesProps = {
  activities: Activity[]
  className?: string
}

export function RecentActivities({ activities, className }: RecentActivitiesProps) {
  return (
    <div className={cn('row-span-3 bg-white rounded-xl flex-col gap-4 hidden lg:flex', className)}>
      <h2 className='font-semibold text-lg flex items-center gap-2 p-6 pb-0 uppercase text-primary'>
        <FileClock /> Hoạt động gần đây
      </h2>

      <div className='relative flex-1'>
        <div className='absolute inset-0 overflow-y-auto scrollbar-thin'>
          {activities.map((activity) => (
            <div key={activity.id} className='flex gap-2 items-center px-5 py-3 hover:bg-muted transition-colors'>
              <Avatar className='size-12'>
                <AvatarImage src={activity.avatarUrl} />
                <AvatarFallback>{activity.fallback}</AvatarFallback>
              </Avatar>

              <div className='flex-1'>
                <h3 className='font-semibold text-gray-800 text-sm'>{activity.title}</h3>
                <p className='flex gap-1 text-sm items-center'>
                  <Clock className='size-4' /> {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
