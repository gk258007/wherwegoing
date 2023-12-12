"use client";
import Image from 'next/image'
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/nextjs'
import Public from './notyours'
import Private from './homescreen'
//omg
export default function Home() {
  return (
    <div>
      <SignedIn>
      <Private/>
    </SignedIn>
    <SignedOut>
      <Public/>
    </SignedOut>
    </div>
    
  )
}
