import React from 'react'
import Image from 'next/image'
import img2 from '@/assets/icons/show2.png'
import img5 from '@/assets/icons/show5.png'
import img8 from '@/assets/icons/show8.png'
import img11 from '@/assets/icons/show11.png'
import img12 from '@/assets/icons/show12.png'
import img13 from '@/assets/icons/show13.png'



const Showcase = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-9 md:mt-20'>
                {/* Map through your games or showcase items here */}
                <Image src={img2} alt="Game" />
                <Image src={img5} alt="Game" />
                <Image src={img8} alt="Game" />
                <Image src={img11} alt="Game" />
                <Image src={img12} alt="Game" />
                <Image src={img13} alt="Game" />
            </div>
        </div>
    )
}

export default Showcase
