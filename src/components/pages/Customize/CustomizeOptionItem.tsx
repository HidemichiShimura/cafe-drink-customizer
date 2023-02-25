import React from 'react'
// @ts-expect-error TS(2307): Cannot find module 'styles/pages/customize.module.... Remove this comment to see the full error message
import style from 'styles/pages/customize.module.scss'

const CustomizeOptionItem = ({
  optionName
}: any) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <div className={style.customizeOptionName}>
    {'+'}
    {optionName}
  </div>
)

export { CustomizeOptionItem }
