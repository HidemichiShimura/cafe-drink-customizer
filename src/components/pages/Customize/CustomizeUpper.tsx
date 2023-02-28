import React, { FC } from 'react'
import { CustomizeOptionItem } from './CustomizeOptionItem'
import { CupIcon } from 'components'
import { CustomizeUpperProps } from './customize.type'
import style from 'styles/pages/customize.module.scss'

const CustomizeUpper: FC<CustomizeUpperProps> = ({
  iconName,
  title,
  optionNames,
}) => (
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
        optionNames.map((on, idx) => (
          <CustomizeOptionItem
            key={idx + on}
            optionName={on}
          />
        ))}
    </div>
  </section>
)

export { CustomizeUpper }
