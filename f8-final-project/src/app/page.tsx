import Logo from '@/components/Logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { cookies } from 'next/headers'

export default async function HomePage() {
  const cookieStore = await cookies()

  return (
    <div className=' grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
      <main className='flex flex-col gap-[32px] row-start-2 items-start'>
        <Logo />
        <div>
          <p className='mt-4 text-lg text-primary font-bold mb-2'>BKStar Classroom</p>
          <h1 className='text-2xl font-bold'>Cung cấp giải pháp học tập một cách hiệu quả</h1>
        </div>
        <ul className='text-left'>
          <li className='mb-2 tracking-[-.01em]'>Đa dạng bài tập và đề thi, quản lí theo lớp học.</li>
          <li className='tracking-[-.01em]'>Làm bài thi trực tuyến, hệ thống chấm bài tự động vào thông minh.</li>
        </ul>

        <div className='flex gap-4 items-center'>
          {cookieStore.get('refresh') ? (
            <Button asChild>
              <Link href='/classes'>Vào lớp</Link>
            </Button>
          ) : (
            <>
              <Button asChild>
                <Link href='/login'>Đăng nhập</Link>
              </Button>
              <Button asChild variant='outline'>
                <Link href='/register'>Đăng kí</Link>
              </Button>
            </>
          )}
        </div>
      </main>
    </div>
  )
}
