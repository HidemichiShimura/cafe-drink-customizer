import PropTypes from 'prop-types'
import React, { FC } from 'react'
import { CustomizeLower } from './CustomizeLower'
import { CustomizeUpper } from './CustomizeUpper'

import styles from 'styles/pages/customize.module.scss'
import { CustomizeMainProps } from './customize.type'

// CustomizeMain. This component is place in componentsfolder because this will be reused in LP page.
const CustomizeMain: FC<CustomizeMainProps> = ({
  iconName,
  title,
  description,
  optionNames,
}) => (
  <div className={styles.customizeContainer}>
    <CustomizeUpper
      iconName={iconName}
      title={title}
      optionNames={optionNames}
    />

    <CustomizeLower description={description} />
  </div>
)

export { CustomizeMain }
