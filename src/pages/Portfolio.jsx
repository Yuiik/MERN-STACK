import React from 'react'
import Section from '../components/Section'
import Card from '../components/Card'
import { useContext } from 'react'
import { DataContext } from '../store/context'

export default function Portfolio() {
  const {portfolioItems} = useContext(DataContext)
  return (
    <Section id='portfolio' title='portfolio'>
      <div className='cards'>
        {portfolioItems && portfolioItems.map((card, index) => (
          <Card card={card} key={index} />
        ))}
      </div>
    </Section>
  )
}
