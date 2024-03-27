'use client'
import Image from 'next/image'
import bagImage from '@/public/shoppingbag.svg'

export default function Shoppingbag() {
    return (
        <>
            <Image
                src={bagImage}
                alt="picture of shopping bag"
                width={22}
                height={22}
            />
        </>

    )
}