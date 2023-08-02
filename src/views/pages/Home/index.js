import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import { getIsMobile, getIsSemiMobile } from '../../../redux/theme'
import { setThemeColor, setTintColor } from '../../../redux/theme'
import { PageContainer } from '../../components/common/PageContainer'
import { BodyContainer } from '../../components/common/BodyContainer'
import { MainHeader } from '../../components/headers/MainHeader'
import { Button } from '../../components/common/Button'
import {TileIndicator} from '../../components/common/TileIndicator'
import {PillLabel} from '../../components/common/PillLabel'
import {ActionLink} from '../../components/common/ActionLink'
import {Pill} from '../../components/common/Pill'

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
        title: 'React Native',
        level: 4
    },
    {
        title: 'Redux',
        level: 5
    },
    {
        title: 'Vue.js',
        level: 3,
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
    },
    {
        title: 'Firebase',
        level: 4
    }
]

const Projects = [
    // {
    //     link: 'https://blackboxsolution.co',
    //     title: 'Blackbox Solution',
    //     subtitle: 'Web Application',
    //     description: 'C Corporation with a website that allows users to submit their web application ideas to be built by our team at Blackbox Solution.',
    //     imageSrc: require('../../../assets/screenshot-blackbox.png'),
    //     tools: ['React.js', 'Redux', 'MongoDB', 'Node.js', 'Express.js', 'Netlify', 'Heroku', 'Firebase'],
    // },
    {
        link: 'https://ergsync.com',
        title: 'Ergsync',
        subtitle: 'Web Application',
        description: 'Web application that allows rowing athletes to connect their Concept2 device and join live group workout sessions, easily track their progress over time, and join a community of other rowers.',
        imageSrc: require('../../../assets/screenshot-ergsync.png'),
        tools: ['React.js', 'MongoDB', 'Node.js', 'Express.js', 'Netlify', 'Heroku', 'Firebase'],
    },
    {
        link: 'https://apps.apple.com/us/app/puzzled-chess-trainer/id1493090358',
        title: 'Puzzled - Chess Trainer',
        subtitle: 'iOS Application',
        description: 'Published iOS application that allows users to practice chess puzzles, track their progress, compete against other players, and explore openings.',
        imageSrc: require('../../../assets/screenshot-puzzledchesstrainer.png'),
        tools: ['Swift', 'XCode', 'Core Data', 'Firebase'],
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
    const [reactPillActive, setReactPillActive] = useState(false)
    const [vuePillActive, setVuePillActive] = useState(false)
    const [swiftPillActive, setSwiftPillActive] = useState(false)
    const [reduxPillActive, setReduxPillActive] = useState(false)
    const [mongodbPillActive, setMongodbPillActive] = useState(false)
    const [sqlPillActive, setSQLPillActive] = useState(false)
    const [firebasePillActive, setFirebasePillActive] = useState(false)
    const [filteredProjects, setFilteredProjects] = useState(Projects)

    const frontendPills = [
        {
            title: 'React.js',
            active: reactPillActive,
            id: 'react'
        },
        {
            title: 'Vue.js',
            active: vuePillActive,
            id: 'vue'
        },
        {
            title: 'Swift',
            active: swiftPillActive,
            id: 'swift'
        },
        {
            title: 'Redux',
            active: reduxPillActive,
            id: 'redux'
        }
    ]

    const backendPills = [
        {
            title: 'MongoDB',
            active: mongodbPillActive,
            id: 'mongodb'
        },
        {
            title: 'SQL',
            active: sqlPillActive,
            id: 'sql'
        },
        {
            title: 'Firebase',
            active: firebasePillActive,
            id: 'firebase'
        }
    ]

    useEffect(() => {
        props.setThemeColor(2)
        props.setTintColor(1)
    }, [props.isMobile])

    useEffect(() => {
        const activePills = [
            [reactPillActive, 'React.js'],
            [vuePillActive, 'Vue.js'],
            [swiftPillActive, 'Swift'],
            [reduxPillActive, 'Redux'],
            [mongodbPillActive, 'MongoDB'],
            [sqlPillActive, 'SQL'],
            [firebasePillActive, 'Firebase']
        ].filter( ([active]) => active )
        .map( ([_, title]) => title)

        const projects = Projects.filter( ({tools}) => {
            console.log(activePills)
            let hasAllFilters = true
            activePills.forEach( (pillTitle) => {
                if (!tools.includes(pillTitle)) hasAllFilters = false
            })
            return hasAllFilters
        })
        setFilteredProjects(projects)
    }, [reactPillActive, vuePillActive, swiftPillActive, reduxPillActive, mongodbPillActive, sqlPillActive, firebasePillActive])

    const onClickViewProjects = () => {
        navigate('/')
    }

    const onClickProjectLink = link => {
        window.open(link, '_blank')
    }

    const onClickPill = pillID => {
        switch (pillID) {
            case 'react':
                setReactPillActive(curr => !curr)
                setVuePillActive(false)
                setSwiftPillActive(false)
                break
            case 'vue':
                setVuePillActive(curr => !curr)
                setReactPillActive(false)
                setSwiftPillActive(false)
                break
            case 'swift':
                setSwiftPillActive(curr => !curr)
                setReactPillActive(false)
                setVuePillActive(false)
                break
            case 'redux':
                setReduxPillActive(curr => !curr)
                break
            case 'mongodb':
                setMongodbPillActive(curr => !curr)
                setSQLPillActive(false)
                break
            case 'sql':
                setSQLPillActive(curr => !curr)
                setMongodbPillActive(false)
                break
            case 'firebase':
                setFirebasePillActive(curr => !curr)
                break
        }
    }

    return (
        <PageContainer>
            <MainHeader />
            <BodyContainer>
                <Container className={`${props.isMobile && 'mobile'} ${props.isSemiMobile && 'semi-mobile'}`}>
                    <div className='left-container'>
                        <div className='float-container tile-container'>
                            <h3 className='title'>Education</h3>
                            <h4 className='main-text'>{Education.title}</h4>
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
                                    style={{marginBottom: 3}}
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
                                    style={{marginBottom: 3}}
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
                        <div className='pills-container'>
                            <div className='pills-row-container'>
                                <p className='title'>Frontend: </p>
                                {frontendPills.map(({title, active, id}) => (
                                    <Pill
                                        title={title}
                                        active={active}
                                        onClick={() => onClickPill(id)}
                                        style={{marginRight: 5, marginBottom: 5}}
                                    />
                                ) )}
                            </div>
                            <div className='pills-row-container'>
                            <p className='title'>Backend: </p>
                                {backendPills.map(({title, active, id}) => (
                                    <Pill
                                        title={title}
                                        active={active}
                                        onClick={() => onClickPill(id)}
                                        style={{marginRight: 5, marginBottom: 5}}
                                    />
                                ) )}
                            </div>
                        </div>
                        <div className='projects-container'>
                            {filteredProjects.map( ({link, title, subtitle, description, imageSrc, tools}) => (
                                <div className='float-container project-container'>
                                    <img src={imageSrc} />
                                    <div className='title-container'>
                                        <h3 className='title'>{title}</h3>
                                        <ActionLink
                                            onClick={() => onClickProjectLink(link)}
                                            title='View Project'
                                        />
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
    isMobile: getIsMobile(state),
    isSemiMobile: getIsSemiMobile(state),
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

    &.mobile {
        display: grid;
        grid-template-columns: 1fr;
        overflow: scroll;
    }

    & .left-container {
        padding: 40px 0px;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        width: 250px;
        margin-right: 75px;
        overflow: scroll;
    }
    & .right-container {
        padding: 40px 0px;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        flex: 1;
        overflow: scroll;
    }
    &.mobile .left-container,
    &.mobile .right-container {
        width: auto;
        padding: 30px 0px;
        height: auto !important;;
        margin: 0px !important;
        overflow: visible;
    }
    &.semi-mobile .left-container {
        margin-right: 40px;
    }

    & .tile-container {
        padding: 15px 20px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        overflow: visible !important;
    }
    & .tile-container .title {
        margin-bottom: 10px;
    }

    & .secondary-text {
        color: ${p => p.theme.textSecondary};
        margin-bottom: 3px;
    }

    & .main-text {
        color: ${p => p.theme.textMain};
        margin-bottom: 3px;
    }

    & .title-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    & .pills-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 10px;
    }

    & .pills-row-container {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
    & .pills-row-container .title {
        margin-right: 10px;
        margin-bottom: 5px;
        color: ${p => p.theme.textSecondary};
    }

    & .projects-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        flex: 1;
    }
    &.semi-mobile .projects-container {
        grid-template-columns: 1fr;
    }

    & .project-container {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        padding: 20px;
        margin-right: 15px;
        margin-bottom: 30px;
        box-sizing: border-box;
    }
    & .project-container:nth-child(even) {
        margin-right: 0px;
        margin-left: 15px;
    }
    &.semi-mobile .project-container {
        margin: 0px;
        margin-bottom: 30px;
    }
    & .project-container img {
        border-radius: 20px;
        margin-bottom: 15px;
        border: 10px solid ${p => p.theme.bc};
        height: auto;
        aspect-ratio: auto;
        width: 100%;
        box-sizing: border-box;
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