import React from 'react'
import {colors} from '../../styles'

const getStyles = () => {
    return {
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            justifyContent: 'flex-start',
            height: '100vh',
            width: '100vh',
            overflow: 'scroll',
            backgroundColor: colors.bgc
        },
        header: {
            display: 'flex',
            flexDirection: 'row',
            aliginItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid black',
            backgroundColor: 'white',
            padding: 15,
            position: 'sticky'
        },
        body: {
            padding: 30,
            display: 'flex',
        }
    }
}

const Home = () => {

    // Variables

    const styles = getStyles()

    return (
        <div style={styles.root}>
            <div style={styles.header}>

            </div>
            <div style={styles.body}>
                
            </div>
        </div>
    )
}

export {Home}