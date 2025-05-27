import  { ReactTyped} from "react-typed"
import { useNavigate } from "react-router"

const En_tete= () => {
    const navigate= useNavigate()
 
    

  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[96px]  w-full h-screen mx-auto text-center flex flex-col items-center'>
          
            <p className='text-[#0ac0f3] font-bold p-2'>Turn your chaos into clarity — start your day with purpose.</p>
            <h1 className='md:text-6xl sm:text-6xl text-4xl font-bold md:p-7 text-[#e6f0ff]'>Hey there! Ready to make today count ?</h1>
            <div className='flex py-4'>
                <p className='md:text-5xl sm:text-3xl  text-xl font-bold '>Stay organized. Stay </p>
                <ReactTyped 
                className='md:text-5xl sm:text-3xl  text-xl font-bold pl-3 text-gray-500'
                strings={["ahead ", "locked in","focused !"]} typeSpeed={200} backSpeed={50} loop={true} />

            </div>
            <p className=' md:text-2xl text-xl text-[#1e3a8a] font-bold text-gray-500'>From scattered thoughts to peaceful order — your journey begins here.</p>
            <button className="bg-[#0ac0f3] hover:scale-105 duration-300 w-[125px] font-medium h-[40px] my-4 text-black rounded-md" onClick={()=>navigate('/tasks')}>Get Started</button>
        </div>
    </div>
  )
}
  


export default En_tete
