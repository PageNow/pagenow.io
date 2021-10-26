import * as React from 'react'
import { Link } from 'gatsby'

import { headerDiv, linkElement, currentLinkElement, dotSpan } from './header.module.css'

const Header = (props) => {
    const homeLinkElement = props.pagePath === 'home' ? currentLinkElement : ''
    const careersLinkElement = props.pagePath === 'careers' ? currentLinkElement : ''
    const contactLinkElement = props.pagePath === 'contact' ? currentLinkElement : ''
    // const privacyPolicyLinkElement = props.pagePath === 'privacy-policy' ? currentLinkElement : ''
    // const termsOfServiceElement = props.pagePath === 'terms-of-service' ? currentLinkElement : ''
    return (
        <div className={headerDiv}>
            <span>
                <Link to="/" className={`${linkElement} ${homeLinkElement}`}>
                    Home
                </Link>
            </span> 
            <span className={dotSpan}>•</span>
            <span>
                <Link to="/careers" className={`${linkElement} ${careersLinkElement}`}>
                    Career
                </Link>
            </span> 
            <span className={dotSpan}>•</span>
            <span>
                <Link to="/contact" className={`${linkElement} ${contactLinkElement}`}>
                    Contact
                </Link>
            </span> 
            <span className={dotSpan}>•</span>
            <span><a href="https://www.noninertialframe.com" className={linkElement} target="_blank" rel="noreferrer">
                Blog
            </a></span>
            {/* <span className={dotSpan}>•</span>
            <span>
                <Link to="/privacy-policy" className={`${linkElement} ${privacyPolicyLinkElement}`}>
                    Privacy Policy
                </Link>
            </span>
            <span className={dotSpan}>•</span>
            <span>
                <Link to="/terms-of-service" className={`${linkElement} ${termsOfServiceElement}`}>
                    Terms of Service
                </Link>
            </span> */}
        </div>
    )
}

export default Header