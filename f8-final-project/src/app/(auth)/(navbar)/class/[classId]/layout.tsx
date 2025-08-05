import React, { ReactNode } from 'react'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'
import Breadcrumb from '@/components/Breadcrumb'
import { Sidebar } from '@/components/Sidebar'

export default function ClassLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div>
      <SidebarProvider className='h-full'>
        <Sidebar />
        <SidebarInset className='bg-transparent flex flex-col flex-1'>
          <header className='flex h-12 shrink-0 items-center gap-2 border-b md:px-8 px-4 sticky top-0 bg-white z-50'>
            <Breadcrumb />
          </header>
          <main
            className='bg-transparent md:p-8 p-4 overflow-y-auto'
            style={{ height: 'calc(100vh - var(--navbarHeight) - var(--breadcrumbHeight)' }}
          >
            {children}
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
