import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import  logo from '../../../images/objectif.png'
import { useState } from 'react'
import {  useNavigate  } from 'react-router'
const Navbar = ()=>{
    const navigate = useNavigate ()
    
    const [nav,setNav]=useState(false)
    const handleNav = ()=>{
        setNav(!nav)
    }
    return(
    <div className='flex items-center h-24 max-w-[1240px] mx-auto text-white px-4  justify-between'>
    <div className='flex flex-col items-center relative'>
        <img className={nav==false?'w-[50px] h-[50px]' : 'hidden'} src={logo} />
        <h1 className={nav==false?'text-[#0ac0f3] italic': 'hidden'}>save time</h1>
    </div>
        <ul className='hidden md:flex'>
            <li className="p-4 hover:bg-[#00000033] hover:w-[100%] hover:h-[80%] hover:rounded-md hover:text-[#0ac0f3] cursor-pointer" onClick={()=>navigate('/')}>Home</li>
            <li className="p-4 hover:bg-[#00000033] hover:w-[100%] hover:h-[80%] hover:rounded-md hover:text-[#0ac0f3] cursor-pointer" onClick={()=>navigate('/tasks')} >Tasks </li>
            <li className="p-4 hover:bg-[#00000033] hover:w-[100%] hover:h-[80%] hover:rounded-md hover:text-[#0ac0f3] cursor-pointer " onClick={()=>navigate('/list')}>List</li>
            <li className="p-4 hover:bg-[#00000033] hover:w-[100%] hover:h-[80%] hover:rounded-md hover:text-[#0ac0f3] cursor-pointer" onClick={()=>navigate('/setting')}>Setting</li>
            <li className="p-4 hover:bg-[#00000033] hover:w-[100%] hover:h-[80%] hover:rounded-md hover:text-[#0ac0f3] cursor-pointer" onClick={()=>navigate('/contact')}>Contact</li>

        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav? <AiOutlineMenu size={20}/>:<AiOutlineClose size={20}/>}
            
        </div>
        <div className={nav!?'fixed left-0 top-0  border-r border-r-gray-800 w-[60%] h-full  p-4 ease-in-out duration-500 bg-[#00000033]':'fixed left-[-100%]'}>
            <div className='flex flex-col  mx-6 relative'>
            <img className='w-[50px] h-[50px]' src={logo} />
            <h1 className='text-[#0ac0f3] italic'>save time</h1>
            </div>
            <ul className=' uppercase p-4'>
                <li className="p-4 border-b border-gray-600 hover:bg-gray-900 hover:w-[100%] hover:h-[80%] hover:rounded-md hover:text-[#0ac0f3]">Home</li>
                <li className="p-4 border-b border-gray-600 hover:bg-gray-900 hover:w-[100%] hover:h-[80%] hover:rounded-md hover:text-[#0ac0f3]">Tasks</li>
                <li className="p-4 border-b border-gray-600 hover:bg-gray-900 hover:w-[100%] hover:h-[80%] hover:rounded-md hover:text-[#0ac0f3]">Categories</li>
                <li className="p-4 border-b border-gray-600 hover:bg-gray-900 hover:w-[100%] hover:h-[80%] hover:rounded-md hover:text-[#0ac0f3]">Setting</li>
                <li className="p-4 border-b border-gray-600 hover:bg-gray-900 hover:w-[100%] hover:h-[80%] hover:rounded-md hover:text-[#0ac0f3]">Contact</li>
            </ul>

        </div>
    </div>
    )
}
export default Navbar 
