import React from 'react'
import bannerImg from "../../assets/Images/Banner.png"

const Banner = () => {
    return (
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 w-full mt-12 md:mt-30 flex flex-col justify-center md:flex-row md:items-center md:justify-between'>

            <div className='w-full md:w-1/2 order-2 md:order-1'>

                <h1 className='font-bold text-[30px]'>Hello Welcome here to learn somthing <span className='text-[#dd5a90]'>new everyday!!!</span> </h1>

                <p className='mt-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quo quasi hic, cumque id corrupti quos unde ad est, accusamus voluptate mollitia vitae ratione.
                </p>


                <div className='flex flex-col gap-4 mt-4'>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="text" className="grow" placeholder="Email" />
                    </label>

                    <button className="btn btn-secondary w-[100px]">Secondary</button>
                </div>

            </div>

            <div className='w-full md:w-1/2 order-1 md:order-2'>

                <img src={bannerImg} alt="bannerImg" className='ml-auto' />

            </div>

        </div>
    )
}

export default Banner
