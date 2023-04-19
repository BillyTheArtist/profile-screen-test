import React from 'react'
import styles from '../styles/Skills.module.css'

export default function Skills ({ skill }: any) {
  return <div className={styles.skillBadge}>{skill}</div>
}
