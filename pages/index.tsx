import React from 'react'
import Layout from '../src/component/Layout/Layout'
import Content from '../src/component/Content/Content'

const IndexPage = () => {
    return (<>
        <Layout dispBtn={true}>
            <Content></Content>
        </Layout>
    </>)
}
export default IndexPage