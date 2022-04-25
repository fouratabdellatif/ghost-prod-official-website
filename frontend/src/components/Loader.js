import React from 'react'
import styled from 'styled-components'
import '../assets/css/Loader.css'
import loadingLogo from '../assets/images/logoLight.png'

const ScreenWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  background: ${props => props.bgColor || '#ffffff'};
  opacity: ${props => props.loading ? 1 : 0};
  visibility: ${props => props.loading ? 'visible' : 'hidden'};
  transition: opacity 0.4s, visibility -0.3s linear 0.5s;
`

const Loader = ({ loading, bgColor }) => {
    return (
        <ScreenWrapper
            bgColor={bgColor}
            loading={loading}
        >
            <div className='loading-logo-container'>
                <img className='loading-logo-image' src={loadingLogo} alt="loading" />
            </div>
            <div id="load">
                <div>.</div>
                <div>.</div>
                <div>.</div>
                <div>.</div>
                <div>.</div>
                <div>.</div>
                <div>.</div>
            </div>
        </ScreenWrapper>
    )
}

export default Loader