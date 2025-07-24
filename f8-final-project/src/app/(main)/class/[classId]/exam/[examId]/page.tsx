'use client'

import { Button } from '@/components/ui/button'
import { Edit, Plus, Trash } from 'lucide-react'
import React from 'react'
import { ExamDialog } from '../ExamDialog'
import { DeleteExamDialog } from '../DeleteExamDialog'
import TopicCard from './TopicCard'
import { submissions, topics } from './data'
import Link from 'next/link'
import { ExamSubmissionCard } from './ExamSubmissionCard'
import { usePathname } from 'next/navigation'

export default function ExamDetail() {
  const pathname = usePathname()

  return (
    <div className='space-y-8'>
      <div className='flex justify-between bg-white border-1 border-primary rounded-xl p-6 gap-6 flex-wrap shadow'>
        <div className='space-y-1 sm:text-lg'>
          <p>
            Tên bài thì: <b className='uppercase'>Đề thi giữa kỳ toán</b>
          </p>
          <p>
            Ngày thì: <b>14/08/2025</b>
          </p>
          <p>
            Thời gian giữa các bài thi: <b>10 phút</b>
          </p>
        </div>

        <div className='flex gap-2 ml-auto'>
          <ExamDialog
            mode='edit'
            trigger={
              <Button variant='secondary' size='sm' className='text-primary hover:bg-primary/10'>
                <Edit /> Sửa
              </Button>
            }
            onSubmit={(v) => console.log(v)}
          />

          <DeleteExamDialog
            examName='Đề thi giữa kỳ toán'
            onConfirm={() => {
              console.log('Đã xóa bài thi!')
            }}
            trigger={
              <Button
                variant='secondary'
                size='sm'
                className='text-destructive border-destructive hover:bg-destructive/10 hover:text-destructive'
              >
                <Trash /> Xóa
              </Button>
            }
          />
        </div>
      </div>

      <div className='space-y-5'>
        <div className='flex items-center justify-between flex-wrap gap-5'>
          <h2 className='font-bold text-xl text-primary uppercase'>Danh sách đề bài</h2>
          <Button asChild type='button' variant='default' className='h-10 px-4! sm:w-fit w-full font-semibold'>
            <Link href={pathname + '/topic/add'}>
              <Plus className='size-5' /> Thêm đề bài
            </Link>
          </Button>
        </div>

        <div className='grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-5'>
          {topics.map((topic) => (
            <TopicCard
              key={topic.id}
              id={topic.id}
              title={topic.title}
              code={topic.code}
              questionCount={topic.questionCount}
              onDelete={() => {
                console.log('Xóa đề', topic.id)
              }}
            />
          ))}
        </div>
      </div>

      <div className='space-y-5'>
        <h2 className='font-bold text-xl text-primary uppercase'>Danh sách bài làm</h2>

        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
          {submissions.map((submission, index) => (
            <ExamSubmissionCard
              key={index}
              name={submission.name}
              email={submission.email}
              time={submission.time}
              total={submission.total}
              status={submission.status}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
