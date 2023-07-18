import React from 'react'
import styled from 'styled-components'

export const TileIndicator = props => {
    const {
        title,
        numFilled,
        numTotal,

        ...rest
    } = props

    return (
        <Root {...rest}>
            <h4>{title}</h4>
            <div className='tiles-container'>
                {Array(numTotal).fill(0).map((_, i) => (
                    <div className={`tile ${i < numFilled && 'filled'}`}>
                    </div>
                ))}
            </div>
        </Root>
    )
}

const Root = styled.div`
    display: inline-flex;
    justify-content: space-between;
    align-items: center;

    & .tiles-container {
        display: inline-flex;
        justify-content: space_between;
        align-items: center;
    }

    & .tile {
        margin-left: 5px;
        height: 12px;
        width: 12px;
        background-color: ${p => p.theme.tintTranslucent};
    }
    & .tile.filled {
        background-color: ${p => p.theme.tint};
    }

    & h4 {
        color: ${p => p.theme.textSecondary};
    }
    
`