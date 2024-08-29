import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'

interface Props {
    iconPosition: string
}

const QuestionSearch = ({iconPosition}:Props) => {
  return (
        <div className=' background-light800_darkgradient flex flex-1 items-center gap-4 relative min-h-[56px] grow rounded-[10px] px-4'>
            {
                iconPosition === 'right' && <Image
                src='/assets/icons/search.svg'
                alt='Questions Search'
                height={24}
                width={24}
    
                />
            }
            <Input
            type='text'
            placeholder='Questions Search'
            value=''
            className=' paragraph-regular no-focus
            placeholder text-dark400_light700 background-light800_darkgradient border-none
            shadow-none outline-none'
            />
            {
                iconPosition === 'left' && <Image
                src='/assets/icons/search.svg'
                alt='Questions Search'
                height={24}
                width={24}
    
                />
            }
        </div>
  )
}

export default QuestionSearch