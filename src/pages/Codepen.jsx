import React from 'react'
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
      ></iframe>
    </div>
  )
}

export default function Codepen() {
  const {codepenItems} = useContext(DataContext)
  return (
    <Section id='codepen' title='Codepen'>
      <div className='codepen-cards'>
        {codepenItems && codepenItems.map((item, index) => 
          <CodepenCard id={item}/>
        )}
      </div>
    </Section>
  )
}
