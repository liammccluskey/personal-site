import React, {useState} from 'react'
import {colors, fontSizes, fontWeights} from '../../styles'
import {Button} from '../Button'

const getStyles = () => {
    return {
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            justifyContent: 'flex-start',
            border: `1px solid ${colors.bc}`,
            borderRadius: 10,
            backgroundColor: colors.bgcl
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
            width: '100%',
            marginBottom: 20,
        },
        rowTitle: {
            fontSize: fontSizes.l,
            fontWeight: fontWeights.m,
            color: colors.tp,
            marginRight: 10
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

    const {title, rows, hasButton=true} = props

    // State

    const [isVisible, setIsVisible] = useState(true)

    // Variables

    const styles = getStyles()

    // Functions

    const onClickHeader = () => {
        setIsVisible(curr => !curr)
    }

    const onClickShowProject = row => {
        window.open(row.link)
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
                                <div style={{marginLeft: 'auto'}}>
                                    {hasButton ?
                                        <Button
                                            title={'Show Project'}
                                            iconName={'bi bi-link-45deg'}
                                            onClick={() => onClickShowProject(row)}
                                        />
                                    : null}

                                </div>
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