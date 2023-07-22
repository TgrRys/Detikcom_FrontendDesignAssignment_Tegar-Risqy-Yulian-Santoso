import React from 'react'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Mechanism } from '../components/Mechanism'
import { Slide } from '../components/Slider'
import { Blog } from '../components/Blog'

export const Home = () => {
  return (
    <>
    <Hero />
    <About />
    <Mechanism />
    <Slide />
    <Blog />
    </>
  )
}
