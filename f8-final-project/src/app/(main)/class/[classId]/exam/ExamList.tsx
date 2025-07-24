import { ExamCard } from './ExamCard'

interface Exam {
  id: string
  title: string
  date: string
}

interface ExamListProps {
  title: string
  exams: Exam[]
}

export function ExamList({ title, exams }: ExamListProps) {
  return (
    <div className='space-y-5'>
      <h2 className='font-bold text-xl text-primary uppercase'>{title}</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {exams.map((exam) => (
          <ExamCard key={exam.id} id={exam.id} title={exam.title} date={exam.date} />
        ))}
      </div>
    </div>
  )
}
