import React, { useState, useEffect } from 'react'
import styles from '../styles/Dropdown.module.css'

function Dropdown (props: any) {
  const [showDropdown, setShowDropdown] = useState(false)

  const handleClick = () => {
    setShowDropdown(!showDropdown)
  }

  useEffect(() => {
    const handleOutsideClick = (e: any) => {
      if (e.target.closest('.dropdown') === null) {
        setShowDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdown}>
        <button className={styles.dropdownButton} onClick={handleClick}>
          {props.buttonText}
        </button>
        {showDropdown && (
          <div className={styles.dropdownContent}>{props.children}</div>
        )}
      </div>
    </div>
  )
}

export default Dropdown
