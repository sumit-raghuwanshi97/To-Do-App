import React from 'react'

const footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-2">
      <p>&copy; {new Date().getFullYear()} To-Do App. All rights reserved.</p>
    </footer>
  )
}

export default footer