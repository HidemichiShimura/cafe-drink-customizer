import React from 'react'

const PageLayout = ({ children }) => {
  return (
    <>
      {/* Header */}
      {/* Banner */}
      <div
        style={{
          maxWidth: '90%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto',
          height: '100vh',
        }}
      >
        {children}
      </div>
      {/* Footer */}
    </>
  )
}

export default PageLayout
