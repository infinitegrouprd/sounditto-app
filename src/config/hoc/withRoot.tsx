import React, { ComponentElement } from 'react'
import { Root } from 'native-base';

export default (WrappedComponent : ComponentElement) => {
  const hocComponent = ({ ...props }) => {
    return (
      <Root>
        <WrappedComponent {...props} />
      </Root>
    )

}
  return hocComponent
}
