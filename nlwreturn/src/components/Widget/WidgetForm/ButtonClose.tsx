import { Popover } from '@headlessui/react'
import { X } from 'phosphor-react'
import React from 'react'

export default function ButtonClose() {
  return (
    <Popover.Button className="top-5 right-5 absolute 
    text-zinc-400 hover:text-zin-100" title='Fechar Formulário de Feedback'>
      <X weight='bold' className='w-4 h-4' />
    </Popover.Button>
  )
}
