import { ReactNode } from 'react'

export default function AuthLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-auth'>
      <div className='shadow rounded overflow-hidden w-fit m-4'>{children}</div>
    </div>
  )
}
