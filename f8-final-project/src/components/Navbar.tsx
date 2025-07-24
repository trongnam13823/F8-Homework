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

export default function Navbar() {
  return (
    <div className='flex justify-between items-center md:px-8 px-4 h-[var(--navbarHeight)] bg-white sticky top-0 left-0 right-0 z-50'>
      <Logo desc='Classroom' />

      <div className='flex items-center gap-6'>
        <DropdownMenu>
          <DropdownMenuTrigger className='focus-visible:outline-none flex items-center gap-3 cursor-pointer'>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className=''>
              <p className='text-left font-semibold text-sm'>Trần Trọng Nam</p>
              <p className='text-left text-[#4a5568] text-xs'>Giáo viên</p>
            </div>
            <ChevronDown size={16} className='' />
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end' sideOffset={14}>
            <DropdownMenuItem asChild>
              <Link href={'/profile'}>Thông tin cá nhân</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href={'/login'}>Đăng xuất</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
