import React, { useState } from 'react'

import { ChatTeardropDots } from 'phosphor-react'

export function WidgetWithUsestate() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false)

  function toogleWidgetVisibility() {
    setIsWidgetOpen(!isWidgetOpen)
    console.log(isWidgetOpen)
  }

  return (
    <div className='absolute bottom-5 right-5'>
      {/* {isWidgetOpen ? <p>Give us your feedback</p> : null} essa forma pode ser melhorada para a utilizada abaixo
      já que eu só tenho uma condição posso trabalhar com o &&*/}
      {isWidgetOpen && <p>Hello World</p>}
      <button onClick={toogleWidgetVisibility} className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
        <ChatTeardropDots className='w-6 h-6' />
        <span className='max-w-0 overflow-hidden 
        group-hover:max-w-xs 
        transition-all
        duration-500
        ease-liner
        '>
          <span className='pl-2'>Feedback</span>
        </span>
      </button>
    </div>
  )
}
