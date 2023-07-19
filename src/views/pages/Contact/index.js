import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import styled from 'styled-components'

import { PageContainer } from '../../components/common/PageContainer'
import { BodyContainer } from '../../components/common/BodyContainer'
import { MainHeader } from '../../components/headers/MainHeader'

export const ContactComponent = props => {
    const {
        
    } = props

    return (
        <PageContainer>
            <MainHeader />
            <BodyContainer>
                <Container className='float-container'>
                    <h2>Email: liammail100@gmail.com</h2>
                </Container>
            </BodyContainer>
        </PageContainer>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 30px;
    margin: 30px 0px;
`
const mapStateToProps = state => ({
    
})

const mapDispatchToProps = dispatch => bindActionCreators({
    
}, dispatch)

export const Contact = connect(mapStateToProps, mapDispatchToProps)(ContactComponent)