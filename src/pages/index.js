import * as React from "react"
import axios from "axios"

import Footer from '../components/footer'
import { titleDiv, mainElement, headerDiv } from './index.module.css'

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
        this.setState({ isSubmittingEmail: true });
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
    }

    render() {
        let emailSubmitMsgDiv = <div></div>;
        if (this.state.emailSubmitAttempt) {
            if (this.state.emailSubmitSuccess) {
                emailSubmitMsgDiv = (
                    <div>
                        Your email has been submitted successfully.
                    </div>
                )
            } else {
                emailSubmitMsgDiv = (
                    <div>
                        Sorry, there is an error. Please try submitting again.
                    </div>
                )
            }
        }
        return (
            <main className={mainElement}>
                <title>PageNow</title>
                <div className={titleDiv}>PageNow</div>
                <div className={headerDiv}>
                    Chrome extension that promotes natural and contextual social interaction.
                </div>
                <div>
                    You can ...
                </div>
                <div>
                    <div>
                        share the page you are reading
                    </div>
                    <div>
                        see what your friends are reading
                    </div>
                    <div>
                        chat with curated random users on the same page at the moment.
                    </div>
                </div>
                <div>
                    Enter your email to receive notification when PageNow launches in <strong>summer 2021</strong>. 
                </div>
                <div>
                    <input type="email" value={this.state.email}
                        disabled={this.state.isSubmittingEmail}
                        onChange={this.handleEmailInputChange}
                    />
                    <button onClick={this.handleEmailSubmit}
                        disabled={this.state.isSubmittingEmail}>
                        Submit
                    </button>
                </div>
                { emailSubmitMsgDiv }
                <Footer />
            </main>
        )
    } 
}

export default IndexPage
