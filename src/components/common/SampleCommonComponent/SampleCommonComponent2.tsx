import React, { useState } from 'react'

const SampleCommonComponent = ({ sample, handleOnClick }: any) => (
  <div>
    <button>Button</button>
    SampleCommonComponent
  </div>
)

const SampleCommonComponentContainerAsNeeded = () => {
  const [sample, setSample] = useState('initialState')

  return (
    <SampleCommonComponent
      sample={sample}
      handleOnClick={() => setSample('clicked')}
    />
  )
}

export default SampleCommonComponentContainerAsNeeded
