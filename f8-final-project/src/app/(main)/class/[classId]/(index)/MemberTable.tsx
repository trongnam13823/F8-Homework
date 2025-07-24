import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

type Member = {
  id: string
  fullname: string
  role: string
}

export function MemberTable({ members }: { members: Member[] }) {
  return (
    <div className='bg-white p-6 rounded-xl col-span-2 flex flex-col gap-4'>
      <h2 className='text-primary font-semibold text-lg uppercase'>Danh sách thành viên</h2>
      <div className='sm:flex-1 sm:relative'>
        <Table className='sm:absolute sm:inset-0 overflow-y-auto scrollbar-thin'>
          <TableHeader className='sticky top-0 bg-muted'>
            <TableRow className='hover:bg-transparent'>
              <TableHead className='font-bold'>ID</TableHead>
              <TableHead className='font-bold'>Họ và tên</TableHead>
              <TableHead className='font-bold'>Vị trí</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members.map((m, i) => (
              <TableRow key={m.id} className={i % 2 ? 'bg-muted hover:bg-muted' : 'hover:bg-white'}>
                <TableCell className='font-medium'>{m.id}</TableCell>
                <TableCell>{m.fullname}</TableCell>
                <TableCell>{m.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
