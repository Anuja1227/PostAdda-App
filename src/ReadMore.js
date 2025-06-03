import React, { useState } from 'react'

function ReadMore({text, maxChars = 30}) {

  const [isExpanded,setIsExpanded] = useState(false);

  const toggleButton = () => {
    setIsExpanded(!isExpanded);
  }

  const displayText = isExpanded ? text : text.slice(0,maxChars) + (text.length > maxChars ? "..." : "")

  return (
    <>
    {displayText}
    {text.length > maxChars && (
      <button 
      style = {{backgroundColor : "transparent", border: 'none', color :'purple', fontFamily : 'sans-serif'}} onClick={toggleButton}>
        {isExpanded ? "Show less" : "Show More"}
      </button>
    )}
    </>
  )
}

export default ReadMore;