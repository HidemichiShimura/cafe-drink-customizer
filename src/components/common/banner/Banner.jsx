import styles from '../../../styles/common/banner/banner.module.scss'
import { BannerContent } from '../../index'


const Banner = ({ type = '' }) => (
  <div className={styles['banner']}>
    <BannerContent type={type} />
  </div>
)

export default Banner
