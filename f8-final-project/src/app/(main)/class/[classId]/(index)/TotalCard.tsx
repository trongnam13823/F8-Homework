import React from 'react'

export default function TotalCard({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className='rounded-xl p-6 bg-white flex gap-6'>
      {icon}
      <p className='self-end text-base lg:text-lg xl:text-xl font-semibold text-gray-800'>{label}</p>
    </div>
  )
}
