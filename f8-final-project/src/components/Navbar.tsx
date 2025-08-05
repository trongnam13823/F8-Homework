'use client'

import { ChevronDown } from 'lucide-react'
import Logo from './Logo'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'
import { useUserStore } from '@/store/useUser.store'
import { useRouter } from 'next/navigation'
import { Role } from '@/schemas/users.schema'
import Cookies from 'js-cookie'

export default function Navbar() {
  const { accessDecoded } = useUserStore()
  const router = useRouter()

  const handleLogout = () => {
    Cookies.remove('access')
    Cookies.remove('refresh')
    router.push('/login')
  }

  return (
    <div className='flex justify-between items-center md:px-8 px-4 h-[var(--navbarHeight)] bg-white sticky top-0 left-0 right-0 z-50'>
      <Logo desc='Classroom' />

      {accessDecoded && (
        <div className='flex items-center gap-6'>
          <DropdownMenu>
            <DropdownMenuTrigger className='focus-visible:outline-none flex items-center gap-3 cursor-pointer'>
              <Avatar>
                <AvatarImage src={accessDecoded?.avata.url ?? ''} />
                <AvatarFallback>{accessDecoded?.name}</AvatarFallback>
              </Avatar>
              <div className=''>
                <p className='text-left font-semibold text-sm'>{accessDecoded?.email}</p>
                <p className='text-left text-[#4a5568] text-xs'>
                  {(accessDecoded?.role === Role.Student && 'Học sinh') ||
                    (accessDecoded?.role === Role.Teacher && 'Giáo viên') ||
                    (accessDecoded?.role === Role.Admin && 'Quản trị')}
                </p>
              </div>
              <ChevronDown size={16} className='' />
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' sideOffset={14}>
              <DropdownMenuItem asChild>
                <Link href={'/profile'}>Thông tin cá nhân</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>Đăng xuất</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </div>
  )
}
