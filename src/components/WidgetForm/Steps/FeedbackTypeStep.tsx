import { useState } from "react"
import { CloseButton } from "../../CloseButton";
import { FeedbackType, feedbackTypes } from "../WidgetForm"

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({onFeedbackTypeChanged}: FeedbackTypeStepProps){
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  return(
    <>
    <header>
        <span className="text-xl leading-6">Deixe deu feedback</span>
        <CloseButton/>
      </header>
    <div className="flex py-8 gap-2 w-full">
        {
          Object.entries(feedbackTypes).map(([key, value]) =>{
            return(
              <button
              type="button"
              key={key}
              onClick={() => setFeedbackType(key as FeedbackType)}
               className="bg-zinc-800 rounded-lg py-5 w-24 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 outline-none">
                <img src={value.image.source} alt={value.image.alt}/>
                <span>{value.title}</span>
              </button>
            )
          })
        }
      </div>
    </>
  )
}