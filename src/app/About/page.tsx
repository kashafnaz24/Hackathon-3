import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import Image from "next/image"

export default function About(){
    return(
        <div className="w-[100%] mt-4">
            <div className="flex gap-3 justify-center w-[90%] xl:w-[70%]  mx-auto ">
                <div className="bg-[#007580] h-300 w-[400px] py-10 px-6 text-[#FFFFFF]">
                    <h3 className="text-[32px] mb-5">About Us - Comforty</h3>
                    <p className="18px">At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality. </p>
                     <button className="bg-[#F9F9F926] px-5 py-4 text-[16px] m-4">View collection</button>
                </div>
                <Image 
                src="/chair1.png" 
                alt="aboutimg"
                width={400}
                height={300}
                />

            </div>
            <div className=" w-[90%] xl:w-[70%]  mx-auto my-[30px]">
                <h1 className="text-[32px] text-center">What makes our Brand Different</h1>
                <div className="flex gap-3 my-[30px]">
                    <div className="bg-[#F9F9F9] text-[#007580] py-6 px-5">
                        <h3 className="text-[20px]">Next day as standard</h3>
                        <p className="text-[13px]">Order before 3pm and get your order the next day as standard</p>
                    </div>
                    <div className="bg-[#F9F9F9] text-[#007580] py-6 px-5">
                        <h3 className="text-[20px]">Next day as standard</h3>
                        <p className="text-[13px]">Order before 3pm and get your order the next day as standard</p>
                    </div>
                    <div className="bg-[#F9F9F9] text-[#007580] py-6 px-5">
                        <h3 className="text-[20px]">Next day as standard</h3>
                        <p className="text-[13px]">Order before 3pm and get your order the next day as standard</p>
                    </div>
                    <div className="bg-[#F9F9F9] text-[#007580] py-6 px-5">
                        <h3 className="text-[20px]">Next day as standard</h3>
                        <p className="text-[13px]">Order before 3pm and get your order the next day as standard</p>
                    </div>
                </div>
            </div>
            <div className="w-[90%] xl:w-[70%]  mx-auto my-[30px]">
                <h2 className="text-[34px]">Our Popular Products </h2>
                <div className="w-[60%] my-7 grid grid-cols-1 mx-auto lg:flex gap-2 lg:w-[90%]">
    <div className="w-[450px] h-[377px]">
      <Image
        src="/sofa.jpg"
        alt="The Poplar suede sofa"
        width={450}
        height={312}
        className="rounded-[2px] "
        priority
      />
      
      <div className="flex justify-between items-center mt-4 px-2">
        <div>
          <h6 className="text-lg font-semibold hover:text-[#007580] cursor-pointer">
          The Poplar suede sofa
          </h6>
          <p className="text-gray-600 font-medium">$20000</p>
        </div>
        <button className="w-[50px] h-[50px] rounded-[5px] bg-[#F0F2F3] text-black hover:bg-[#029FAE] flex items-center justify-center">
        <FontAwesomeIcon icon={faCartShopping} className='w-[22px] h-[22px]'/> 
        </button>
      </div>
    </div>
    <div className='flex gap-2'>
    <div className="w-[250px] h-[377px] ">
      <Image
        src="/top3.webp"
        alt="Featured Products chairs"
        width={250}
        height={312}
        className="rounded-[6px] "
        priority
      />
     
      <div className="flex justify-between items-center mt-4 px-2">
        <div>
          <h6 className="text-lg font-semibold hover:text-[#007580] cursor-pointer">
            Library Stool Chair
          </h6>
          <p className="text-gray-600 font-medium">$200</p>
        </div>
        <button className="w-[50px] h-[50px] rounded-[5px] bg-[#F0F2F3] text-black hover:bg-[#029FAE] flex items-center justify-center">
        <FontAwesomeIcon icon={faCartShopping} className='w-[22px] h-[22px]'/> 
        </button>
      </div>
    </div>
    <div className="w-[250px] h-[377px] ">
      <Image
        src="/chair4.webp"
        alt="Featured Products chairs"
        width={250}
        height={312}
        className="rounded-[6px] "
        priority
      />
     
      <div className="flex justify-between items-center mt-4 px-2">
        <div>
          <h6 className="text-lg font-semibold hover:text-[#007580] cursor-pointer">
            Library Stool Chair
          </h6>
          <p className="text-gray-600 font-medium">$200</p>
        </div>
        <button className="w-[50px] h-[50px] rounded-[5px] bg-[#F0F2F3] text-black hover:bg-[#029FAE] flex items-center justify-center">
        <FontAwesomeIcon icon={faCartShopping} className='w-[22px] h-[22px]'/> 
        </button>
      </div>
    </div>
    </div>
                </div>
            </div>

        </div>
    )
}
















