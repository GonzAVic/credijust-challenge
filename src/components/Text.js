import React from 'react'

const Text = ({children, as = "p"}) => {

  const textClassNames = {
    p: "",
    h1: "h1",
    h2: "h2",
    label: "label",
  }

  return (
    <div className={textClassNames[as]}>
      {children}
    </div>
  )
}

export default Text
