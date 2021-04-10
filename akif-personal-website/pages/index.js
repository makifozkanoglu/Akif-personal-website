import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <div className="flex justify-center">
    <NextSeo
      title="Mehmet Akif Özkanoğlu"
      description="Personal Website"
    />

      <div className="mt-4 mb-4 md:mr-40 sm:mr-2 p-4 md:w-4/6 sm:w-5/6 rounded text-left text-base md:text-2xl sm:text-6xl">
        <p className="mt-8 text-4xl">Hi.</p>
        <p className="mt-4 text-gray-800 sm:text-xl">My name is Mehmet Akif Özkanoğlu. I am a full time researcher pursuing a master of science on Computer Vision. My research interests are Object Detection, Tracking, SLAM for autononomous systems and UAVs.</p>
        <p className="mt-8 text-gray-800">
          Feel free to contact me via: <a className="text-blue-400" href="mailto:makifozkanoglu@gmail.com">makifozkanoglu@gmail.com</a>
        </p>
        <p className="mt-12 text-red-900 text-3xl">
          Education
        </p>
        <p className="mt-6 text-blue-800">
          Bilkent University
        </p>
        <p className="mt-2 text-gray-800 md:text-xl">
          MSc, Computer Engineering - 2022 (Expected)
        </p>
        <p className="mt-6 text-blue-800">
          Istanbul Technical University
        </p>
        <p className="mt-2 text-gray-800 md:text-xl">
          BSc, Electronic & Communication Engineering - 2020 
        </p>
        <p className="mt-12 text-red-900 text-3xl">
          Resources
        </p>
        <p className="mt-6">
          <a className="text-blue-400" href="https://www.linkedin.com/in/makifozkanoglu/">LinkedIn</a>
          <a className="ml-4 text-grey-900" href="https://github.com/makifozkanoglu">GitHub</a>
        </p>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // ...
  await generateRssFeed();
  await generateSitemap();
  return {
    props: { posts, ogImage, baseUrl },
  };
}