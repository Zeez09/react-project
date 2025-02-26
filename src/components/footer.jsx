import React from 'react'
const footer = () => {
  return (
    <>
      <footer class="bg-gray-100 py-8">
  <div class="max-w-6xl mx-auto px-6">
    <div class="flex flex-col md:flex-row justify-between items-center border-b pb-6">
      <div class="flex flex-col md:flex-row items-center space-x-4">
        <span class="font-semibold text-lg">Untitled UI</span>
        <nav class="hidden md:flex space-x-6 text-gray-600">
          <a href="#" class="hover:text-black">Overview</a>
          <a href="#" class="hover:text-black">Features</a>
          <a href="#" class="hover:text-black">Pricing</a>
          <a href="#" class="hover:text-black">Careers</a>
          <a href="#" class="hover:text-black">Help</a>
          <a href="#" class="hover:text-black">Privacy</a>
        </nav>
      </div>
      <div class="flex flex-col md:flex-row items-center space-x-4 mt-4 md:mt-0">
        <input type="email" placeholder="Enter your email" class="border rounded-md px-4 py-2 text-sm w-full md:w-auto"/>
        <button class="bg-blue-600 text-white px-4 py-2 rounded-md w-full md:w-auto">Subscribe</button>
      </div>
    </div>
    <div class="mt-6 flex flex-col md:flex-row justify-between text-gray-500 text-sm">
      <p class="text-center md:text-left">&copy; 2077 Untitled UI. All rights reserved.</p>
      <nav class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-center md:text-left mt-4 md:mt-0">
        <a href="#" class="hover:text-black">Terms</a>
        <a href="#" class="hover:text-black">Privacy</a>
        <a href="#" class="hover:text-black">Cookies</a>
      </nav>
    </div>
  </div>
</footer>
    </>
  )
}

export default footer
