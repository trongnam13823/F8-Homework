'use client'

import Navbar from '@/components/Navbar'
import { ReactNode, useEffect } from 'react'
import { useUserStore } from '@/store/useUser.store'
import Cookies from 'js-cookie'

export default function NavbarLayout({ children }: { children: ReactNode }) {
  const { setAccessDecoded } = useUserStore()

  useEffect(() => {
    setAccessDecoded(Cookies.get('access')!, Cookies.get('refresh')!)
  }, [setAccessDecoded])

  return (
    <div className='bg-[#f7f7f9] min-h-screen'>
      <Navbar />
      {children}
    </div>
  )
}
