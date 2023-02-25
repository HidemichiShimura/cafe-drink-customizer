import React from 'react'
// @ts-expect-error TS(6142): Module './CustomizeOptionItem' was resolved to '/U... Remove this comment to see the full error message
import { CustomizeOptionItem } from './CustomizeOptionItem'
// @ts-expect-error TS(2307): Cannot find module 'components' or its correspondi... Remove this comment to see the full error message
import { CupIcon } from 'components'
// @ts-expect-error TS(2307): Cannot find module 'styles/pages/customize.module.... Remove this comment to see the full error message
import style from 'styles/pages/customize.module.scss'

const CustomizeUpper = ({
  iconName,
  title,
  optionNames
}: any) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <section className={style.customizeUpperSec}>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className={style.customizeImgContainer}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <CupIcon
        food={iconName}
        width={200}
        height={200}
      />
    </div>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className={style.customizeDescContainer}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <h3>{title}</h3>
      {optionNames &&
        optionNames.map((on: any, idx: any) => (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <CustomizeOptionItem
            key={idx + on}
            optionName={on}
          />
        ))}
    </div>
  </section>
)

export { CustomizeUpper }
