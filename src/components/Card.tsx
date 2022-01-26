import React from 'react'

import Stats from './Stats'

import '../styles/Card.scss'

import mobileHeaderBg from '../images/image-header-mobile.jpg'
import desktopHeaderBg from '../images/image-header-desktop.jpg'

const stats = [
  {
    data: '10k+',
    tag: 'companies',
  },
  {
    data: '314',
    tag: 'templates',
  },
  {
    data: '12M+',
    tag: 'queries',
  },
]

const Card = () => (
  <section className='Card'>
    <div className='Card__header'>
      <img
        src={desktopHeaderBg}
        alt='Card header image'
        sizes='(min-width: 645px) 540px, 645px'
        srcSet={`${mobileHeaderBg} 654w, ${desktopHeaderBg} 540w`}
      />
      <span />
    </div>
    <div className='Card__body'>
      <h1>
        Get <span>insights</span> that help your business grow.
      </h1>
      <p>
        Discover the benefits of data analytics and make better decisions
        regarding revenue, customer experience, and overall efficiency.
      </p>
      <div className='Card__stats'>
        {stats.map(({ data, tag }, index) => (
          <Stats data={data} tag={tag} key={index} />
        ))}
      </div>
    </div>
  </section>
)

export default Card
