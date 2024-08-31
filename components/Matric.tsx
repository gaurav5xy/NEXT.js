import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface Props {
    imgURL: string;
    alt: string;
    value: string;
    title: string;
    textStyle?: string;
    href?: string;
    isAuthor?: boolean
}
const Matric = ({imgURL, alt, value, title, textStyle, href, isAuthor} : Props) => {
  const matricContent = (
    <>
    <Image
        src={imgURL}
        alt={alt}
        width={16}
        height={16}
        className={` object-contain ${href ? 'rounded-full' : ''}`}
        />
        <p className={`${textStyle} flex items-center gap-1`}>
            {value}
            <span className={` smal-regular line-clamp-1 ${isAuthor ?  'max-sm:hidden' : ''}`}>{title}</span>
            
        </p>
        </>
  )

  if(href){
    return(
      <Link href={href} className=' flex-center gap-1'>
        {matricContent}
      </Link>
    )
  }
  return (
    <div className=' flex-center flex-wrap gap-1'>
        {
          matricContent
        }
    </div>
  )
}

export default Matric