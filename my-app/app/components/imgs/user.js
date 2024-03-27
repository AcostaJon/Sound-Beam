'use client'
import Image from 'next/image'
import UserImage from '@/public/user.svg'

export default function User() {
    return (
        <div className='d-flex align-items-center'>
            <Image
                src={UserImage}
                alt="Picture of the user"
                width={18}
                height={18}
            />
        </div>
    )
}