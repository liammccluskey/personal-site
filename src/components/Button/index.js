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
            maxHeight: 25,
            maxWidth: 25,
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

    const {title, image, icon, onClick} = props

    // Variables

    const styles = getStyles()

    const hasTitle = title != null
    const hasImage = image != null
    const hasIcon = icon != null

    return (
        <div style={styles.root} onClick={onClick}>
            {hasTitle ? 
                <p style={styles.title}>
                    {title}
                </p>
            : null}
            {hasImage ? 
                <img src={image} style={styles.image}/>
            : null}
            {true ? 
                <i className={icon} style={styles.icon} />
            : null}
        </div>
    )
}

export {Button}