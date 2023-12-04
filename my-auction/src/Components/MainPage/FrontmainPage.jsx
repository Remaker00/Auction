import React from 'react'
import Navbarmain from './Navbarmain'
import Last from './Last'

export default function FrontmainPage() {
  return (
    <div>
      <div className='navbar'>
        <Navbarmain />
      </div>
      <div className='first-section'>
        <div className='airplane-model'>
          <img src={process.env.PUBLIC_URL + '/cartoon.gif'}
            alt="Your 3D Model" width={700} height={700} />
          <div className='upper-model'>
            <p>Your Reliable Partner In Aircraft<div>Engineering | Research | Parts Trading</div></p>
          </div>
        </div>
        <div className='right-model'>
          <p><span>ABOUT</span><div>We are an internationally recognised business in the aerospace industry, operating under the FAA and EASA Part 21 & 145 Framework.</div></p>
          <p><span>OUR PRESENCE</span><div>As a global company Ziegler Aerospace has business operations located in United Kingdom, the Americas, and India.</div></p>
          <p><span>OUR HISTORY</span><div>With a 5-year track record of Engineering, innovation, and industry milestones, ZA is a leader in Designing, Certification and delivering aerospace products, services and solutions to a customer base that All over the World.</div></p>
          <p><span>SERVICES</span><div>Ziegler Aerospace extends its expertise through a comprehensive range of services, offering top-notch solutions in aircraft design, certification, and product delivery. With a rich history of 5 years marked by engineering excellence, innovation, and industry milestones, ZA continues to lead in providing cutting-edge aerospace products and services globally.</div></p>
        </div>
      </div>
      <div className='effect-section'>
        <div>
          <p><span>We Are Zygler Arospace</span>
            <div>Zygler Arospace is an ingenious Aerospace company offering a unique range of engineering services for airlines, MROs, and regulatory organisations. Our innovative solutions are tailored to meet the specific needs of our clients in the aerospace industry.</div>
            <div>At ZA Strength, we pride ourselves on our team of experts who possess extensive knowledge and experience in the aviation industry. Our team is fully equipped to provide a comprehensive range of services, including design and planning, production and installation, maintenance, repair, and certification of both minor and major (STC) aircraft modifications. Our expertise spans across a variety of areas, including interiors, avionics, and structures.</div>
          </p>
        </div>
      </div>
      <div className='last-section'>
        <Last />
      </div>
    </div>
  )
}
