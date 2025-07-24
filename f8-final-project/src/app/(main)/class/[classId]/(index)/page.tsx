import { Files, Users } from 'lucide-react'
import { RecentActivities } from './RecentActivities'
import { activities, members } from './data'
import { MemberTable } from './MemberTable'
import TotalCard from './TotalCard'
import OverviewCard from './OverviewCard'

export default function Overview() {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-3 grid-rows-[auto_auto_auto_1fr] sm:grid-rows-[auto_auto_1fr] gap-6 h-full'>
      <OverviewCard
        classNameName='Lớp 12A1'
        teacherName='Trần Trọng Nam'
        shareLink='https://myapp.com/class/12A1'
        members={members}
      />

      <RecentActivities activities={activities} />

      <TotalCard
        icon={<Users className='sm:block hidden md:size-8 lg:size-10 xl:size-12 text-primary' />}
        label='34 Thành viên'
      />
      <TotalCard
        icon={<Files className='sm:block hidden md:size-8 lg:size-10 xl:size-12 text-primary' />}
        label='2 Bài kiểm tra'
      />

      <MemberTable members={members} />
    </div>
  )
}
