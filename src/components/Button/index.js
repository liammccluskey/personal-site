import React from 'react'
import {colors, fontSizes, fontWeights} from '../../styles'

const getStyles = () => {
    return {
        root: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: '5px 10px',
            borderRadius: 10,
            border: `2px solid ${colors.tc}`,
            cursor: 'pointer'
        },
        title: {
            fontSize: fontSizes.m,
            fontWeight: fontWeights.l,
            color: colors.tc,
        },
        image: {
            display: 'block',
            maxHeight: 30,
            maxWidth: 30,
            height: 'auto',
            width: 'auto',
            marginLeft: 10
        },
        icon: {
            fontSize: fontSizes.xl,
            fontWeight: fontWeights.l,
            color: colors.tc,
            marginLeft: 10
        }
    }
}

const Button = props => {

    const {title, imageSrc, iconName, onClick} = props

    // Variables

    const styles = getStyles()

    const hasTitle = title != null
    const hasImage = imageSrc != null
    const hasIcon = iconName != null

    return (
        <div style={styles.root} onClick={onClick}>
            {hasTitle ? 
                <p style={styles.title}>
                    {title}
                </p>
            : null}
            {hasImage ? 
                <img style={styles.title} style={styles.image}/>
            : null}
            {true ? 
                <i className={'bi bi-link'} style={styles.icon} />
            : null}
        </div>
    )
}

export {Button}