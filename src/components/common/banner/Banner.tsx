import { useRouter, NextRouter } from 'next/router'
import { FC } from 'react'

import styles from 'styles/common/banner/banner.module.scss'

interface BannerProps {
  content: JSX.Element
}

const Banner: FC<BannerProps> = ({ content }) => (
  <div className={styles['banner']}>
    <div className={styles['banner-content']}>{content}</div>
  </div>
)

const BannerContainer: FC = () => {
  const Router: NextRouter = useRouter()
  const Path: string = Router.pathname
  const Content: JSX.Element =
    Path === '/about' ? (
      <>
        <h1 className={styles['banner-title1']}>
          <span>CAFE DRINK</span> CUSTOMIZER
        </h1>
        <p className={styles['banner-explanation']}>
          Are you unsure about what to order or how to customize your drink?
          <br className={styles['banner-explanation-indention']} />
          Here’s what you need!
        </p>
      </>
    ) : (
      <h1 className={styles['banner-title2']}>
        <span>Discover Your</span> Favorites
      </h1>
    )

  return <Banner content={Content} />
}

export default BannerContainer
