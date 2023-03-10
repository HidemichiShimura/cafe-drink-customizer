import { FC } from 'react'

import styles from 'styles/pages/about.module.scss'

const AboutAppDescription: FC = () => (
  <div className={styles['container']}>
    <div className={styles['text-container']}>
      <p className={styles['text']}>
        Have you faced these moments at a cafe, “I don’t know what to order...”
        or “I don’t know what options the drink has...”?
        <br />
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
