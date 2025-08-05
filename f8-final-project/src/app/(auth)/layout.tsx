import { ReactNode } from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function AuthLayout({ children }: { children: ReactNode }) {
  const cookieStore = await cookies()
  const refresh = cookieStore.get('refresh')?.value

  if (!refresh) redirect('/login')

  return children
}
