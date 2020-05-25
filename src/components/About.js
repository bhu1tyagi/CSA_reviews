import React from 'react'
import './css/About.css'
import Bits from '../img/bits-goa-campus.jpg'
import Card from './Card'
import Person from '../img/avatar.jpeg'

const About = () => {
    return (
        <div className="about-wrapper">
            <div className="about-body">
                <div className="row mt4">
                    <div className="col-md-6">
                      <h2 className="heading-quote">"Knowing is Not Enough, We must apply. Willing is not enough, we must do"
                      </h2>
                      <div className="divider"></div>
                      <p>With this initiative, we aim to make career options and procedures more transparent for our students to make the most of them. Even the most talented people need to be aware of the options available&nbsp;for them, to succeed. Through our career guidance effort, we aim to make our community better equipped&nbsp;for their lives after college.&nbsp;We feel this initiative is needed to bridge the awareness gap regarding placements and career opportunities, between juniors and those sitting for placements.&nbsp; We hope our in-depth conversations, along with some occasional light-hearted banter, will be informative reads.&nbsp;</p>
                    </div>
                    <div className="col-md-6">
                        <h1>About us</h1>
                        <img className="bits-img" src={Bits}/>
                    </div>
                </div>
                {/* meet the teeam */}
                <div className="row">
                <div className="col-md-8 mx-auto mt5">
                      <h2 className="heading-quote">Meet the Team
                      </h2>
                      <div className="divider"></div>
                      <div style={{marginTop:'50px'}} className="row">
                      <div className="col-md-6">
                        <Card img={Person} name="Rahul Bubna" title="President, Student Union 2020"/>
                        <Card img={Person} name="Kushagra Singh" title="Chief Editor"/>
                        <Card img={Person} name="Deepak jain" title="Web Manager"/>
                      </div>
                      <div className="col-md-6">
                      <Card img={Person} name="V Abishek Balaji" title="General Secretary, Student Union 2020"/>
                      <Card img={Person} name="Shobit Pandita" title="Chief Editor"/>
                      <Card img={Person} name="Akhilesh Parwal" title="Web Manager"/>
                      </div>
                      </div>
                    </div>
                    
                </div>
            </div>
        </div>


    )
}

export default About


