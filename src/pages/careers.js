import * as React from 'react'
import Footer from '../components/footer'

import { mainElement, titleDiv, emailSpan,
    contentDiv } from './shared.module.css'

const CareersPage = (props) => {
    return (
        <main className={mainElement}>
            <title>PageNow Careers</title>
            <div className={titleDiv}>PageNow Careers</div>
            <div className={contentDiv}>
                We are not hiring right now <span role="img" aria-label="frowning-face">😣</span>
            </div>
            <div className={contentDiv}>
                We will open positions for software engineers, UI/UX designers, machine learning engineers, and NLP researchers.</div>
            <div className={contentDiv}>
                Meanwhile, send us your resume to <span className={emailSpan}>support@pagenow.io</span> to be considered and notified when positions open.
            </div>
            <Footer />
        </main>
    )
}

export default CareersPage