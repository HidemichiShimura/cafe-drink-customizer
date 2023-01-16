import Image from 'next/image'
import Logo from '../../../../public/icons/header-logo.png'
import styles from '../../../styles/common/Header/HeaderLogo.module.scss'

const HeaderLogo = () => {
  return (
    <div className={styles['logo-container']}>
      <a href='#'>
        <Image src={Logo} alt={'header-logo'} />
      </a>
    </div>
  )
}

export default HeaderLogo
