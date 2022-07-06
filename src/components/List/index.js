import React, {useState} from 'react'
import {colors, fontSizes, fontWeights} from '../../styles'

const getStyles = () => {
    return {
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            justifyContent: 'flex-start',
            border: `1px solid ${colors.bc}`,
            borderRadius: 10
        },
        header: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: 20,
        },
        headerTitle: {
            fontSize: fontSizes.l,
            fontWeight: fontWeights.l,
            color: colors.ts
        },
        body: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'stretch',
            padding: '0px 20px'
        },
        row: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            padding: 20,
            borderTop: `1px solid ${colors.bc}`
        },
        rowHeader: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
        rowTitle: {
            fontSize: fontSizes.l,
            fontWeight: fontWeights.m,
            color: colors.tp
        },
        icon: {
            display: 'block',
            width: 'auto',
            height: 'auto',
            maxWidth: 50,
            maxHeight: 50,
            marginRight: 20
        },
        bodyImage: {
            display: 'block',
            width: 'auto',
            height: 'auto',
            maxWidth: 200,
            maxHeight: 200,
            alignSelf: 'center',
        },
        bodyText: {
            fontSize: fontSizes.m,
            fontWeight: fontWeights.m,
            color: colors.ts
        }
    }
}

const List = props => {

    const {title, rows} = props

    // State

    const [isVisible, setIsVisible] = useState(true)

    // Variables

    const styles = getStyles()

    // Functions

    const onClickHeader = () => {
        setIsVisible(curr => !curr)
    }

    return (
        <div style={styles.root}>
            <div style={styles.header} onClick={onClickHeader}>
                <h1 style={styles.headerTitle}>
                    {title}
                </h1>
            </div>
            {isVisible ? 
                <div style={styles.body}>
                    {rows.map( row => (
                        <div style={styles.row}>
                            <div style={styles.rowHeader}>
                                <img src={row.iconSrc} style={styles.icon}/>
                                <h1 style={styles.rowTitle}>
                                    {row.title}
                                </h1>
                            </div>
                            <img src={row.imageSrc} style={styles.bodyImage}/>
                            <p style={styles.bodyText}>
                                {row.body}
                            </p>
                        </div>
                    ))}
                </div>
                : null
            }
            
        </div>
    )
}

export {List}