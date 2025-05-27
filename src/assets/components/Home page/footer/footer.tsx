
import {FaDribbble,FaFacebook,FaGithub,FaInstagram,FaTwitter} from 'react-icons/fa'
import logo from '../../../images/objectif.png'
const Footer = () => {
  return (
    <div className='w-full max-w-[1420px] grid lg:grid-cols-3 sm:px-4 px-[15px]   bg-[#00000033]  my-8  text-gray-200'>
        <div className='mx-auto '>
            <img className={'w-[50px] h-[50px]'} src={logo} />
            <p className='my-4'>Don't wait for the perfect moment — start now. The more you delay, the heavier the tasks will feel. You’ve got what it takes to handle this, step by step. Just begin — action creates momentum, and momentum brings success!</p>
        </div>
        <div className='flex justify-between lg:mt-[200px] lg:ml-[-330px]  md:w-[75%] my-6 md:mx-auto mx-0'>
            <FaFacebook  size={30}/>
            <FaInstagram size={30}/>
            <FaTwitter size={30}/>
            <FaGithub size={30}/>
            <FaDribbble size={30}/>
        </div>
        <div className='lg:col-span-1  flex justify-between my-4'>
            <div>
                <h6 className='font-medium text-gray-400'>Solution</h6>
                <ul>

                    <li className='py-2 text-sm'>Shine</li>
                    <li className='py-2 text-sm'>Dream</li>
                    <li className='py-2 text-sm'>Discipline</li>
                    <li className='py-2 text-sm'>locked in</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Solution</h6>
                <ul>

                    <li className='py-2 text-sm'>Shine</li>
                    <li className='py-2 text-sm'>Dream</li>
                    <li className='py-2 text-sm'>Discipline</li>
                    <li className='py-2 text-sm'>locked in</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Solution</h6>
                <ul>

                    <li className='py-2 text-sm'>Shine</li>
                    <li className='py-2 text-sm'>Dream</li>
                    <li className='py-2 text-sm'>Discipline</li>
                    <li className='py-2 text-sm'>locked in</li>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Footer
