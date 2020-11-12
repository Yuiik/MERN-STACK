import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { motion, AnimatePresence } from 'framer-motion'
import loadingGif from '../assets/aacismaharjan-loading-logo.svg'
import { useEffect } from 'react'

export default function PortfolioCard({
  card: { img, title, desc, demo, source },
}) {
  const thumbnail = {
    backgroundImage: `url(${img})`,
  }

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const onImageLoaded = () => {
      const tempImg = new Image()
      tempImg.src = img
      tempImg.onload = setTimeout(() => setIsLoading(false), 1000)
    }
    onImageLoaded()
  }, [img])

  return (
    <Card data-aos='flip-left'>
      <div className='card-thumbnail' style={thumbnail}>
        <AnimatePresence>
          {isLoading && (
            <motion.div
              className='overlay'
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              transition={{ duration: 0 }}
              exit={{ opacity: 0 }}
            >
              <img src={loadingGif} alt='Loading aacismaharjan...' />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Card.Body>
        <Card.Title className='title'>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <div className='btn-grp'>
          <Button href={demo} target='_blank'>
            Live Demo
          </Button>
          <Button href={source} target='_blank' variant='secondary'>
            Source Code
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}
