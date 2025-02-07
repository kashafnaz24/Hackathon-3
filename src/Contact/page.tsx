import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faClock} from '@fortawesome/free-solid-svg-icons';

export default function Contact(){
    return(
        <div className='w-[100%] bg-[#FFFFFF]'>
            <div className="w-[90%] mx-auto">
                <h1 className="text-[#000000] text-[36px] text-center  font-[Poppins] mb-2">Get In Touch With Us</h1>
                <p className="text-center text-[#9F9F9F]  w-[600px] mx-auto">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                <div className="flex my-10 justify-center">
                    <div className='text-[12px]'>

                    <div className='flex p-5'>
                    <FontAwesomeIcon icon={faLocationDot} className='w-[26px] h-[30px] mx-4'/>
                    <div>
                        <h3 className='text-[#000000] text-[24px]'>Address</h3>
                        <ul className='list-none'>
                            <li>236 5th SE Avenue,</li>
                            <li>New York NY10000,</li>
                            <li> United States</li>
                        </ul>
                        
                    </div>
                    </div>
                    <div className='flex  p-5'>
                    <FontAwesomeIcon icon={faPhone} className='w-[26px] h-[30px] mx-4'/>
                    <div>
                        <h3 className='text-[#000000] text-[24px]'>Phone</h3>
                        <p>Mobile: +(84) 546-6789</p>
                        <p>Hotline: +(84) 456-6789</p>
                    </div>
                    </div>
                    <div className='flex  p-5'>
                    <FontAwesomeIcon icon={faClock} className='w-[26px] h-[30px] mx-4'/>
                    <div>
                        <h3 className='text-[#000000] text-[24px]'>Working Time</h3>
                        <p>Monday-Friday: 9:00 - 22:00</p>
                        <p>Saturday-Sunday: 9:00 - 21:00</p>
                    </div>
                    </div>
                    </div>

                    {/* rightportion */}
                    <div className='pl-20'>
                    <form >
                        <label htmlFor="name" className='mb-5'>Your Name</label><br />
                        <input type="text" placeholder='ABC' className='h-[50px] w-[100%] pl-4 border-2 border-[#9F9F9F] rounded-[10px]' /> <br />
                        <br />
                        <label htmlFor="name" className='mb-5'>Your Email</label><br />
                        <input type="text" placeholder='Abc@def.com' className='h-[50px] w-[100%] pl-4 border-2 border-[#9F9F9F] rounded-[10px]' /> <br />
                        <br />
                        <label htmlFor="name" className='mb-5' >Subject</label><br />
                        <input type="text" placeholder='This is an optional' className='h-[50px] w-[100%] pl-4 border-2 border-[#9F9F9F] rounded-[10px]' /> <br />
                        <br />
                        <label htmlFor="name" className='mb-5'>Message</label><br />
                        <textarea placeholder='Hi! I did like to ask about' className='h-[100px] w-[100%] pl-4 border-2 border-[#9F9F9F] rounded-[10px]' />
                        <button className='bg-[#029FAE] text-[20px] text-[#FFFFFF] rounded-[10px] w-[200px] h-[55px] my-10 hover:shadow-[0px_0px_5px_#029FAE]'>Submit</button>

                    </form>
                    </div>


                </div>

            </div>
        </div>
    )
}