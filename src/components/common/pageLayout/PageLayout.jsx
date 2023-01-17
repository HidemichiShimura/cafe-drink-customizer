import React from 'react'

const PageLayout = ({ children }) => {
  return (
    <>
      {/* Header */}
      {/* Banner */}
      <div style={{ 'max-width': '90%' }}>{children}</div>
      {/* Footer */}
    </>
  )
}

export default PageLayout
