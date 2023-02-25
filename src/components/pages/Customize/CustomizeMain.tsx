import PropTypes from 'prop-types'
import React from 'react'
// @ts-expect-error TS(6142): Module './CustomizeLower' was resolved to '/Users/... Remove this comment to see the full error message
import { CustomizeLower } from './CustomizeLower'
// @ts-expect-error TS(6142): Module './CustomizeUpper' was resolved to '/Users/... Remove this comment to see the full error message
import { CustomizeUpper } from './CustomizeUpper'

// @ts-expect-error TS(2307): Cannot find module 'styles/pages/customize.module.... Remove this comment to see the full error message
import styles from 'styles/pages/customize.module.scss'

// CustomizeMain. This component is place in componentsfolder because this will be reused in LP page.
const CustomizeMain = ({
  iconName,
  title,
  description,
  optionNames
}: any) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <div className={styles.customizeContainer}>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <CustomizeUpper
      iconName={iconName}
      title={title}
      optionNames={optionNames}
    />
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
