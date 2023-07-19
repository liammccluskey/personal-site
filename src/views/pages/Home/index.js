import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import { setThemeColor, setTintColor } from '../../../redux/theme'
import { PageContainer } from '../../components/common/PageContainer'
import { BodyContainer } from '../../components/common/BodyContainer'
import { MainHeader } from '../../components/headers/MainHeader'
import { Button } from '../../components/common/Button'
import {TileIndicator} from '../../components/common/TileIndicator'
import {PillLabel} from '../../components/common/PillLabel'

const Education = {
    title: 'Rutgers University - New Brunswick',
    subtitle: 'B.S. Computer Engineering',
    gpa: '3.32'
}

const LanguageTiles = [
    {
        title: 'Javascript',
        level: 5
    },
    {
        title: 'Typescript',
        level: 4
    },
    {
        title: 'SQL', 
        level: 4
    },
    {
        title: 'Swift',
        level: 3
    },
    {
        title: 'Python',
        level: 4
    }
]

const SkillTiles = [
    {
        title: 'React.js',
        level: 5
    },
    {
        title: 'Vue.js',
        level: 4,
    },
    {
        title: 'MongoDB',
        level: 5
    },
    {
        title: 'Node.js',
        level: 5
    },
    {
        title: 'Express.js',
        level: 5
    }
]

const Projects = [
    {
        link: 'https://blackboxsolution.co',
        title: 'Blackbox Solution',
        subtitle: 'Web Application',
        description: 'C Corporation with a website that allows users to submit their web application ideas to be built by our team at Blackbox Solution.',
        imageSrc: require('../../../assets/screenshot-blackbox.png'),
        tools: ['React.js', 'Redux', 'MongoDB', 'Node.js', 'Express.js', 'Netlify', 'Heroku', 'Firebase'],
    },
    {
        link: 'https://ergsync.com',
        title: 'Ergsync',
        subtitle: 'Web Application',
        description: 'Web application that allows rowing athletes to connect their Concept2 device and join live group workout sessions, easily track their progress over time, and join a community of other rowers.',
        imageSrc: require('../../../assets/screenshot-ergsync.png'),
        tools: ['React.js', 'Redux', 'MongoDB', 'Node.js', 'Express.js', 'Netlify', 'Heroku', 'Firebase'],
    },
    {
        link: 'https://apps.apple.com/us/app/puzzled-chess-trainer/id1493090358',
        title: 'Puzzled - Chess Trainer',
        subtitle: 'iOS Application',
        description: 'Published iOS application that allows users to practice chess puzzles, track their progress, compete against other players, and explore openings. All user data is stored locally, and in the cloud with Firebase.',
        imageSrc: require('../../../assets/screenshot-puzzledchesstrainer.png'),
        tools: ['React.js', 'Redux', 'MongoDB', 'Node.js', 'Express.js', 'Netlify', 'Heroku', 'Firebase'],
    },
    {
        link: 'https://reducedreact.com',
        title: 'Reduced React',
        subtitle: 'Web Application',
        description: 'Web application that allows developers to build and simulate React Native applications from simplified JSX code.',
        imageSrc: require('../../../assets/screenshot-reducedreact.png'),
        tools: ['React.js', 'Redux', 'Netlify'],
    }

]

export const HomeComponent = props => {
    const {
        
    } = props
    const navigate = useNavigate()

    useEffect(() => {
        props.setThemeColor(1)
        props.setTintColor(1)
    }, [])

    const onClickViewProjects = () => {
        navigate('/')
    }

    return (
        <PageContainer>
            <MainHeader />
            <BodyContainer>
                <Container>
                    <div className='left-container'>
                        <div className='float-container tile-container'>
                            <h3 className='title'>Education</h3>
                            <h4>{Education.title}</h4>
                            <p className='secondary-text'>{Education.subtitle}</p>
                            <p className='secondary-text'>{`GPA: ${Education.gpa}`}</p>
                        </div>
                        <div className='float-container tile-container'>
                            <h3 className='title'>Languages</h3>
                            {LanguageTiles.map( ({title, level}) => (
                                <TileIndicator
                                    title={title}
                                    numFilled={level}
                                    numTotal={5}
                                    style={{marginBottom: 5}}
                                />
                            ))}
                        </div>
                        <div className='float-container tile-container'>
                            <h3 className='title'>Skills</h3>
                            {SkillTiles.map( ({title, level}) => (
                                <TileIndicator
                                    title={title}
                                    numFilled={level}
                                    numTotal={5}
                                    style={{marginBottom: 5}}
                                />
                            ))}
                        </div>
                    </div>
                    <div className='right-container'>
                        <div className='title-container'>
                            <h2>Projects</h2>
                            <Button
                                title='View Full Archive'
                                priority={3}
                                type='clear'
                                onClick={onClickViewProjects}
                            />
                        </div>
                        <div className='projects-container'>
                            {Projects.map( ({link, title, subtitle, description, imageSrc, tools}) => (
                                <div className='float-container project-container'>
                                    <img src={imageSrc} />
                                    <div className='title-container'>
                                        <h3 className='title'>{title}</h3>
                                    </div>
                                    <h4 className='subtitle'>{subtitle}</h4>
                                    <p className='description'>{description}</p>
                                    <div  className='tools-container'>
                                        {tools.map(tool => (
                                            <PillLabel
                                                title={tool}
                                                size='m'
                                                style={{marginRight: 10, marginBottom: 10}}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </BodyContainer>
        </PageContainer>
    )
}

const Root = styled.div`
    
`
const mapStateToProps = state => ({
    
})

const mapDispatchToProps = dispatch => bindActionCreators({
    setThemeColor,
    setTintColor
}, dispatch)

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent)

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    height: 100%;
    box-sizing: border-box;

    & .left-container {
        padding: 40px 0px;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        width: 250px;
        margin-right: 75px;
    }
    & .right-container {
        padding: 40px 0px;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        flex: 1;
        overflow: scroll;
    }

    & .tile-container {
        padding: 20px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        align-items: stretch;

    }
    & .tile-container .title {
        margin-bottom: 20px;
    }

    & .secondary-text {
        color: ${p => p.theme.textSecondary};
    }

    & .title-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    & .projects-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        flex: 1;
    }

    & .project-container {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        padding: 20px;
        margin-right: 30px;
        margin-bottom: 30px;

    }
    & .project-container img {
        border-radius: 20px;
        margin-bottom: 15px;
        border: 10px solid ${p => p.theme.bc};
    }
    & .project-container .title-container {
        margin-bottom: 5px;
    }
    & .project-container .subtitle {
        margin-bottom: 10px;
        color: ${p => p.theme.textMain};
    }
    & .project-container .description {
        margin-bottom: 15px;
        color: ${p => p.theme.textSecondary};
    }
    
    & .tools-container {
        display: flex;
        flex-wrap: wrap;
    }

`