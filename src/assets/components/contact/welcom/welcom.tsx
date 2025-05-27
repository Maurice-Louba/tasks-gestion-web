import welcomm from '../welcom/illustration-3d-d-un-jeune-homme-d-affaires-avec-une-pose-de-succes-agitant-la-main-removebg-preview.png'
import notre from '../../contact/personnage-de-bucheron-de-dessin-anime-3d-removebg-preview.png'

import photo from '../welcom/WhatsApp_Image_2025-05-24_at_21.01.57-removebg-preview.png'
import { ReactTyped } from "react-typed"
const Welcom = () => {
  return (
   <div className='text-white'>
        <div className='max-w-[800px] mt-[96px]  w-full h-screen mx-auto text-center flex flex-col items-center'>
            <div>
                <h1  className="md:text-4xl text-[25px]">Hey, we are happy to see you <span className="font-bold text-[#0ac0f3] ">again</span> 😄 ! </h1>
            </div>
            <div className="my-7">
                <p className='md:text-4xl sm:text-3xl  text-xl font-bold '>Prepare yourself to  
                <ReactTyped 
                className='md:text-4xl sm:text-2xl  text-xl font-bold pl-3 text-gray-500'
                strings={["jump ", "dive","visite"]} typeSpeed={200} backSpeed={50} loop={true} />
                 <br/>the univers of owners</p>
            </div>
            <div className='flex flex-between mx-[-150px] '>
                
                <img className='h-[450px] mask-gradient' src={welcomm}/>
                
            </div>

            <div className='max-w-[1240px] md:my-0 my-4 mx-auto grid md:grid-cols-2  flex-between gap-8'>
                <div className='w-[400px] bg-[#00000033]  shadow-xl py-4 flex flex-col hover:scale-105 duration-300 mx-[-150px] rounded-lg'>
                    <img className='w-[50px] h-[50px] mx-auto mt-[-40px]' src={photo}  alt='Standard'/>
                    <h2 className='text-2xl font-bold py-8 text-center'>Maurice Louba</h2>
                    <p className='text-center font-bold text-4xl'>20 years</p>
                <div className='text-center font-medium'>
                    <p className='py-4 border-b mx-8 mt-4'>Computer engineering</p>
                    <p className='py-4 border-b mx-8'>first year</p>
                    <p className='py-4 border-b mx-8'>Ensmr</p>
                </div>
                <div className='mx-auto'>
                    <button className='bg-[#0ac0f3] px-6 hover:scale-105 duration-105 font-medium w-[125px] h-[40px] my-4 sm:ml-4 text-[#000300] rounded-md'><a href='https://www.linkedin.com/in/maurice-louba-600408359/'>linkIden</a></button>
                </div>
                </div>

                <div className='w-[400px] bg-[#00000033]  shadow-xl py-4 flex flex-col hover:scale-105 duration-300 mx-[150px] rounded-lg'>
                    <img className='w-[50px] h-[50px] mx-auto mt-[-40px]' src={notre}  alt='Standard'/>
                    <h2 className='text-2xl font-bold py-8 text-center'>Khalid</h2>
                    <p className='text-center font-bold text-4xl'>20 years</p>
                <div className='text-center font-medium'>
                    <p className='py-4 border-b mx-8 mt-4'>Computer engineering</p>
                    <p className='py-4 border-b mx-8'>first year</p>
                    <p className='py-4 border-b mx-8'>Ensmr</p>
                </div>
                <div className='mx-auto'>
                    <button className='bg-[#0ac0f3] px-6 hover:scale-105 duration-105 font-medium w-[125px] h-[40px] my-4 sm:ml-4 text-[#000300] rounded-md'><a href='https://www.linkedin.com/in/maurice-louba-600408359/'>linkIden</a></button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Welcom
