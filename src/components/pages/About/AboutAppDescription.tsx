// @ts-expect-error TS(2307): Cannot find module 'styles/pages/about.module.scss... Remove this comment to see the full error message
import styles from 'styles/pages/about.module.scss'

const AboutAppDescription = () => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <div className={styles['container']}>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className={styles['text-container']}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <p className={styles['text']}>
        Have you faced these moments at a cafe, “I don’t know what to order...”
        or “I don’t know what options the drink has...”?
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <br />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <br />
        Cafe Drink Customizer solves these problems! This app shows many types
        of drinks and available options to add. This app will allow you to pick
        your favorite beverage in various ways such as your mood, favorite
        taste, etc... In addition, you might be able to create the only one in
        the world with your unique drink customization.
      </p>
    </div>
  </div>
)

export default AboutAppDescription
