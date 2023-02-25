import Image from 'next/image'
import Link from 'next/link'
import styles from 'styles/common/Header/HeaderLogo.module.scss'

const HeaderLogo = () => (
  <div className={styles['logo-container']}>
    <Link
      className={styles['logo-link']}
      href='/'
    >
      <Image
        className={styles['header-logo']}
        src={'/icons/header-logo.png'}
        alt={'header-logo'}
        width={100}
        height={100}
      />
    </Link>
  </div>
)

export default HeaderLogo
