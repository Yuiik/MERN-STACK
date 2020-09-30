import React from 'react'
import Section from '../components/Section'

const CodepenCard = ({ id }) => {
  const codepenURL = `https://codepen.io/aashish2058/embed/${id}?theme-id=light&default-tab=result`
  return (
    <div className='codepen-card'>
      <iframe
        scrolling='no'
        src={codepenURL}
        frameborder='no'
        loading='lazy'
        allowtransparency='true'
        allowfullscreen='true'
      ></iframe>
    </div>
  )
}

export default function Codepen() {
  return (
    <Section id='codepen' title='Codepen'>
      <div className='codepen-cards'>
        <CodepenCard id='MWydyoe' />
        {/* <CodepenCard id='ZEQKoMo' /> */}
      </div>
    </Section>
  )
}
