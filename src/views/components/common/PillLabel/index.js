import React from 'react'
import styled from 'styled-components'

export const PillLabel = props => {
    const {
        title,
        color, // 'yellow' || 'green' || 'orange' || 'red' || 'blue'
        size, // 's' | 'm'

        ...rest
    } = props

    return (
        <Root {...rest} className={`${color} ${size} ${props.className}`}>
            <h6>{title}</h6>
        </Root>
    )
}

const Root = styled.div`
    border: 1px solid;
    white-space: nowrap;
    background-color: ${p => p.theme.tintTranslucent};
    border-color: ${p => p.theme.tint};
    & h6 {
        color: ${p => p.theme.tint} !important;
    }

    &.yellow {
        background-color: ${p => p.theme.yellowTranslucent};
        border-color: ${p => p.theme.textYellow};
    }
    &.yellow h6 {
        color: ${p => p.theme.textYellow} !important;
    }
    &.orange {
        background-color: ${p => p.theme.orangeTranslucent};
        border-color: ${p => p.theme.orange};
    }
    &.orange h6 {
        color: ${p => p.theme.orange} !important;
    }
    &.green {
        background-color: ${p => p.theme.greenTranslucent};
        border-color: ${p => p.theme.green};
    }
    &.green h6 {
        color: ${p => p.theme.green} !important;
    }
    &.red {
        background-color: ${p => p.theme.brightRedTranslucent};
        border-color: ${p => p.theme.brightRed};
    }
    &.red h6 {
        color: ${p => p.theme.brightRed} !important;
    }
    &.blue {
        background-color: ${p => p.theme.blueTranslucent};
        border-color: ${p => p.theme.blue};
    }
    &.blue h6 {
        color: ${p => p.theme.blue} !important;
    }

    &.s {
        padding: 1px 5px;
        border-radius: 10px;
    }
    &.m {
        padding: 3px 7px;
        border-radius: 13px;
    }
`