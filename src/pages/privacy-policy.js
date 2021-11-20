import * as React from 'react'
import Header from '../components/header/header'

import { mainElement, titleDiv, policyContentDiv, linkElement, emailSpan } from './shared.module.css'

const PrivacyPolicyPage = (props) => {
    return (
        <main className={mainElement}>
            <Header pagePath="privacy-policy" />
            <title>PageNow Privacy Policy</title>
            <div className={titleDiv}>Privacy Policy for PageNow</div>
            <div className={policyContentDiv}>
                <p>
                    At PageNow, accessible from <a className={linkElement} href="https://www.pagenow.io">https://www.pagenow.io</a> and Chrome Web Store, 
                    one of our main priorities is the privacy of our users and visitors. This Privacy Policy document contains types of information 
                    that is collected and recorded by PageNow and how we use it.</p>
                <p>
                    If you have additional questions or require more information about our Privacy Policy, 
                    do not hesitate to contact us at <span className={emailSpan}>support@pagenow.io</span>.
                </p>
                <p>
                    This Privacy Policy applies only to our online activities and is valid for the users of our service with regards to the 
                    information that they shared and/or collect in PageNow. This policy is not applicable to any information collected offline 
                    or via channels other than this service. Our Privacy Policy was created with the help of the
                    <a className={linkElement} href="https://www.privacypolicygenerator.info"> Free Privacy Policy Generator</a>.
                </p>

                <h2>Consent</h2>
                <p>By using our service, you hereby consent to our Privacy Policy and agree to its terms.</p>

                <h2>Information we collect</h2>
                <p>
                    The personal information that you are asked to provide, and the reasons why you are asked to provide it, 
                    will be made clear to you at the point we ask you to provide your personal information.
                </p>
                <p>
                    If you contact us directly, we may receive additional information about you such as your name, email address, 
                    phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
                </p>
                <p>
                    When you register for an account, we may ask for your contact information, including items such as name, company name, address, 
                    email address, and telephone number.
                </p>

                <h2>User activity data we collect</h2>
                <p>
                    We only collect data of your activity on websites that you choose to share. You can allow or block sharing activity data 
                    at the url domain level of page addresses.
                </p>
                <p>
                    Upon registering for an account, your account will be configured to share a set of domains by default. You 
                    can add or remove a domain to be shared at any time. However, your past activity on a domain you block will not be deleted 
                    unless you submit a request to <span className={emailSpan}>support@pagenow.io</span>.
                </p>

                <h2>How we use your information and data</h2>
                <p>We use the information we collect in various ways, including to:</p>
                <ul>
                    <li>Provide, operate, and maintain our service</li>
                    <li>Improve, personalize, and expand our service</li>
                    <li>Understand and analyze how you use our service</li>
                    <li>Develop new products, services, features, and functionalities</li>
                    <li>
                        Communicate with you, either directly or through one of our partners, including for customer service, 
                        to provide you with updates and other information relating to the service, and for marketing and promotional purposes
                    </li>
                    <li>Send you emails</li>
                    <li>Find and prevent fraud</li>
                </ul>

                <h2>Log Files</h2>
                <p>
                    PageNow follows a standard procedure of using log files. These files log visitors when they visit websites 
                    and user activities for domains allowed to be shared by the users. 
                    All hosting companies do this and a part of hosting services' analytics. The information collected by log files 
                    include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), 
                    date and time stamp, referring/exit pages, visited pages, and possibly the number of clicks. 
                    These are not linked to any information that is personally identifiable. The purpose of the information is 
                    for analyzing trends, administering the site, tracking users' movement on the website/service, and gathering demographic information.</p>

                <h2>Advertising Partners Privacy Policies</h2>
                <p>You may consult this list to find the Privacy Policy for each of the advertising partners of PageNow.</p>
                <p>
                    Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their 
                    respective advertisements and links that appear on PageNow, which are sent directly to users' browser. They automatically receive your 
                    IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or 
                    to personalize the advertising content that you see on websites that you visit.
                </p>
                <p>Note that PageNow has no access to or control over these cookies that are used by third-party advertisers.</p>

                <h2>Third Party Privacy Policies</h2>
                <p>
                    PageNow's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective 
                    Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions 
                    about how to opt-out of certain options.
                </p>
                <p>
                    You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management 
                    with specific web browsers, it can be found at the browsers' respective websites.
                </p>

                <h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
                <p>Under the CCPA, among other rights, California consumers have the right to:</p>
                <ul>
                    <li>
                        Request that a business that collects a consumer's personal data disclose the categories and specific pieces of 
                        personal data that a business has collected about consumers.
                    </li>
                    <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
                    <li>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</li>
                    <li>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</li>
                </ul>

                <h2>GDPR Data Protection Rights</h2>
                <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
                <ul>
                    <li>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</li>
                    <li>
                        The right to rectification – You have the right to request that we correct any information you believe is inaccurate. 
                        You also have the right to request that we complete the information you believe is incomplete.
                    </li>
                    <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
                    <li>
                        The right to restrict processing – You have the right to request that we restrict the processing of your personal data, 
                        under certain conditions.
                    </li>
                    <li>
                        The right to object to processing – You have the right to object to our processing of your personal data, 
                        under certain conditions.
                    </li>
                    <li>
                        The right to data portability – You have the right to request that we transfer the data that we have collected to 
                        another organization, or directly to you, under certain conditions.
                    </li>
                </ul>
                <p>
                    If you make a request, we have one month to respond to you. 
                    If you would like to exercise any of these rights, please contact us at <span className={emailSpan}>admin@pagenow.io</span>
                </p>

                <h2>Children's Information</h2>
                <p>
                    Another part of our priority is adding protection for children while using the internet. 
                    We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                </p>
                <p>
                    PageNow does not knowingly collect any Personal Identifiable Information from children under the age of 13. 
                    If you think that your child provided this kind of information on our service, 
                    we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
                </p>

                <h2>Default Activity Sharing Settings</h2>
                <p>
                    Upon account creation, the list of domains on which users will 
                    share their activities are as follows:
                </p>
                <p>
                    academia.edu, aitrends.com, androidauthority.com, androidcentral.com, angular.io, apnews.com, artificial-intelligence.blog, artofproblemsolving.com, 
                    arxiv.org, askubuntu.com', betterprogramming.pub, bloomberg.com, brunch.co.kr, businessinsider.com, buzzfeednews.com, caltech.edu, cbs.com, cbsnews.com, 
                    cnbc.com, cnet.com, cnn.com, coursera.org, crunchbase.com, css-tricks.com, css-tricks.com, deeplearning.ai, dev.to, devdocs.io, devpost.com, diff.blog, 
                    digitalocean.com, dzone.com, economist.com, edx.org, elsevier.com, engadget.com, entrepreneur.com, espn.com, fool.com, forbes.com, fortune.com, foxnews.com, 
                    foxnews.com, freecodecamp.org, geeksforgeeks.org, github.com, github.io, gitlab.com, gizmodo.com, glassdoor.com, goodreads.com, hackernoon.com, hackerrank.com, 
                    hbr.org, heroku.com, huffpost.com, inc.com, kaggle.com, kdnuggets.com, latimes.com, leetcode.com, leetcode.com, machinelearningmastery.com, mashable.com, 
                    medium.com, mit.edu, mozilla.org, namu.wiki, nbcnews.com, nfl.com, nih.gov, noninertialframe.com, npr.org, nytimes.com, okky.kr, openai.com, pagenow.io, 
                    paulgraham.com, plainenglish.io, pluralsight.com, politico.com, producthunt.com, python.org, pytorch.org, quora.com, redhat.com, research.google, researchgate.net, 
                    reuters.com, science.gov, sciencedaily.com, scienceopen.com, scikit-learn.org, serverfault.com, serverless.com, slashdot.org, stackexchange.com, stackoverflow.com, 
                    stackshare.io, techcrunch.com, techmeme.com, technologyreview.com, ted.com, tensorflow.org, testdriven.io, theverge.com, tistory.com, tmz.com, topcoder.com, 
                    towardsdatascience.com, udacity.com, udemy.com, usnews.com, venturebeat.com, vox.com, w3schools.com, washingtonpost.com, wikipedia.org, wired.com, wsj.com, 
                    xkcd.com, ycombinator.com
                </p>
                <p>
                    Users can update the list of domains at any time.
                </p>
            </div>
        </main>
    )
}

export default PrivacyPolicyPage