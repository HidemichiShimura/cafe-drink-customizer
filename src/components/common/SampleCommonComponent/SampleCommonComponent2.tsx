import React, { useState } from 'react'

const SampleCommonComponent = ({
  sample,
  handleOnClick
}: any) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <div>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <button>Button</button>
    SampleCommonComponent
  </div>
)

const SampleCommonComponentContainerAsNeeded = () => {
  const [sample, setSample] = useState('initialState')

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <SampleCommonComponent
      sample={sample}
      handleOnClick={() => setSample('clicked')}
    />
  )
}

export default SampleCommonComponentContainerAsNeeded
