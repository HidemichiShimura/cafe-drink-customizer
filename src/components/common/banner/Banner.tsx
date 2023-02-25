import { useRouter } from 'next/router'

// @ts-expect-error TS(2307): Cannot find module 'styles/common/banner/banner.mo... Remove this comment to see the full error message
import styles from 'styles/common/banner/banner.module.scss'

const Banner = ({
  content
}: any) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <div className={styles['banner']}>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className={styles['banner-content']}>{content}</div>
  </div>
)

const BannerContainer = () => {
  const Router = useRouter()
  const Path = Router.pathname
  const Content =
    Path === '/about' ? (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <h1 className={styles['banner-title1']}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <span>CAFE DRINK</span> CUSTOMIZER
        </h1>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <p className={styles['banner-explanation']}>
          Are you unsure about what to order or how to customize your drink?
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <br className={styles['banner-explanation-indention']} />
          Here’s what you need!
        </p>
      </>
    ) : (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <h1 className={styles['banner-title2']}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span>Discover Your</span> Favorites
      </h1>
    )

  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <Banner content={Content} />
}

export default BannerContainer
