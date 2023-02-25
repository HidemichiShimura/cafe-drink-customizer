import Image from 'next/image'
import Link from 'next/link'
import Logo from 'public/icons/header-logo.png'
import styles from 'styles/common/Header/HeaderLogo.module.scss'

const HeaderLogo = () => (
  <div className={styles['logo-container']}>
    <Link
      className={styles['logo-link']}
      href='/'
    >
      <Image
        className={styles['header-logo']}
        src={Logo}
        alt={'header-logo'}
      />
    </Link>
  </div>
)

export default HeaderLogo
