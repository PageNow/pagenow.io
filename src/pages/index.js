import * as React from "react"
import axios from "axios"
import Carousel from 'react-bootstrap/Carousel';

import Header from '../components/header/header'
import { mainElement, titleDiv } from './shared.module.css'
import { headerDiv, chromeStoreHeaderDiv, activityDiv, storeLink,
    activityListDiv, headerEmphasisSpan, logoImg, pushpinSpan,
    activityItemDiv, githubLink, privacyHeaderDiv, githubHeaderDiv
} from './index.module.css'
import { carouselElem, carouselDiv, carouselImg } from './carousel.module.css'
import PageNowLogo from '../assets/PageNow_logo.png';
import PagesScreenshot from '../assets/pages_screenshot.png';
import ChatListScreenshot from '../assets/chat_list_screenshot.png';
import ChatMessageScreenshot from '../assets/chat_message_screenshot.png';
import SearchScreenshot from '../assets/search_screenshot.png';
import NotificationScreenshot from '../assets/notification_screenshot.png';
import ConversationsScreenshot from '../assets/conversations_screenshot.png';
import PagesComponentScreenshot from '../assets/pages_component_screenshot.png';

const chromeStoreUrl = "https://chrome.google.com/webstore/detail/pagenow/lplobiaakhgkjcldopgkbcibeilddbmc";
const githubUrl = "https://github.com/PageNow";

class IndexPage extends React.Component {
    state = {
        email: "",
        isSubmittingEmail: false,
        emailSubmitAttempt: false,
        emailSubmitSuccess: false
    }

    handleEmailInputChange = event => {
        this.setState({ email: event.target.value })
    }

    handleEmailSubmit = () => {
        this.setState({ isSubmittingEmail: true }, () => {
            const url = "https://374xrbucik.execute-api.us-east-1.amazonaws.com/Prod/writedb";
            axios.post(url, { email: this.state.email })
                .then(res => {
                    if (res.status === 200) {
                        this.setState({
                            email: "",
                            emailSubmitAttempt: true,
                            emailSubmitSuccess: true,
                            isSubmittingEmail: false
                        })
                    }
                })
                .catch(err => {
                    this.setState({
                        emailSubmitAttempt: true,
                        emailSubmitSuccess: false,
                        isSubmittingEmail: false
                    })
                })
        })
    }

    render() {
        return (
            <main className={mainElement}>
                <Header pagePath="home" />
                <title>PageNow</title>
                <div className={titleDiv}>
                    <a href={chromeStoreUrl} target="_blank" rel="noreferrer">
                        <img src={PageNowLogo} className={logoImg} alt="PageNow-Logo" />
                    </a>
                </div>
                <div className={headerDiv}>
                    Chrome extension for <span className={headerEmphasisSpan}>natural </span> 
                     and <span className={headerEmphasisSpan}>contextual</span> social interaction.
                </div>
                
                <div className={chromeStoreHeaderDiv}>
                    Available at 
                    <a href={chromeStoreUrl} target="_blank" rel="noreferrer" className={storeLink}>Chrome Store</a>!
                </div>

                <div className={privacyHeaderDiv}>
                    <strong>Privacy</strong> and <strong>security</strong> are the highest priority for PageNow. 
                </div>

                <div className={githubHeaderDiv}>
                    The entire source code is available on <a href={githubUrl} target="_blank" rel="noreferrer" className={githubLink}>Github</a>.
                </div>

                <div className={carouselDiv}>
                    <Carousel className={carouselElem} variant="dark">
                        <Carousel.Item>
                            <img className={`d-block ${carouselImg}`} alt="Pages Screenshot" 
                                src={PagesScreenshot} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className={`d-block ${carouselImg}`} alt="Chat List Screenshot"
                                src={ChatListScreenshot} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className={`d-block ${carouselImg}`} alt="Chat Message Screenshot"
                                src={ChatMessageScreenshot} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className={`d-block ${carouselImg}`} alt="Pages Component Screenshot"
                                src={PagesComponentScreenshot} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className={`d-block ${carouselImg}`} alt="Conversations Screenshot"
                                src={ConversationsScreenshot} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className={`d-block ${carouselImg}`} alt="Search Screenshot"
                                src={SearchScreenshot} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className={`d-block ${carouselImg}`} alt="Notification Screenshot"
                                src={NotificationScreenshot} />
                        </Carousel.Item>
                    </Carousel>
                </div>

                <div className={activityListDiv}>
                    <div className={activityItemDiv + ' ' + activityDiv}>
                        {/* <img src={PageNowIcon} className={iconImg} alt="PageNow Icon" /> */}
                        <span role="img" aria-label="pushpin" className={pushpinSpan}>📌</span> 
                        <span>Share what page you are reading.</span>
                    </div>
                    <div className={activityItemDiv + ' ' + activityDiv}>
                        {/* <img src={PageNowIcon} className={iconImg} alt="PageNow Icon" /> */}
                        <span role="img" aria-label="pushpin" className={pushpinSpan}>📌</span> 
                        <span>See what your friends are reading.</span>
                    </div>
                    <div className={activityItemDiv}>
                        {/* <img src={PageNowIcon} className={iconImg} alt="PageNow Icon" /> */}
                        <span role="img" aria-label="pushpin" className={pushpinSpan}>📌</span> 
                        <span>Start contextual conversations.</span>
                    </div>
                </div>
            </main>
        )
    } 
}

export default IndexPage
