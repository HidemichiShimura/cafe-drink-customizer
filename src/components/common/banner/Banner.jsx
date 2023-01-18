import { BannerContent } from '../../index'

import styles from '../../../styles/common/banner/banner.module.scss'

const Banner = ({ type = '' }) => (
  <div className={styles['banner']}>
    <BannerContent type={type} />
  </div>
)

export default Banner
