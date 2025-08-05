import { ReactNode } from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function UnAuthLayout({ children }: { children: ReactNode }) {
  const cookieStore = await cookies()
  const refresh = cookieStore.get('refresh')?.value

  if (refresh) redirect('/classes')

  return (
    <div className='w-screen h-screen flex items-center justify-center bg-auth'>
      <div className='shadow rounded overflow-hidden w-fit m-4'>{children}</div>
    </div>
  )
}
