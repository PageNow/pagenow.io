import * as React from 'react'
import Header from '../components/header/header'

import { mainElement, titleDiv, policyContentDiv, linkElement } from './shared.module.css'

const TermsOfService = (props) => {
    return (
        <main className={mainElement}>
            <Header pagePath="terms-of-service" />
            <title>PageNow Terms of Service</title>
            <div className={titleDiv}>Terms and Conditions of Use for PageNow</div>
            <div className={policyContentDiv}>
                <h2>1. Terms</h2>
                <p>
                    By accessing PageNow website and service, accessible from <a className={linkElement} href="https://www.pagenow.io">https://www.pagenow.io </a> 
                    and Chrome Web Store, you are agreeing to be bound by these Terms and Conditions of Use and agree that you are responsible for 
                    the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing PageNow website and service. 
                    The materials contained in PageNow website and service are protected by copyright and trade mark law. 
                    These Terms of Service has been created with the help of the 
                    <a className={linkElement} href="https://www.termsofservicegenerator.net"> Terms Of Service Generator</a>.
                </p>

                <h2>2. Use License</h2>
                <p>
                    Permission is granted to temporarily download one copy of the materials on PageNow's website or service for personal, 
                    non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul>
                    <li>modify or copy the materials;</li>
                    <li>use the materials for any commercial purpose or for any public display;</li>
                    <li>attempt to reverse engineer any software contained on PageNow's website and service;</li>
                    <li>remove any copyright or other proprietary notations from the materials; or</li>
                    <li>transferring the materials to another person or "mirror" the materials on any other server.</li>
                </ul>
                <p>
                    This will let PageNow to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be 
                    terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format. 
                </p>

                <h2>3. Disclaimer</h2>
                <p>
                    All the materials on PageNow’s website and service are provided "as is". PageNow makes no warranties, may it be expressed or implied, 
                    therefore negates all other warranties. Furthermore, PageNow does not make any representations concerning the accuracy or 
                    reliability of the use of the materials on its website and service or otherwise relating to such materials or any sites linked to this website and service.
                </p>

                <h2>4. Limitations</h2>
                <p>
                    PageNow or its suppliers will not be held accountable for any damages that will arise with the use or inability to use the materials on 
                    PageNow’s website and service, even if PageNow or its authorized representative has been notified, 
                    orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations 
                    of liability for incidental damages, and these limitations may not apply to you.
                </p>

                <h2>5. Revisions and Errata</h2>
                <p>
                    The materials appearing on PageNow’s website and service may include technical, typographical, or photographic errors. 
                    PageNow will not promise that any of the materials in this website and service are accurate, complete, or current. 
                    PageNow may change the materials contained on its website and service at any time without notice. 
                    PageNow does not make any commitment to update the materials.
                </p>

                <h2>6. Links</h2>
                <p>
                    PageNow has not reviewed all of the sites linked to its website and service and is not responsible for the contents 
                    of any such linked site. The presence of any link does not imply endorsement by PageNow of the site. 
                    The use of any linked website is at the user’s own risk.
                </p>

                <h2>7. Site Terms of Use Modifications</h2>
                <p>
                    PageNow may revise these Terms of Use for its website and service at any time without prior notice. 
                    By using this website and service, you are agreeing to be bound by the current version of these Terms and Conditions of Use.
                </p>

                <h2>8. Your Privacy</h2>
                <p>Please read our <a className={linkElement} href="https://www.pagenow.io/privacy-policy"> Privacy Policy</a>.</p>

                <h2>9. Governing Law</h2>
                <p>
                    Any claim related to PageNow's website and service shall be governed by the laws of the United States 
                    without regards to its conflict of law provisions.
                </p>
            </div>
        </main>
    )
}

export default TermsOfService