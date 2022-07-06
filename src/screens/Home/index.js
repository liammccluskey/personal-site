import React from 'react'
import {colors, fontSizes, fontWeights} from '../../styles'
import {List} from '../../components/List'

const getStyles = () => {
    return {
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            justifyContent: 'flex-start',
            height: '100vh',
            width: '100vw',
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
            padding: 20,
            position: 'sticky', top: 0,
            backgroundColor: colors.bgcl
        },
        headerTitle: {
            fontSize: fontSizes.xl,
            fontWeight: fontWeights.l,
            color: colors.tp
        },
        body: {
            padding: 30,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            justifyContent: 'flex-start',
            width: '100%',
            maxWidth: 800,
            alignSelf: 'center',
            boxSizing: 'border-box'
        }
    }
}

const Home = () => {

    // Variables

    const styles = getStyles()

    const projectsList = {
        title: 'Projects',
        rows: [
            {
                title: 'Ergsync',
                link: 'https://ergsync.com',
                iconSrc: require('../../assets/logo-ergsync.png'),
                imageSrc: '',
                body: 'Web application that allows rowing athletes to connect their Concept2 device and join live group workout sessions, easily track their progress over time, and join a community of other rowers'
            },
            {
                title: 'Puzzled - Chess Trainer',
                link: 'https://apps.apple.com/us/app/puzzled-chess-trainer/id1493090358',
                iconSrc: require('../../assets/logo-puzzledchesstrainer.jpg'),
                imageSrc: '',
                body: 'Published iOS application that allows users to practice chess puzzles, track their progress, and compete against other players. All user data is stored locally, and in the cloud with Firebase.',
            },
            {
                title: 'Reduced React',
                link: 'https://reducedreact.com',
                iconSrc: require('../../assets/logo-react.png'),
                imageSrc: '',
                body: 'Web application that allows developers to build and simulate React Native applications from simplified JSX code.'
            },
        ]
    }

    return (
        <div style={styles.root}>
            <div style={styles.header}>
                <h1 style={styles.headerTitle}>
                    Liam Mccluskey
                </h1>
            </div>
            <div style={styles.body}>
                <List {...projectsList} />
                <br /><br />
                <List {...projectsList} />
            </div>
        </div>
    )
}

export {Home}