'use client'
import Image from 'next/image'
import youtubeImage from '@/public/youtube.svg'

export default function Youtubeimage() {
    return (
        <>
            <Image
                src={youtubeImage}
                alt="Picture of youtube"
                width={18}
                height={18}
            />
        </>

    )
}