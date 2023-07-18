import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'

import { getIsMobile, getIsSemiMobile } from '../../../../redux/theme'
import { MainMenu } from '../MainMenu'
import { LinksMenu } from '../LinksMenu'

const PageLinks = [
    {
        name: 'Home',
        url: '',
        id: '',
        icon: 'bi-house'
    },
]

export const MainHeaderComponent = props => {
    const {
        hasSubheaderBelow=false,
    } = props
    const navigate = useNavigate()
    const [mainMenuHidden, setMainMenuHidden] = useState(true)
    const [linksMenuHidden, setLinksMenuHidden] = useState(true)

    const activeLinkID = window.location.pathname.split('/')[1]

    const onClickLogo = () => navigate('/')

    return (
        <Root className={`d-flex jc-space-between ai-center ${!hasSubheaderBelow && 'no-subheader'}`}>
            <div
                className='d-flex jc-flex-start ai-center clickable'
                onClick={onClickLogo}
            >
                <img className='logo-icon'
                    src={require('../../../../assets/logo.png')}
                    height={35}
                    width={35}
                />
                <h3 className='logo-text'>
                    Liam Mccluskey
                </h3>
            </div>
            <div className='d-flex jc-flex-end ai-center'>
                {props.isSemiMobile ?
                    <LinksMenu
                        style={{marginRight: 15}}
                        menuHidden={linksMenuHidden}
                        setMenuHidden={setLinksMenuHidden}
                        pageLinks={PageLinks}
                    />
                    : PageLinks.map( ({name, url, id}) => (
                        <PageLink
                            key={id}
                            to={url}
                            className={id === activeLinkID ? 'active': ''}
                        >
                            {name}
                        </PageLink>
                    ))
                }
                <MainMenu
                    menuHidden={mainMenuHidden}
                    setMenuHidden={setMainMenuHidden}
                />
            </div>
        </Root>
    )
}

const mapStateToProps = state => ({
    isMobile: getIsMobile(state),
    isSemiMobile: getIsSemiMobile(state),
})

const Root = styled.div`
    background-color: ${props => props.theme.bgcNav};
    min-height: var(--h-mainheader);
    padding: 0px var(--ps-mainheader);
    width: 100%;
    box-sizing: border-box;
    
    &.no-subheader {
        border-bottom: ${p => p.theme.navBorder};
        position: sticky;
        top: 0px;
    }

    & .logo-icon {
        // border-radius: 50%;
        margin-right: 15px;
    }

    & .logo-text {
        font-weight: 600;
        color: ${p => p.theme.textPrimary};
    }
`

const PageLink = styled(Link)`
    color: ${p => p.theme.textPrimary};
    font-weight: 400;
    font-size: 15px;
    text-decoration: none;
    margin-right: 25px;

    &:hover,
    &.active {
        color: ${p => p.theme.tint} !important;
    }
`

export const MainHeader = connect(mapStateToProps)(MainHeaderComponent)