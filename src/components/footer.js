import * as React from 'react'
import { Link } from 'gatsby'

import { footerDiv } from './footer.module.css'

const Footer = (props) => {
    return (
        <div className={footerDiv}>
            <span><Link to="/">Home</Link></span> ・
            <span><Link to="/careers">Career</Link></span> ・
            <span><Link to="/contact">Contact</Link></span> ・
            <span><a href="https://www.noninertialframe.com">
                Blog
            </a></span>
        </div>
    )
}

export default Footer