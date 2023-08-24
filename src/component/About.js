import React from 'react'
import AboutBackground from '../assets/about-background.png'
import AboutBannerImage from '../assets/about-background-image.png'
import { BsFillPlayCircleFill } from 'react-icons/bs'

export default function About() {
  return (
    <div className='about-section-container'>
        <div className="about-background-image-container">
            <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
            <img src={AboutBannerImage} alt="" />
        </div>
        <div className="about-section-text-container">
            <p className='primary-subheading'>About</p>
            <h1 className="primary-heading">
                About Food Is important Part Of A Balance Diet
            </h1>
            <p className='primary-text'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quam nostrum. Eos fugiat vero, veniam incidunt quos maiores totam molestias.
            </p>
            <p className='primary-text'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum officiis velit voluptas dicta accusamus quis! Consequatur sit doloribus accusamus nisi.
            </p>
            <div className="about-buttons-container">
                <button className='secondary-button'>Learn More</button>
                <button className='watch-video-button'>
                    <BsFillPlayCircleFill/>Watch Video</button>
            </div>
        </div>
      
    </div>
  )
}
