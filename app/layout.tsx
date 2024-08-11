import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'

import {Nunito} from 'next/font/google';
import { Metadata } from 'next';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['1000','200','300','400','500','600','700','800','900'],
  variable: '--font-nunito'
})
export const metadata: Metadata = {
  title: 'DevFlow',
  description: 'A collaborative platform for developers to share knowledge and solve coding challenges.',
  icons: {
    icon: '/favicon.ico',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${nunito.variable}`}>
          {/* <SignedOut>
            <SignInButton />
          </SignedOut> */}
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}