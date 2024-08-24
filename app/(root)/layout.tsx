"use client"
import Navbar from '@/components/shared/Navbar/Navbar'
import Theme from '@/components/shared/Navbar/Theme'
import { ThemeProvider } from '@/context/ThemeProvider'
import React from 'react'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (

    <ThemeProvider>
    <main className='background-light850_dark100 relative'>
        <Navbar/> 

        <div className='flex'>
            leftsidebar

            <section className=' flex min-h-screen flex-1 flex-colpx-6 pb-6 pt-36 max-md:pb-14 sm:px-14'>
                <div className=' mx-auto w-full max-w-5xl'>
                    {children}
                </div>
            </section>

            rightsidebar
        </div>
    </main>
    </ThemeProvider>
  )
}

export default Layout