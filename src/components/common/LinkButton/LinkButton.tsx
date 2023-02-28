import { FC } from 'react'
import Link from 'next/link'
import styles from 'styles/common/Button/Button.module.scss'

interface LinkButtonProps {
  buttonContent: string
  link: string
}

const LinkButton: FC<LinkButtonProps> = ({ buttonContent, link }) => (
  <div className={styles['button-container']}>
    <Link
      className={styles['button-link']}
      href={link}
    >
      {buttonContent}
    </Link>
  </div>
)

export default LinkButton
