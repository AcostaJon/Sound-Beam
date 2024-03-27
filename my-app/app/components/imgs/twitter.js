'use client'
import Image from 'next/image'
import twitterImage from '@/public/twitter.svg'

export default function Twitter() {
    return (
        <>
            <Image
                src={twitterImage}
                alt="Picture of twitter"
                width={18}
                height={18}
            />
         
        </>

    )
}