import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
<section class="bg-gray-100 min-h-screen">
  <div class="max-w-6xl mx-auto p-4 md:p-6">
    <div class="bg-white rounded-2xl shadow-md overflow-hidden">
  
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100">

        <div class="flex items-center space-x-4">
          <div class="rounded-md bg-gray-900 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" />
            </svg>
          </div>
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
              <img src="/api/placeholder/32/32" alt="Profile" class="w-full h-full object-cover" />
            </div>
            <span class="font-medium">Mr. Gibson</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
        
    
        <div class="flex items-center space-x-3">
          <div class="bg-white border border-gray-100 rounded-full px-4 py-2 flex items-center space-x-2 shadow-sm">
            <span class="font-medium">Project 001</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </div>
          <button class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
            </svg>
          </button>
          <button class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
            </svg>
          </button>
          <button class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </button>
        </div>
      </div>
      
     
      <div class="p-6 pt-12 bg-gradient-to-b from-blue-50 to-white">
      
        <div class="mb-8">
          <div class="flex space-x-10 border-b border-gray-200">
            <div class="text-3xl font-bold text-gray-900 pb-3 border-b-2 border-gray-900">Fit</div>
            <div class="text-3xl font-bold text-gray-300">Build</div>
            <div class="text-3xl font-bold text-gray-300">Launch</div>
          </div>
          <div class="flex space-x-6 mt-4">
            <button class="text-sm font-semibold pb-2 border-b-2 border-gray-900">Vision</button>
            <button class="text-sm font-semibold text-gray-500">Product Goals</button>
            <button class="text-sm font-semibold text-gray-500">FBL Canvas</button>
          </div>
        </div>
    
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
       
          <div class="space-y-6">
            <div class="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <div class="flex justify-between mb-4">
                <div>
                  <h3 class="text-lg font-semibold">Vision</h3>
                  <p class="text-xs text-gray-400">Fill Out How Vision.</p>
                </div>
                <button class="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </button>
              </div>
              <div class="h-32 flex items-center justify-between">
                <span class="text-gray-400 text-sm">Add Text...</span>
                <button class="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div class="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <div class="flex justify-between mb-4">
                <div>
                  <h3 class="text-lg font-semibold">How</h3>
                  <p class="text-xs text-gray-400">Fill Out How Summary.</p>
                </div>
                <button class="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </button>
              </div>
              <div class="h-32 flex items-center justify-between">
                <span class="text-gray-400 text-sm">Add Text...</span>
                <button class="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
        
          <div class="space-y-6">
            <div class="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <div class="flex justify-between mb-4">
                <div>
                  <h3 class="text-lg font-semibold">Why?</h3>
                  <p class="text-xs text-gray-400">Fill Out Why Summary.</p>
                </div>
                <button class="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </button>
              </div>
              <div class="py-4">
                <p class="text-sm">This Ambitious Venture Represents A Beacon Of Progress And Potential.</p>
              </div>
              <div class="flex justify-end">
                <button class="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div class="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <div class="flex justify-between mb-4">
                <div>
                  <h3 class="text-lg font-semibold">Mission</h3>
                  <p class="text-xs text-gray-400">Fill Out Mission Summary.</p>
                </div>
                <button class="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </button>
              </div>
              <div class="py-4">
                <p class="text-sm">With A Focus On Sustainability And Renewable Energy, Project 001 Is Determined To Reshape Our Approach To Environmental Challenges.</p>
              </div>
              <div class="flex justify-end">
                <button class="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
       
          <div class="space-y-6">
            <div class="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <div class="flex justify-between mb-4">
                <div>
                  <h3 class="text-lg font-semibold">What?</h3>
                  <p class="text-xs text-gray-400">Fill Out What Summary.</p>
                </div>
                <button class="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </button>
              </div>
              <div class="h-32 flex items-center justify-between">
                <span class="text-gray-400 text-sm">Add Text...</span>
                <button class="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div class="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <div class="flex justify-between mb-4">
                <div>
                  <h3 class="text-lg font-semibold">Values</h3>
                  <p class="text-xs text-gray-400">Fill Out Values Summary</p>
                </div>
                <button class="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-gray-100 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </button>
              </div>
              <div class="h-32 flex items-center justify-between">
                <span class="text-gray-400 text-sm">Add Text...</span>
                <button class="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
   
      <div class="flex justify-between p-6">
        <button class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
        </button>
        <button class="bg-black text-white rounded-full px-4 py-2 flex items-center space-x-2">
          <span>Add area</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>
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
  );
}

export default App;
