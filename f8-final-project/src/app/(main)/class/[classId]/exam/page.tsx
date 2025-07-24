'use client'

import { Plus, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { ExamList } from './ExamList'
import { ExamDialog } from './ExamDialog'
import { Button } from '@/components/ui/button'

export default function Exam() {
  return (
    <div className='space-y-8'>
      <div className='w-full flex items-center justify-between gap-4 flex-wrap'>
        <div className='relative min-w-96 md:flex-none flex-1'>
          <Search size={20} className='absolute left-3 top-1/2 -translate-y-1/2' />
          <Input type='search' placeholder='Tìm kiếm' className='h-10 w-full px-4 pl-11 md:text-base' />
        </div>

        <ExamDialog
          mode='add'
          trigger={
            <Button type='button' variant='default' className='h-10 px-4! sm:w-fit w-full font-semibold'>
              <Plus className='size-5' /> Thêm bài thi
            </Button>
          }
          onSubmit={(v) => console.log(v)}
        />
      </div>

      <ExamList
        title='Bài thi đang diễn ra'
        exams={[
          { id: '1', title: 'Thi giữa kỳ Toán', date: '10/08/2025' },
          { id: '2', title: 'Thi giữa kỳ Văn', date: '11/08/2025' },
          { id: '3', title: 'Thi giữa kỳ Anh', date: '12/08/2025' },
          { id: '4', title: 'Thi giữa kỳ Hóa', date: '13/08/2025' },
          { id: '5', title: 'Thi giữa kỳ Lý', date: '14/08/2025' },
          { id: '6', title: 'Thi giữa kỳ Sinh', date: '15/08/2025' },
          { id: '7', title: 'Thi giữa kỳ Sử', date: '16/08/2025' },
          { id: '8', title: 'Thi giữa kỳ Địa', date: '17/08/2025' },
          { id: '9', title: 'Thi giữa kỳ GDCD', date: '18/08/2025' },
          { id: '10', title: 'Thi thử THPT Toán', date: '19/08/2025' },
          { id: '11', title: 'Thi thử THPT Văn', date: '20/08/2025' },
          { id: '12', title: 'Thi thử THPT Anh', date: '21/08/2025' },
          { id: '13', title: 'Thi cuối kỳ Toán', date: '01/09/2025' },
          { id: '14', title: 'Thi cuối kỳ Văn', date: '02/09/2025' },
          { id: '15', title: 'Thi cuối kỳ Hóa', date: '03/09/2025' }
        ]}
      />

      <ExamList
        title='Bài thi chưa bắt đầu'
        exams={[
          { id: '1', title: 'Thi giữa kỳ Toán', date: '01/08/2025' },
          { id: '2', title: 'Thi giữa kỳ Hóa', date: '03/08/2025' },
          { id: '3', title: 'Thi giữa kỳ Sinh', date: '05/08/2025' },
          { id: '4', title: 'Thi giữa kỳ Văn', date: '07/08/2025' },
          { id: '5', title: 'Thi giữa kỳ Sử', date: '09/08/2025' },
          { id: '6', title: 'Thi thử THPT Toán', date: '12/08/2025' },
          { id: '7', title: 'Thi thử THPT Anh', date: '15/08/2025' },
          { id: '8', title: 'Thi thử THPT Lý', date: '18/08/2025' },
          { id: '9', title: 'Thi cuối kỳ Địa', date: '22/08/2025' },
          { id: '10', title: 'Thi cuối kỳ GDCD', date: '25/08/2025' }
        ]}
      />
    </div>
  )
}
