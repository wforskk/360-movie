import React from 'react'
import Layout from '../src/component/Layout/Layout'
import ServiceRequest from '../src/component/ServiceRequest/ServiceRequest'
import AppOpening from '../src/component/AppOpening/AppOpening'
import Top from '../src/component/Top/Top'
import MainIntro from '../src/component/ServiceIntro/MainIntro/MainIntro'

const IndexPage = () => {
    return (
        <>
            <AppOpening></AppOpening>
            <Layout>
                <Top />
                <MainIntro />
                <ServiceRequest />
            </Layout>
        </>
    )
}
export default IndexPage