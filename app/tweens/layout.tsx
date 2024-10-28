import React from 'react'
import Heading from '@/components/Heading'

const layout = ({children}:{children: React.ReactNode}) => {
  return (
    <div>
        <Heading text="ANIMATIONS" />
        <div>
            {children}
        </div>
    </div>
  )
}

export default layout