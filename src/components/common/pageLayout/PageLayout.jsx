import React from 'react'

const PageLayout = ({ children }) => {
  return (
    <>
      {/* Header */}
      {/* Banner */}
      <div
        style={{
          'max-width': '90%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {children}
      </div>
      {/* Footer */}
    </>
  )
}

export default PageLayout
