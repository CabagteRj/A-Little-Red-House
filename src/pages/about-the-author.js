import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import DummyImg from '../../static/author/NancyArmstrong.jpg'
import { Helmet } from "react-helmet"

const ATB = (props) => {

    return (
        <>
            <Layout>
                <Helmet title="About the Author | Robert Kirkman" />
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Author`} />

              
                    <section className="body-author-contents">
                        <div className="container-gt separator-line">

                            <div className="grid-two-columns" id="wrapper-two-books">
                                        <div className="author-img">
                                        <img src={DummyImg} alt="book-img" />
                                        </div>

                                        <div className="author-book">
                                        <h1><span>Nancy Armstrong</span></h1>
                                        <br/>
                                        <p>Nancy Armstronghas been an educator for over 20 years. Raised on a farm in Kansas, she enjoyed and experienced many beautiful days roaming the countryside exploring and learning about nature. When she started teaching in a city school, she used her experiences in her classroom as a tool to teach children about many life skills, about farming and countrylife. 
                                        </p>
                                        </div>
                                
                            </div>
                        </div>
                    </section>
               

            </Layout>
        </>
    )
}


export default ATB;
