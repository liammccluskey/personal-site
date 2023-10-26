import React, {useEffect} from 'react'
import {ThemeProvider as StyledThemeProvider} from 'styled-components'
import {connect} from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import styled from 'styled-components'

import {
    getTheme,
    getIsMobile,
    getIsSemiMobile,
    setIsMobile,
    setIsSemiMobile,
    calculateIsMobile,
    calculateIsSemiMobile,
    setThemeColor,
    setTintColor
} from '../../redux/theme'

export const ThemeProviderComponent = props => {
    const {
        children
    } = props

    useEffect(() => {
        const handleResize = e => {
            const width = e.target.innerWidth
            props.setIsMobile(calculateIsMobile(width))
            props.setIsSemiMobile(calculateIsSemiMobile(width))
        }
        handleResize({target: {innerWidth: window.innerWidth}})

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        props.setThemeColor(0)
        props.setTintColor(0)
    }, [])

    return (
        <div>
            <StyledThemeProvider theme={props.theme}>
                {children}
            </StyledThemeProvider>
        </div>
    )
}

const mapStateToProps = state => ({
    theme: getTheme(state),
    isMobile: getIsMobile(state),
    isSemiMobile: getIsSemiMobile(state),
})

const mapDispatchToProps = dispatch => bindActionCreators({
    setIsMobile,
    setIsSemiMobile,
    setThemeColor,
    setTintColor
}, dispatch)

export const ThemeProvider = connect(mapStateToProps, mapDispatchToProps)(ThemeProviderComponent)

