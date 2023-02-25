import React from 'react'
import { CustomizeOptionItem } from './CustomizeOptionItem'
import { CupIcon } from 'components'
import style from 'styles/pages/customize.module.scss'

const CustomizeUpper = ({ iconName, title, optionNames }: any) => (
  <section className={style.customizeUpperSec}>
    <div className={style.customizeImgContainer}>
      <CupIcon
        food={iconName}
        width={200}
        height={200}
      />
    </div>

    <div className={style.customizeDescContainer}>
      <h3>{title}</h3>
      {optionNames &&
        optionNames.map((on: any, idx: any) => (
          <CustomizeOptionItem
            key={idx + on}
            optionName={on}
          />
        ))}
    </div>
  </section>
)

export { CustomizeUpper }
