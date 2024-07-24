import React from 'react'
import WelcomeCompo from './Home'
import NewsletterSignup from './NewsletterSignup'
import Posts from '../PostBage/Posts'



function HomeBageWep() {
    return (
        <div>
            <WelcomeCompo />
            <br />
            <Posts />
            <br />
            <NewsletterSignup />
        </div>
    )
}

export default HomeBageWep