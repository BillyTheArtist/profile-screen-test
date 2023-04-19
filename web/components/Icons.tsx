import React from 'react'
import styles from '../styles/Icons.module.css'


export default function Icons({ icon }:any) {
    return <button className={styles.iconBadge}>{icon}</button>

  }