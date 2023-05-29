'use client';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { metadata } from '../layout';
import Image from '../../components/Image';

export default function Fotos() {
    const [images, setImages] = useState([]);
    const [numItens, setNumItens] = useState(9);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/photos');
                const imagesData = await res.json();
                setImages(imagesData);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    function seeMoreImages() {
        setNumItens(numItens + 6);
    }

    return (
        <>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
                {images.slice(0, numItens).map((image) => (
                    <Image key={image.id} url={image.url} title={image.title} />
                ))}
            </div>
            <div class="flex justify-center">
                <button onClick={seeMoreImages} type="button" class="w-60 h-14 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Ver mais</button>
            </div>
        </>
    );
};
   

