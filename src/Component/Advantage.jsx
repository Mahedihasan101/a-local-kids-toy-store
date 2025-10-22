import React from 'react';
import moneyimg from '../assets/Screenshot 2025-10-22 073236.png'
import discountimg from '../assets/Screenshot 2025-10-22 073244.png'
import img3 from '../assets/Screenshot 2025-10-22 073249.png'
import img4 from '../assets/Screenshot 2025-10-22 073259.png'

const Advantage = () => {
    return (
        <div>
            <div className='grid grid-cols-4 gap-7'>
                
                <div className='flex items-center gap-4 bg-[#fff7ed] py-8 px-10 mt-10 rounded-2xl'>
                    <img src={ moneyimg} alt="" className='w-[40px] h-[36px] rounded-[50px]' />
                    <div>
                        <h1 className='font-semibold text-[20px]'>Money Return</h1>
                        <p className='text-[16px] text-[#69778a]'>Back guarantee under 7 days</p>
                    </div>
                </div>
                 <div className='flex items-center gap-4 bg-[#e6eef9]  py-8 px-10 mt-10 rounded-2xl'>
                    <img src={discountimg} alt="" className='w-[40px] h-[36px] rounded-[50px]' />
                    <div>
                        <h1 className='font-semibold text-[20px]'>Money Return</h1>
                        <p className='text-[16px] text-[#69778a]'>Back guarantee under 7 days</p>
                    </div>
                </div>
                 <div className='flex items-center gap-4 bg-[#dff8f6]  py-8 px-10 mt-10 rounded-2xl'>
                    <img src={img3} alt="" className='w-[40px] h-[36px] rounded-[50px]' />
                    <div>
                        <h1 className='font-semibold text-[20px]'>Money Return</h1>
                        <p className='text-[16px] text-[#69778a]'>Back guarantee under 7 days</p>
                    </div>
                </div>
                 <div className='flex items-center gap-4 bg-[#ffeef0]  py-8 px-10 mt-10 rounded-2xl'>
                    <img src={img4} alt="" className='w-[40px] h-[36px] rounded-[50px]' />
                    <div>
                        <h1 className='font-semibold text-[20px]'>Money Return</h1>
                        <p className='text-[16px] text-[#69778a]'>Back guarantee under 7 days</p>
                    </div>
                </div>
                
              
            </div>
        </div>
    );
};

export default Advantage;