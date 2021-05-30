import React from 'react'
import Layout from '../src/component/Layout/Layout'
import Contact from '../src/component/Contact/Contact'

const ContactPage = () => {
    return (<div>
        <Layout dispBtn={false}>
            <Contact></Contact>
        </Layout>
    </div>)
}
export default ContactPage