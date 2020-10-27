import React, { useState } from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import Section from '../components/Section'

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

const Codepen = ({ codepens }) => {
  const [count, setCount] = useState(1)
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(codepens.slice(0, count))
  }, [count, codepens])

  return (
    <Section id='codepen' title='Codepen'>
      <div className='codepen-cards'>
        {items && items.map((item) => <CodepenCard id={item} key={item} />)}

        <div className='d-flex justify-content-center'>
          {count < codepens.length && (
            <div
              className='btn btn-primary mt-5 btn-lg'
              onClick={() => setCount(count + 1)}
            >
              See more
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}

const mapStateToProps = (store) => {
  const { codepens } = store.codepen
  return { codepens }
}

export default connect(mapStateToProps)(Codepen)
