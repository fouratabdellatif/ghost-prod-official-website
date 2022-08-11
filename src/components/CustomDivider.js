/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'
import styled from 'styled-components'

const Divider = styled.h2`
  display: flex;
  overflow: hidden;
  align-items: center;
  background: #e1a33b;
  color: #000000;
  height: 3px;
  line-height: 10px;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '200px')};
  margin: ${({ right }) => (right ? '0 auto 40px 0' : '0 auto 40px auto')};
`

const CustomDivider = ({ right, fullWidth }) => {
    return (
        <Divider right={right} fullWidth={fullWidth} />
    )
}

export default CustomDivider