import { AssistantOperatorProps } from '@/types/assistant'
import React from 'react'
import { CiMenuKebab } from 'react-icons/ci'

function AssistantOperator({className, handleClick, size}:AssistantOperatorProps) {
  return (
    <CiMenuKebab
      size={size}
      className={className}
      onClick={handleClick}
    />
  )
}

export default AssistantOperator