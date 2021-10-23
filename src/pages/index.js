import * as React from "react"
import axios from "axios"

import Footer from '../components/footer'
import { mainElement, titleDiv } from './shared.module.css'
import { headerDiv, emailInputDiv, emailInput, activityDiv,
    emailSubmitButton, activityListDiv, pushpinSpan, emailSubmitHeaderDiv,
    submitProcessMessageDiv, checkMarkSpan, submitSuccessMessageDiv,
    submitErrorMessageDiv, headerEmphasisSpan, logoImg, iconImg, activityItemDiv
} from './index.module.css'
import PageNowLogo from '../assets/PageNow_logo.png';
import PageNowIcon from '../assets/PageNow_icon.png';

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
        });
    }

    render() {
        let emailSubmitMsgDiv = <div></div>;
        if (this.state.isSubmittingEmail) {
            emailSubmitMsgDiv = (
                <div className={submitProcessMessageDiv}>
                    Submitting your email...
                </div>
            )
        } else if (this.state.emailSubmitAttempt) {
            if (this.state.isSubmittingEmail) {
                
            } else if (this.state.emailSubmitSuccess) {
                emailSubmitMsgDiv = (
                    <div className={submitSuccessMessageDiv}>
                        <span role="img" aria-label="check-mark" className={checkMarkSpan}>✔️</span> 
                        Your email has been submitted successfully.
                    </div>
                )
            } else {
                emailSubmitMsgDiv = (
                    <div className={submitErrorMessageDiv}>
                        <span role="img" aria-label="cross-mark" className={checkMarkSpan}>❌</span>
                        Sorry, there is an error. Please try again.
                    </div>
                )
            }
        }
        return (
            <main className={mainElement}>
                <title>PageNow</title>
                <div className={titleDiv}>
                    <img src={PageNowLogo} className={logoImg} />
                </div>
                <div className={headerDiv}>
                    Chrome extension for <span className={headerEmphasisSpan}>natural </span> 
                     and <span className={headerEmphasisSpan}>contextual</span> social interaction.
                </div>
                <div className={activityListDiv}>
                    <div className={activityItemDiv + ' ' + activityDiv}>
                    <img src={PageNowIcon} className={iconImg} />
                        <span>Share what page you are reading.</span>
                    </div>
                    <div className={activityItemDiv + ' ' + activityDiv}>
                    <img src={PageNowIcon} className={iconImg} />
                        <span>See what your friends are reading.</span>
                    </div>
                    <div className={activityItemDiv}>
                        <img src={PageNowIcon} className={iconImg} />
                        <span>Start contextual conversations.</span>
                    </div>
                </div>
                <div className={emailSubmitHeaderDiv}>
                    Enter your email to be notified when PageNow launches! 
                </div>
                <div className={emailInputDiv}>
                    <input type="email" value={this.state.email}
                        disabled={this.state.isSubmittingEmail}
                        onChange={this.handleEmailInputChange}
                        className={emailInput}
                        placeholder="Enter your email"
                    />
                    <button onClick={this.handleEmailSubmit}
                        className={emailSubmitButton}
                        disabled={this.state.isSubmittingEmail}>
                        <strong>Submit</strong>
                    </button>
                </div>
                { emailSubmitMsgDiv }
                <Footer pagePath="home" />
            </main>
        )
    } 
}

export default IndexPage
