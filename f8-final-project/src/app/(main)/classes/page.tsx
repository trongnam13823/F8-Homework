import ClassCard from './ClassCard'
import { Plus, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import RequiredMark from '@/components/RequiredMark'

const mockClasses = [
  { id: 1, name: 'Lớp 12A1', studentCount: 42, code: 'CL123456' },
  { id: 2, name: 'Lớp 11B2', studentCount: 38, code: 'CL654321' },
  { id: 3, name: 'Lớp 10C3', studentCount: 45, code: 'CL112233' },
  { id: 4, name: 'Lớp 9D4', studentCount: 33, code: 'CL445566' },
  { id: 5, name: 'Lớp 12A5', studentCount: 40, code: 'CL778899' },
  { id: 6, name: 'Lớp 11B6', studentCount: 47, code: 'CL998877' },
  { id: 7, name: 'Lớp 10C7', studentCount: 36, code: 'CL334455' },
  { id: 8, name: 'Lớp 9D8', studentCount: 50, code: 'CL221100' },
  { id: 9, name: 'Lớp 12A9', studentCount: 41, code: 'CL009988' },
  { id: 10, name: 'Lớp 11B10', studentCount: 44, code: 'CL556677' },
  { id: 11, name: 'Lớp 10C11', studentCount: 39, code: 'CL887766' },
  { id: 12, name: 'Lớp 9D12', studentCount: 43, code: 'CL778800' }
]

export default function ClassesPage() {
  return (
    <div className='md:px-8 px-4 py-8'>
      <div className='flex items-center justify-between gap-5 flex-wrap'>
        <h1 className='font-bold text-2xl'>Danh sách lớp học</h1>
        <div className='flex gap-4 flex-wrap md:w-fit w-full'>
          <div className='relative min-w-80 md:flex-none flex-1'>
            <Search size={20} className='absolute left-3 top-1/2 -translate-y-1/2' />
            <Input type='search' placeholder='Tìm kiếm' className='h-10 w-full px-4 pl-11 md:text-base' />
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button type='button' variant='default' className='h-10 px-4! sm:w-fit w-full font-semibold'>
                <Plus className='size-5' /> Thêm lớp
              </Button>
            </DialogTrigger>

            <form>
              <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader>
                  <DialogTitle>Thêm lớp học mới</DialogTitle>
                  <DialogDescription> Vui lòng nhập thông tin đầy đủ để tạo lớp học mới.</DialogDescription>
                </DialogHeader>
                <div className='grid gap-4'>
                  <div className='grid gap-3'>
                    <Label htmlFor='name'>
                      Tên lớp học <RequiredMark />
                    </Label>
                    <Input id='name' />
                  </div>
                  <div className='grid gap-3'>
                    <Label htmlFor='code'>
                      Mã bảo vệ <RequiredMark />
                    </Label>
                    <Input id='code' />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant='outline'>Hủy</Button>
                  </DialogClose>
                  <Button type='submit'>Tạo mới</Button>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>
        </div>
      </div>

      <div className='mt-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {mockClasses.map(({ id, name, studentCount, code }) => (
          <ClassCard key={id} id={id} name={name} studentCount={studentCount} code={code} />
        ))}
      </div>
    </div>
  )
}
