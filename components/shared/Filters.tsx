import React from 'react'
interface Props{
    filters: {
        name: string,
        value: string
    }[];
    otherClasses: string
    containerClasses: string
}
const Filters = ({filters, otherClasses, containerClasses}: Props) => {
  return (
    <div className={`relative ${containerClasses}`}>Filters</div>
  )
}

export default Filters