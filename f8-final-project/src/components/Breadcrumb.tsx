'use client'

import {
  Breadcrumb as BreadcrumbUI,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Fragment, useMemo } from 'react'

interface BreadcrumbItem {
  label: string
  href: string
}

type BreadcrumbGenerator = (classId: string, rest: string[]) => BreadcrumbItem[]

const breadcrumbMap: Record<string, BreadcrumbGenerator> = {
  '': (classId) => [{ label: 'Tổng quan', href: `/class/${classId}` }],

  exam: (classId, rest) => {
    const [examId, section, action] = rest

    const base = [{ label: 'Danh sách bài thi', href: `/class/${classId}/exam` }]

    if (!examId) return base

    const examDetail = { label: `Chi tiết Bài thi`, href: `/class/${classId}/exam/${examId}` }

    if (section === 'topic') {
      if (action === 'add') {
        return [...base, examDetail, { label: 'Thêm đề bài', href: '' }]
      }

      if (!isNaN(Number(action)) && rest[3] === 'edit') {
        return [...base, examDetail, { label: 'Sửa đề bài', href: '' }]
      }

      return [...base, examDetail]
    }

    return [...base, examDetail]
  },

  member: (classId) => [{ label: 'Thành viên', href: `/class/${classId}/member` }]
}

export default function Breadcrumb() {
  const pathname = usePathname()

  const breadcrumbs: BreadcrumbItem[] = useMemo(() => {
    const [classId, section = '', ...rest] = pathname.split('/').slice(2)
    const list: BreadcrumbItem[] = [{ label: 'Lớp học', href: '/classes' }]
    list.push(...(breadcrumbMap[section]?.(classId, rest) ?? []))
    return list
  }, [pathname])

  return (
    <div className='flex items-center gap-2'>
      <SidebarTrigger />
      <Separator orientation='vertical' className='mr-2 h-4' />
      <BreadcrumbUI>
        <BreadcrumbList>
          {breadcrumbs.map((item, index) => {
            const isFirst = index === 0
            const isLast = index === breadcrumbs.length - 1
            const isMiddle = !isFirst && !isLast

            return (
              <Fragment key={index}>
                <>
                  <BreadcrumbItem className={isMiddle ? 'hidden md:inline-block' : ''}>
                    {item.href && !isLast ? (
                      <BreadcrumbLink asChild>
                        <Link href={item.href}>{item.label}</Link>
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage>{item.label}</BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                  {!isLast && <BreadcrumbSeparator className={isMiddle ? 'hidden md:inline-block' : ''} />}
                </>
              </Fragment>
            )
          })}
        </BreadcrumbList>
      </BreadcrumbUI>
    </div>
  )
}
