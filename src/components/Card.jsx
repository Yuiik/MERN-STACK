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
      tempImg.onload = setIsLoading(false)
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
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                type: 'spring',
                stiffness: 2000,
              }}
              exit={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.25 }}
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
