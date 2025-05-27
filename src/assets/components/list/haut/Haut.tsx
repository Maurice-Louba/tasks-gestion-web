import descend from '../../Tasks/personnage-d-affaires-de-dessin-anime-3d-removebg-preview (1).png'
import { ReactTyped } from "react-typed"
const Haut = () => {
  return (
    <div>
      <div className='text-white'>
              <div className='max-w-[800px] mt-[96px]  w-full h-screen mx-auto text-center flex flex-col items-center'>
                
                  <h1 className='md:text-6xl sm:text-6xl text-4xl font-bold md:p-7 text-[#0ac0f3]'>Keep your eyes on your task list — every step forward is progress!</h1>
                  <div className='flex py-4'>
                      <p className='md:text-5xl sm:text-3xl  text-xl font-bold '>Stay organized. Stay </p>
                      <ReactTyped 
                      className='md:text-5xl sm:text-3xl  text-xl font-bold pl-3 text-gray-500'
                      strings={["ahead ", "locked in","focused !"]} typeSpeed={200} backSpeed={50} loop={true} />
      
                  </div>
                  <div>
                    <img className='w-[400px]' src={descend}/>
                    <p className='text-2xl text-[#0ac0f3] font-bold my-[-150px]'>Here are what you have to do ! <br/>😄</p>
                  </div>
                  
                  
              </div>
          </div>
    </div>
  )
}

export default Haut
