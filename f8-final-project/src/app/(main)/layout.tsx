import Navbar from '@/components/Navbar'
import { ReactNode } from 'react'

export default function MainLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className='bg-[#f7f7f9] min-h-screen'>
      <Navbar />
      {children}
    </div>
  )
}
