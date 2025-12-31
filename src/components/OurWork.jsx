import React from 'react'
import Title from './Title'
import assets from '../assets/assets'

const OurWork = () => {

    const workData = [
        {
            title:'Mobile app marketing',
            description:'We turn bold ideas into powerful digital solutions that connect, engage...',
            img: assets.work_mobile_app

        },
          {
            title:'Dashboard management',
            description:'we help you execute your plan and deliver results.',
            img: assets.work_dashboard_management

        },
          {
            title:'Fitness app promotion',
            description:'we help you create a markating strategy that drives results.',
            img: assets.work_fitness_app

        },
    ]

    return (
        <div id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
<Title title='Our latest Work' desc='From strategy to execution, we craft digital solutions that move  your business forward.'/>
<div className=''>

</div>


        </div>
    )
}

export default OurWork
