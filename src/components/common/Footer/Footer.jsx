import styles from '@/styles/common/Footer/Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles['footer-container']}>
      <p className={styles['footer-content']}>
        &copy; 2023 Cafe Drink Customizer
      </p>
    </div>
  )
}

export default Footer
