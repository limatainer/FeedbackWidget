import React, { useState } from 'react'
import { FeedbackType } from '../../../types/feedback'

import FeedbackContentStep from './Steps/FeedbackContentStep'
import FeedbackSuccessStep from './Steps/FeedbackSuccessStep'
import FeedbackTypeStep from './Steps/FeedbackTypeStep'

export default function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  function handleRestartFeedback() {
    setFeedbackSent(false)
    setFeedbackType(null)
  }

  return (
    <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>

      {feedbackSent ? (<FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />)
          }
        </>
      )}
      <footer
        className='text-xs text-neutral-400'>
        Desenvolvido com ♥ por <a className='underline underline-offset-3' href="https://limatainer.vercel.app/">
          Limatainer
        </a>
        <p className='text-center'>Através da Rocketseat</p>
      </footer>
    </div >
  )
}
