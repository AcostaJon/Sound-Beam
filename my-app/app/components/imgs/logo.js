'use client'
import Image from 'next/image'
import logoImage from '@/public/logo.svg'

export default function Logo() {
    return (
        <div className='d-flex align-items-baseline ms-2 me-lg-4'>
            <Image 
            className='me-2'
                src={logoImage}
                alt="picture of logo"
               width={20}
               height={18}
            />
            <h1 className='mb-0 fs-3 text-white'>Soundbeam</h1>
        </div>
    )
}