import React from 'react'

const Projects = () => {
  return (
    <div className='w-full'>
        <div className='w-[97%] border-b-[2px] border-gray-200 ml-[1.4vw] mt-2'></div>
        <div className='ml-5 mr-5'>
        <div className='cards w-full flex gap-3 mt-5 cursor-pointer'>
            <div className='card w-[50%] min-h-[80vh] overflow-hidden'>
                <div className='img'>
                    <img className='w-full object-cover' src="https://uploads-ssl.webflow.com/60bc6201dbeabdb82b4c3a8c/60bd8754d60913150e327aba_cschool%20cover.png" alt="" />
                </div>
                <div className='masker flex items-center justify-between text-[14px] font-[Font2] leading-[17px] mt-[10px]'>
                   <a href="">IBM C.School <br /> <span className='text-gray-400'> Product Design </span> </a>
                   <p className='text-gray-400 cursor-pointer'>A learning platform for IBM's communication <br /> and corporate citizenship teams.</p>
                   <h2>2019</h2>
                </div>
            </div>
            <div className='card w-[50%] min-h-[80vh] overflow-hidden'>
            <div className='img'>
                    <img className='w-full object-cover' src="https://uploads-ssl.webflow.com/60bc6201dbeabdb82b4c3a8c/60bd8755c370d5dcf74c6ddc_csrcover.png" alt="" />
                </div>
                <div className='masker flex items-center justify-between text-[14px] font-[Font2] leading-[17px] mt-[10px]'>
                   <a href="">IBM CSR <br /> <span className='text-gray-400'> Design System </span> </a>
                   <p className='text-gray-400 cursor-pointer'>Designing for a diverse range of Corporate <br /> Social Responsibility initiatives.</p>
                   <h2>2020</h2>
                </div>
            </div>
        </div>
          <div className='bcard w-full items-center justify-center mt-[5vw]'>
            <div className='big w-[100%] min-h-[80vh] flex cursor-pointer '>
                <div className='bimg'>
                    <img className='w-full object-cover' src="https://uploads-ssl.webflow.com/60bc6201dbeabdb82b4c3a8c/62299ccecab9f3f6ceab002c_obt-p-2000.png" alt="" />
                </div>
            </div>
            <div className='bmasker flex items-center justify-between text-[14px] font-[Font2] leading-[17px] mt-[10px]'>
                <a href="">On Borrowed Time <br /> <span className='text-gray-400'> Digital Anthology </span> </a>
                   <p className='text-gray-400 cursor-pointer'>Designing for a diverse range of Corporate <br /> Social Responsibility initiatives.</p>
                   <h2>2022</h2>
                </div>
          </div>
          <div className='cards w-full flex gap-3 mt-10 cursor-pointer'>
            <div className='card w-[50%] min-h-[80vh] overflow-hidden'>
                <div className='img'>
                    <img className='w-full object-cover' src="https://uploads-ssl.webflow.com/60bc6201dbeabdb82b4c3a8c/6239425b2dc7b710ce8d4f61_PYR%20COVER-p-2000.png" alt="" />
                </div>
                <div className='masker flex items-center justify-between text-[14px] font-[Font2] leading-[17px] mt-[10px]'>
                   <a href="">Fictive Kin Collection <br /> <span className='text-gray-400'> Brand / Digital Desgin </span> </a>
                   <p className='text-gray-400 cursor-pointer'>A learning platform for IBM's communication <br /> and corporate citizenship teams.</p>
                   <h2>2021</h2>
                </div>
            </div>
            <div className='card w-[50%] min-h-[80vh] overflow-hidden'>
            <div className='img'>
                    <img className='w-full object-cover' src="https://uploads-ssl.webflow.com/60bc6201dbeabdb82b4c3a8c/60bd7fa287bb6eb9f4df24ac_italia%20cover%202.png" alt="" />
                </div>
                <div className='masker flex items-center justify-between text-[14px] font-[Font2] leading-[17px] mt-[10px]'>
                   <a href="">italiaDesign—11th Edition <br /> <span className='text-gray-400'> Film Series </span> </a>
                   <p className='text-gray-400 cursor-pointer'>Designing for a diverse range of Corporate <br /> Social Responsibility initiatives.</p>
                   <h2>2018</h2>
                </div>
            </div>
        </div>
        <div className='bcard w-full items-center justify-center mt-[5vw]'>
            <div className='big w-[100%] min-h-[80vh] flex cursor-pointer '>
                <div className='bimg'>
                    <img className='w-full object-cover' src="https://uploads-ssl.webflow.com/60bc6201dbeabdb82b4c3a8c/64ff89d438cfdbc0480684c5_instrumentx-p-2000.jpg" alt="" />
                </div>
            </div>
            <div className='bmasker flex items-center justify-between text-[14px] font-[Font2] leading-[17px] mt-[10px]'>
                <a href="">Instrument <br /> <span className='text-gray-400'> Design collection </span> </a>
                   <p className='text-gray-400 cursor-pointer'>Designing for a diverse range of Corporate <br /> Social Responsibility initiatives.</p>
                   <h2>2021—2023</h2>
                </div>
          </div>
          
        </div>
        <div className='w-[97%] border-b-[1px] border-gray-200 ml-[1.4vw] mt-10'></div>
        <div className='links mt-3 text-gray-400'>
            <div className='social flex justify-between items-center pl-5 pr-5'>
                <h3 className='text-black'>Contact <br /> <span className='text-gray-400'>rishabhy7754@gmail.com</span></h3>
                <div className='media grid ml-[10vw] '>
                <a className='hover:text-black' href="">LINKEDIN</a>
                <a className='hover:text-black'href="">INSTAGRAM</a>
                </div>
                <div className='media2 grid'>
                <a className='hover:text-black' href="">SAVEE.IT</a>
                <a className='hover:text-black' href="">READ.CV</a>
                </div>
                <h3>©2023</h3>
            </div>
        </div>
    </div>
  )
}

export default Projects