import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { members } from '../(index)/data'

export default function Member() {
  return (
    <div className='bg-white p-6 rounded-xl col-span-2 flex flex-col gap-4'>
      <h2 className='text-primary font-semibold text-lg uppercase'>Danh sách thành viên</h2>
      <Table>
        <TableHeader>
          <TableRow className='hover:bg-transparent'>
            <TableHead className='font-bold text-base p-4'>NO.</TableHead>
            <TableHead className='font-bold text-base p-4'>Họ và tên</TableHead>
            <TableHead className='font-bold text-base p-4'>Vị trí</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.map((m, i) => (
            <TableRow key={m.id} className={!(i % 2) ? 'bg-muted hover:bg-muted' : 'hover:bg-white'}>
              <TableCell className='p-4 font-medium text-base'>{i + 1}</TableCell>
              <TableCell className='p-4 text-base'>{m.fullname}</TableCell>
              <TableCell className='p-4 text-base'>{m.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
