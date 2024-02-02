import React from 'react'

const footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
      <p>&copy; {new Date().getFullYear()} To-Do App. All rights reserved.</p>
      <p className='text-xs'>sumitraghuwanshi7697@gmail.com</p>
    </footer>
  )
}

export default footer