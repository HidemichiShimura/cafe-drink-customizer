import React from 'react'
import style from 'styles/pages/customize.module.scss'

const CustomizeOptionItem = ({ optionName }: { optionName: string }) => (
  <div className={style.customizeOptionName}>
    {'+'}
    {optionName}
  </div>
)

export { CustomizeOptionItem }
