import styles from '../../../styles/common/banner/banner.module.scss'

const BannerContent = ({ type }) => {
  return type === 'lp' ? (
    <div className={styles['banner-content']}>
      <h1>
        <span>CAFE DRINK</span> CUSTOMIZER
      </h1>
      <p>
        Are you unsure about what to order or how to customize your drink?
        <br />
        Here’s what you need!
      </p>
    </div>
  ) : (
    <div className={styles['banner-content']}>
      <h1>
        <span>Discover Your</span> Favorites
      </h1>
    </div>
  )
}

export default BannerContent
