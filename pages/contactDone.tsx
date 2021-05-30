import React from 'react'
import Layout from '../src/component/Layout/Layout'
import ContactDone from '../src/component/ContactDone/ContactDone'

const ContactDonePage = () => {
    return (<div>
        <Layout dispBtn={false}>
            <ContactDone></ContactDone>
        </Layout>
    </div>)
}
export default ContactDonePage