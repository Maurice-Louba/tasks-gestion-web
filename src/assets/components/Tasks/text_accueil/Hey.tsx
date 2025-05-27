import descend from '../descend-removebg-preview.png'
import { ReactTyped } from "react-typed"
const Hey = () => {
  return (
    <div>
      <div className='text-white'>
              <div className='max-w-[800px] mt-[96px]  w-full h-screen mx-auto text-center flex flex-col items-center'>
                
                  <h1 className='md:text-6xl sm:text-6xl text-4xl font-bold md:p-7 text-[#0ac0f3]'>Swipe up to add tasks and move closer to your goals!</h1>
                  <div className='flex py-4'>
                      <p className='md:text-5xl sm:text-3xl  text-xl font-bold '>Stay organized. Stay </p>
                      <ReactTyped 
                      className='md:text-5xl sm:text-3xl  text-xl font-bold pl-3 text-gray-500'
                      strings={["ahead ", "locked in","focused !"]} typeSpeed={200} backSpeed={50} loop={true} />
      
                  </div>
                  <div>
                    <img className='w-[350px]' src={descend}/>
                  </div>
                  
                  
              </div>
          </div>
    </div>
  )
}

export default Hey
