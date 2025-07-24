import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export default function Logo({ className, desc }: { className?: string; desc?: string }) {
  return (
    <Link
      href='/classes'
      className={cn(
        'flex items-center justify-center font-bold w-fit gap-2',
        desc ? 'text-2xl' : 'text-5xl',
        className
      )}
    >
      <div className={cn('relative aspect-[65/50]', desc ? 'md:block hidden w-[40px]' : 'block w-[65px]')}>
        <Image src='/logo.png' fill sizes={desc ? '40px' : '65px'} alt='BKStar' style={{ objectFit: 'contain' }} />
      </div>

      <div className='flex flex-col'>
        <p>
          <span className='text-[#113249]'>BK</span>
          <span className='text-[#ff8e03]'>Star</span>
        </p>
        {desc && <p className='text-xs -mt-1'>{desc}</p>}
      </div>
    </Link>
  )
}
