import React from 'react'
import Story from '../../components/stories/Story'
import Post from '../../components/posts/Posts'
import './home.scss'

const Home = () => {
  return (
    <div className='homePage'>
      <Story/>
      <Post/>
    </div>
  )
}

export default Home