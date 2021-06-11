import * as React from 'react'
import Footer from '../components/footer'

import { mainElement, titleDiv, emailSpan,
    contentDiv } from './shared.module.css'

const ContactPage = (props) => {
    return (
        <main className={mainElement}>
            <title>PageNow Contact</title>
            <div className={titleDiv}>PageNow Contact</div>
            <div className={contentDiv}>
                Email us at <span className={emailSpan}>support@pagenow.io</span> for any thoughts or questions.
            </div>
            <Footer pagePath="contact" />
        </main>
    )
}

export default ContactPage