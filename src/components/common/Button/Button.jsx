import Link from 'next/link'
import styles from '@/styles/common/Button/Button.module.scss'

const Button = ({ buttonContent, link }) => {
  return (
    <div className={styles['button-container']}>
      <Link
        className={styles['button-link']}
        href={link}
      >
        {buttonContent}
      </Link>
    </div>
  )
}

export default Button
