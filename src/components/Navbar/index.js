import React from 'react'
import {colors, fontSizes, fontWeights} from '../../styles'
import {List} from '../../components/List'

const getStyles = () => {
    return {
        header: {
            display: 'flex',
            flexDirection: 'row',
            aliginItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid black',
            backgroundColor: 'white',
            padding: 20,
            position: 'sticky', top: 0,
            backgroundColor: colors.bgcl
        },
        headerTitle: {
            fontSize: fontSizes.xl,
            fontWeight: fontWeights.l,
            color: colors.tp
        },
        link: {
            fontSize: fontSizes.l,
            fontWeight: fontWeights.l,
            color: colors.tt
        }
    }
}

const Navbar = () => {

    // Variables

    const styles = getStyles()

    return (
        <div style={styles.header}>
            <h1 style={styles.headerTitle}>
                Liam Mccluskey
            </h1>
            <h1 style={styles.link}>
                liammail100@gmail.com
            </h1>
        </div>
    )
}

export {Navbar}