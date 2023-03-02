import React from 'react'

const HeroBanner = ()=> {

  const backgroundImg="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1122&q=80"
 
  return (
    <div className="relative bg-cover bg-center h-screen overflow-hidden"
        style={{
              backgroundImage: `url(${backgroundImg})`
          }}
     >
        <div className="absolute bottom-32 right-10">
            <div className="flex flex-col justify-center items-center sm:items-start">
              <div className="pl-4 sm:pl-0 text-4xl tracking-tight font-normal text-white md:text-5xl lg:text-6xl">
                <span className="">Mountain Bikes, For A New Adventure</span>
              </div>
              <p className="mt-3 sm:mt-5 text-lg text-gray-300   sm:text-xl">
                Designed to comfort and stability on mountain trails.
              </p>
              <div className="mt-5 sm:mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
                  <a href="#"
                     className=" flex items-center justify-center w-96 py-3 border border-transparent text-base  rounded-md text-white bg-black hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
                  >
                    BUY ONLINE
                  </a>
                  <a href="#"
                     className="flex items-center justify-center w-96 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
                  >
                    NEW ARRIVAL
                  </a>
              </div>
            </div>
      </div>
    </div>
  );
}

export default HeroBanner;