import React, { useState, useEffect } from 'react'
import { signOut, useSession } from 'next-auth/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { shuffle } from 'lodash'

const colors = [
  'from-indigo-500',
  'from-blue-500',
  'from-green-500',
  'from-yellow-500',
  'from-red-500',
  'from-purple-500',
  'from-pink-500',
]

function Center() {
  const {data: session} = useSession()
  const [color, setColor] = useState(null)

  useEffect(() => {
    setColor(shuffle(colors).pop())
  }, [])
  
  return (
    <div className='flex-grow'>
      <header className='absolute top-5 right-8 ' >
        <div className='flex items-center bg-red-300 space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2 '>
          <img
            src={session?.user?.image}
            alt="noImg"
            className='h-10 w-10 rounded-full'
          />
          <h2>{session?.user?.name}</h2>
          <ChevronDownIcon className='h-5 w-5' />
        </div>
      </header>

      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8 `}>
        {/*  */}
        <p>Hello</p>
      </section>
    </div>
  )
}

export default Center