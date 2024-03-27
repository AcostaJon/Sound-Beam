'use client'
import Image from 'next/image'
import InstagramImage from '@/public/instagram.svg'

export default function Instagram() {
    return (
        <>
            <Image
                src={InstagramImage}
                alt="picture of instagram"
                width={18}
                height={18}
            />
        </>

    )
}