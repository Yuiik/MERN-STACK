import React from 'react'
import { Button, Card } from 'react-bootstrap'

export default function PortfolioCard({
  card: { img, title, desc, demo, source },
}) {
  const thumbnail = {
    backgroundImage: `url(${img})`,
  }

  return (
    <Card data-aos='flip-left'>
      <div className='card-thumbnail' style={thumbnail} />
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
