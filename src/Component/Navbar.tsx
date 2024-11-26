import React from 'react'
import { FaRegHeart, FaUserPlus } from 'react-icons/fa'
import { IoCartOutline, IoSearchSharp } from 'react-icons/io5'

type Props = {}

export default function Navbar({}: Props) {

  const navItem = [
    {
      id :"1" ,
      name : "Home" ,
    },
    {
      id :"2" ,
      name : "Shop" ,
    },
    {
      id :"3" ,
      name : "About" ,
    },
    {
      id :"4" ,
      name : "Contact",
    }
  ]
  return (
    <div className='shadow-md py-7 px-10 bg-white relative z-10'>
        <div className="flex justify-between items-center">
          <div className=""><img src="public/logo.webp" className='h-10 w-auto' alt="" /></div>
          <div className="">
            <ul className='flex gap-16 text-[17px] font-medium'>
              {
                navItem.map((item) => (
                  <li key={item.id}><a href="">{item.name}</a></li>
                )) 
              }
            </ul>
          </div>
          <div className="">
            <ul className='flex gap-8 text-[20px]'>
              <li><FaUserPlus /></li>
              <li><IoSearchSharp /></li>
              <li><FaRegHeart /></li>
              <li><IoCartOutline /></li>
            </ul>
          </div>
        </div>
    </div>
  )
}