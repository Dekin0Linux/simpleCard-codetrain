import React, { Component } from 'react'
import Description from './Description'
import Image from './Image'
import Title from './Title'

export default class SimpleCard extends Component {
  render() {
    return (
      <div className='card'>
        <Image imgUrl='https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'/>
        <div>
            <Title title='Avengers: Age of Ultron'/>
            <Description description='Tony Stark builds an artificial intelligence system named 
            Ultron with the help of Bruce Banner. When the sentient Ultron makes plans to wipe out the human race, the Avengers set out to stop him.'/>
        </div>
      </div>
    )
  }
}
