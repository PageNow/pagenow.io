import * as React from 'react'
import { Link } from 'gatsby'

import { footerDiv, linkElement, dotSpan } from './footer.module.css'

const Footer = (props) => {
    return (
        <div className={footerDiv}>
            <span><Link to="/" className={linkElement}>Home</Link></span> 
            <span className={dotSpan}>・</span>
            <span><Link to="/careers" className={linkElement}>Career</Link></span> 
            <span className={dotSpan}>・</span>
            <span><Link to="/contact" className={linkElement}>Contact</Link></span> 
            <span className={dotSpan}>・</span>
            <span><a href="https://www.noninertialframe.com" className={linkElement} target="_blank" rel="noreferrer">
                Blog
            </a></span>
        </div>
    )
}

export default Footer