import PropTypes from 'prop-types'
import React from 'react'
import { CustomizeLower } from './CustomizeLower'
import { CustomizeUpper } from './CustomizeUpper'

// CustomizeMain. This component is place in componentsfolder because this will be reused in LP page.
const CustomizeMain = ({ iconName, title, description, optionNames }) => (
  <div>
    <CustomizeUpper
      iconName={iconName}
      title={title}
      optionNames={optionNames}
    />
    <CustomizeLower description={description} />
  </div>
)

// Prop types for CustomizeMain
CustomizeMain.prototype = {
  iconName: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  optionNames: PropTypes.arrayOf(PropTypes.string),
}

export { CustomizeMain }
