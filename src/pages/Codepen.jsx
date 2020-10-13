import React, { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import Section from '../components/Section'
import { DataContext } from '../store/context'

const CodepenCard = ({ id }) => {
  const codepenURL = `https://codepen.io/aashish2058/embed/${id}?theme-id=light&default-tab=result`
  return (
    <div className='codepen-card mb-5' data-aos='fade-up'>
      <iframe
        scrolling='no'
        src={codepenURL}
        frameBorder='no'
        loading='lazy'
        allowtransparency='true'
        allowFullScreen={true}
        title={id}
      ></iframe>
    </div>
  )
}

export default function Codepen() {
  const {codepenItems} = useContext(DataContext)
  const [count, setCount] = useState(1)
  const [items, setItems] = useState([])

  useEffect(()=> {
    setItems(codepenItems.slice(0, count))
  }, [count, codepenItems])

  return (
    <Section id='codepen' title='Codepen'>
      <div className='codepen-cards'>
        {items && items.map((item) => 
          <CodepenCard id={item} key={item}/>
        )}

        <div className='d-flex justify-content-center'>
      {count < codepenItems.length && <div className="btn btn-primary mt-5 btn-lg" onClick={()=> setCount(count + 1)}>See more</div> }
      </div>
      </div>
    </Section>
  )
}
