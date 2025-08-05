'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FileText } from 'lucide-react'

interface ExamCardProps {
  id: string
  title: string
  date: string
  onClick?: () => void
}

export function ExamCard({ id, title, date, onClick }: ExamCardProps) {
  const pathname = usePathname()
  const href = `${pathname}/${id}`

  return (
    <Link href={href}>
      <div
        onClick={onClick}
        className='flex items-center gap-2 p-4 bg-white border-l-4 border-primary shadow rounded-r cursor-pointer hover:bg-primary/5 transition-colors'
      >
        <FileText className='size-14 text-primary' />
        <div className='space-y-1'>
          <h3 className='uppercase font-semibold'>{title}</h3>
          <p className='text-sm text-gray-600'>Ngày thi: {date}</p>
        </div>
      </div>
    </Link>
  )
}
