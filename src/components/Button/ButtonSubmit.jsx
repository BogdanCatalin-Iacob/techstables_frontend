import React from 'react'
import Button from 'react-bootstrap/Button'
import styles from './ButtonSubmit.module.css'

const ButtonSubmit = () => {
  return (
    <Button className={`${styles.Button} ${styles.Wide} ${styles.Bright}`} type="submit">Submit</Button>
  )
}

export default ButtonSubmit