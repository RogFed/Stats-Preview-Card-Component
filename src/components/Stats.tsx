import React from 'react'

import '../styles/Stats.scss'

interface Stat {
  data: string
  tag: string
}

const Stats = ({ data, tag }: Stat) => (
  <div className='Stat'>
    <div>{data}</div>
    <div>{tag}</div>
  </div>
)

export default Stats
