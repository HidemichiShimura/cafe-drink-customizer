import React from 'react'
// @ts-expect-error TS(2307): Cannot find module 'styles/pages/customize.module.... Remove this comment to see the full error message
import style from 'styles/pages/customize.module.scss'

const CustomizeLower = ({
  description
}: any) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <section className={style.customizeLowerSec}>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <h3>Comment</h3>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <article>{description}</article>
  </section>
)

export { CustomizeLower }
