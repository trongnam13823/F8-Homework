'use client'

import { usePathname } from 'next/navigation'
import {
  Sidebar as SidebarUI,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar
} from '@/components/ui/sidebar'
import { LayoutGrid, TrophyIcon, Users } from 'lucide-react'
import Logo from '@/components/Logo'
import Link from 'next/link'

const menuItems = [
  {
    title: 'Tổng quan',
    path: '',
    icon: LayoutGrid
  },
  {
    title: 'Bài thi',
    path: 'exam',
    icon: TrophyIcon
  },
  {
    title: 'Thành viên',
    path: 'member',
    icon: Users
  }
]

export function Sidebar() {
  const pathname = usePathname()
  const match = pathname.match(/^\/class\/([^/]+)(?:\/([^/]+))?/)
  const [, classId, subPath] = match || []
  const { setOpenMobile } = useSidebar()
  return (
    <SidebarUI variant='sidebar' className='top-[var(--navbarHeight)]'>
      <SidebarContent className='bg-white'>
        <SidebarHeader className='md:hidden block md:px-8 px-4 h-[var(--navbarHeight)]'>
          <Logo className='md:hidden block' desc='Classroom' />
        </SidebarHeader>
        <SidebarGroup className='md:p-6 p-2'>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const isActive = (!subPath && item.path === '') || subPath === item.path

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className='data-[active=true]:bg-primary/10 data-[active=true]:text-primary'
                    >
                      <Link
                        href={`/class/${classId}/${item.path}`}
                        className='text-lg! h-full'
                        onClick={() => setOpenMobile(false)}
                      >
                        <item.icon className='size-6!' />
                        <span className='font-medium'>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </SidebarUI>
  )
}
