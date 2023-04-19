import React from 'react'
import styles from '../styles/RecentActivity.module.css'
import { FaCalendarAlt, FaBriefcase, FaRegCheckCircle, FaRegCreditCard } from 'react-icons/fa'

interface RecentActivityProps {
  data: {
    recentActivity: {
      icon: string
      date: string
      details: string
    }[]
  }
}

const RecentActivity: React.FC<RecentActivityProps> = ({ data }) => {
  return (
    <div>
      <ul>
        {data.recentActivity.map((activity, index) => {
          const RenderIcon = () => {
            switch (activity.icon) {
              case 'calendar':
                return <FaCalendarAlt className={styles.activityIcon}/>
                case 'briefcase' :
                  return <FaBriefcase className={styles.activityIcon}/>
                  case 'check-circle' :
                    return <FaRegCheckCircle className={styles.activityIcon}/>
                    case 'credit-card' :
                      return <FaRegCreditCard className={styles.activityIcon}/>
              default:
                return <div>no icon available</div>
            }
          }
          return (
            <div key={index}>
              <RenderIcon />
              <span className={styles.date}> {activity.date} </span>
              <span className={styles.details}>{activity.details}</span>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default RecentActivity
