import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HeroBanner=() => {
    return (
        <div className='hero-banner-container'>
            <div>
                <p className='beats-solo'>SMALL TEXT</p>
                <h3>mid text</h3>
                <Image

                    src="/../public/favicon.ico"
                    alt="Picture of the author"
                    width={5}
                    height={5}
                    className='hero-banner-image'

                />
                <div>
                    <Link href="/product/ID" passHref >
                        <button type='button' >
                            Button Text
                        </button>
                    </Link>
                    <div className='desc'>
                        <h5>description</h5>
                        <p>Description</p>

                    </div>
                </div>

            </div>
        </div>

    )
}

export default HeroBanner