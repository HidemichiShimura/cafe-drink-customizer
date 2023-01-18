import React from 'react'
import style from '@/styles/pages/customize.module.scss'

const CustomizeOptionItem = ({ optionName }) => (
  <div className={style.customizeOptionName}>
    {'+'}
    {optionName}
  </div>
)

export { CustomizeOptionItem }
