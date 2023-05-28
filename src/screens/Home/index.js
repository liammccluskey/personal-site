import React from 'react'
import {colors, fontSizes, fontWeights} from '../../styles'
import {List} from '../../components/List'

const getStyles = () => {
    return {
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

    // Functions

    const downloadTranscript = () => {
        // todo
    }

    // Variables

    const styles = getStyles()

    const educationList = {
        title: 'Education',
        buttonTitle: 'Transcript',
        buttonIcon: 'bi bi-download',
        rows: [
            {
                title: 'Rutgers University - New Brunswick',
                onClick: downloadTranscript,
                imageSrc: require('../../assets/logo-rutgers.png'),
                body: 'B.S. Computer and Electrical Engineering, GPA : 3.32'
            }
        ]
    }

    const projectsList = {
        title: 'Projects',
        buttonTitle: 'View',
        buttonIcon: 'bi bi-link-45deg',
        rows: [
            {
                title: 'Blackbox Solution Corporation',
                onClick: () => window.open('https://blackboxsolution.co'),
                iconSrc: require('../../assets/logo-blackbox-solution.png'),
                body: 'C Corporation with a website that allows users to submit their web application ideas to be built by our team at Blackbox Solution',
            },
            {
                title: 'Ergsync',
                onClick: () => window.open('https://ergsync.com'),
                iconSrc: require('../../assets/logo-ergsync.png'),
                body: 'Web application that allows rowing athletes to connect their Concept2 device and join live group workout sessions, easily track their progress over time, and join a community of other rowers'
            },
            {
                title: 'Puzzled - Chess Trainer',
                onClick: () => window.open('https://apps.apple.com/us/app/puzzled-chess-trainer/id1493090358'),
                iconSrc: require('../../assets/logo-puzzledchesstrainer.jpg'),
                body: 'Published iOS application that allows users to practice chess puzzles, track their progress, and compete against other players. All user data is stored locally, and in the cloud with Firebase.',
            },
            {
                title: 'Reduced React',
                onClick: () => window.open('https://reducedreact.com'),
                iconSrc: require('../../assets/logo-react.png'),
                body: 'Web application that allows developers to build and simulate React Native applications from simplified JSX code.'
            },
        ]
    }

    const skillsList = {
        title: 'Skills',
        rows: [
            {
                title: 'React Web Development',
            },
            {
                title: 'React-Native Mobile Development',
            },
            {
                title: 'MongoDB + Node.js Backend Development'
            }
        ]
    }

    const languagesList = {
        title: 'Languages',
        rows: [
            { title: 'Javascript' },
            { title: 'Python' }
        ]
    }

    const scriptsList = {
        title: 'Utility Scripts',
        buttonTitle: 'View',
        buttonImage: require('../../assets/logo-github.png'),
        rows: [ 
        ]
    }

    return (

        <div style={styles.body}>
            <List {...educationList}/>
            <br /><br />
            <List {...projectsList} />
            <br /><br />
            <List {...skillsList} />
            <br /><br />
            <List {...languagesList} />
            <br /><br />
        </div>
    )
}

export {Home}