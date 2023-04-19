import { Inter } from 'next/font/google'
import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import data from '../../api/users/4932.json'
import Skills from '@/components/Skills'
import Icons from '@/components/Icons'
import RecentActivity from '@/components/RecentActivity'
import Dropdown from '@/components/Dropdown'
import Image from 'next/image'
import {
  FaFacebookF,
  FaPinterestP,
  FaLinkedinIn,
  FaTwitter, FaRegClock, FaBriefcase, FaListUl, FaColumns, FaChevronUp
} from 'react-icons/fa'


const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <main className={inter.className}>
      <Head>
        <title>profile-screen-test</title>
      </Head>
      <div className={styles.sectionWrapper}>
        <section className={styles.pictureSection}>
          <div className={styles.pictureBox}>
            <img
              className={styles.profilePicture}
              src={data.picture}
              alt='profile picture'
            />
            <p className={styles.name}>{data.name}</p>
            <p className={styles.position}>{data.position}</p>
          </div>
        </section>
        <section className={styles.socialSection}>
          <div className={styles.iconContainer}>
            <Icons icon={<FaFacebookF className={styles.facebookIcon} />} />
            <Icons icon={<FaPinterestP className={styles.pinterestIcon} />} />
            <Icons icon={<FaTwitter className={styles.twitterIcon} />} />
            <Icons icon={<FaLinkedinIn className={styles.linkedinkIcon} />} />
          </div>
        </section>
        <section className={styles.aboutSection}>
          <div className={styles.skillContainer}>
            <h1 className={styles.aboutTag}>About</h1>
            <p className={styles.aboutBio}>{data.about}</p>
            {data.skills.map((item, index) => {
              return <Skills key={index} skill={item} />
            })}
          </div>
        </section>
        <section className={styles.learnSection}>
          <Dropdown buttonText='LEARN MORE'>
          <p className={styles.aboutBio}>In the relatively recent past, a considerable number of commercial enterprises exhibited a marked aversion to the employment of pictorial representations in their promotional materials. Nonetheless, at present, the utilization and sway of illustrations are experiencing an upward trend. It ought to be noted that an illustration, be it in the form of an image or a picture, which fails to convey a distinct and explicit concept, would be considered deficient and inadequate in its communicative capacity.</p>
          </Dropdown>
        </section>
        <section className={styles.activitiesSection}>
          <h1 className={styles.activityTag}>Recent activity</h1>
          <div className={styles.activityContainer}>
            <RecentActivity data={data} />
          </div>
        </section>
        <section className={styles.learnSection}>
          <Dropdown buttonText='ALL ACTIVITIES'>
          <div className={styles.activityContainer}>
            <RecentActivity data={data} />
          </div>
          </Dropdown>
        </section>
        <section className={styles.bottomSection}>
          <div className={styles.bottomIconContainer}>
          <FaRegClock className={styles.bottomIcon}/> <FaBriefcase className={styles.bottomIcon}/> <FaListUl className={styles.bottomIcon}/> <FaColumns className={styles.bottomIcon}/> <FaChevronUp className={styles.bottomIcon}/>
          </div>
        </section>
      </div>
    </main>
  )
}
