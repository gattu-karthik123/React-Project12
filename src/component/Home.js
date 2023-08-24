import React from 'react'
import Navbar from './Navbar'
import BannerBackgroudImage from '../assets/home-banner-background.png'
import {FiArrowRight} from 'react-icons/fi'
import HomeBannerImage from '../assets/home-banner-image.png'
export default function Home() {
  return (
    <div className='home-container'>
        {/* <Navbar /> */}
        <div className="home-banner-container">
          <div className='home-bannerImage-container'>
            <img src={BannerBackgroudImage} alt="" />
          </div>
          <div className="home-text-section">
            <h1 className='primary-heading'>
              Your favourite Food Deliverd Hot&Fresh
            </h1>
            <p className='primary-text'>
              Healthy switcher chefs do all the prep work,like peeding,chopping
              & marinating,so you can cook a fresh food
            </p>
            <button className='secondary-button'>
              Order Now <FiArrowRight />
            </button>
          </div>
          <div className="home-image-section">
            <img src={HomeBannerImage} alt="" />
          </div>
        </div>
    </div>
  )
}
