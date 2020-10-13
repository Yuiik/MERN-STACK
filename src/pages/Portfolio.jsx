import React, { useEffect } from 'react'
import Section from '../components/Section'
import Card from '../components/Card'
import { useContext } from 'react'
import { DataContext } from '../store/context'
import { useState } from 'react'

export default function Portfolio() {
  let {portfolioItems} = useContext(DataContext)
  const [count, setCount] = useState(4)
  const [items, setItems] = useState([])

  useEffect(()=> {
    setItems(portfolioItems.slice(0, count))
  }, [count, portfolioItems])

  return (
    <Section id='portfolio' title='portfolio'>
      <div className='cards'>
        {items && items.map((card, index) => (
          <Card card={card} key={index} />
        ))}
      </div>
      <div className='d-flex justify-content-center'>
      {count < portfolioItems.length && <div className="btn btn-primary mt-5 btn-lg" onClick={()=> setCount(count + 4)}>See more</div> }
      </div>
    </Section>
  )
}
