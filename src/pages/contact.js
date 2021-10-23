import * as React from 'react'
import Header from '../components/header/header'

import { mainElement, titleDiv, emailSpan,
    contentDiv } from './shared.module.css'

const ContactPage = (props) => {
    return (
        <main className={mainElement}>
            <Header pagePath="contact" />
            <title>PageNow Contact</title>
            <div className={titleDiv}>PageNow Contact</div>
            <div className={contentDiv}>
                Email us at <span className={emailSpan}>support@pagenow.io</span> for any thoughts and questions.
            </div>
        </main>
    )
}

export default ContactPage