import React, { useState } from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import Section from '../components/Section'
import loadingGif from '../assets/aacismaharjan-loading-logo.svg'
import { motion, AnimatePresence } from 'framer-motion'

const CodepenCard = ({ id }) => {
  const [isLoading, setIsLoading] = useState(true)
  const codepenURL = `https://codepen.io/aashish2058/embed/${id}?theme-id=light&default-tab=result`
  const loading = (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className='overlay'
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, type: 'spring', stiffness: 2000 }}
          exit={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <img src={loadingGif} alt='Loading aacismaharjan...' />
        </motion.div>
      )}
    </AnimatePresence>
  )

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
        onLoad={() => setIsLoading(false)}
      />
      {loading}
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
