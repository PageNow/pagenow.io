import * as React from 'react'
import { Link } from 'gatsby'

import { footerDiv, linkElement, currentLinkElement, dotSpan } from './footer.module.css'

const Footer = (props) => {
    const homeLinkElement = props.pagePath === 'home' ? currentLinkElement : ''
    const careersLinkElement = props.pagePath === 'careers' ? currentLinkElement : ''
    const contactLinkElement = props.pagePath === 'contact' ? currentLinkElement : ''
    return (
        <div className={footerDiv}>
            <span>
                <Link to="/" className={`${linkElement} ${homeLinkElement}`}>
                    Home
                </Link>
            </span> 
            <span className={dotSpan}>・</span>
            <span>
                <Link to="/careers" className={`${linkElement} ${careersLinkElement}`}>
                    Career
                </Link>
            </span> 
            <span className={dotSpan}>・</span>
            <span>
                <Link to="/contact" className={`${linkElement} ${contactLinkElement}`}>
                    Contact
                </Link>
            </span> 
            <span className={dotSpan}>・</span>
            <span><a href="https://www.noninertialframe.com" className={linkElement} target="_blank" rel="noreferrer">
                Blog
            </a></span>
        </div>
    )
}

export default Footer