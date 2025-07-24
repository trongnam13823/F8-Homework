'use client'

import * as React from 'react'
import { ChevronDownIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

interface InputDateProps {
  date: Date | undefined
  setDate: (date: Date | undefined) => void
}

export default function InputDate({ date, setDate }: InputDateProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          id='date'
          className='w-full justify-between font-normal text-foreground hover:text-foreground'
        >
          {date instanceof Date && !isNaN(date.getTime()) ? date.toLocaleDateString('vi-VN') : 'dd/mm/yyyy'}
          <ChevronDownIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto overflow-hidden p-0' align='start'>
        <Calendar
          mode='single'
          selected={date}
          captionLayout='dropdown'
          onSelect={(date) => {
            setDate(date)
            setOpen(false)
          }}
        />
      </PopoverContent>
    </Popover>
  )
}
