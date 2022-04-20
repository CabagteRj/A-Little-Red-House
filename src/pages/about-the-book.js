import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import Book from '../../static/books/sample.png'

import { Helmet } from "react-helmet"

const ATB = (props) => {

    return (
        <>
            <Layout>
                <Helmet title="About the Book | Robert Kirkman" />
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                    <section className="body-book-contents">
                        <div className="container-gt separator-line">

                            <div className="grid-two-columns" id="wrapper-two-books">
                                        <div className="book-img">
                                        <img src={Book} alt="book-img" />
                                        </div>

                                        <div className="about-book">
                                        <h1><span>THE LITTLE RED HOUSE</span></h1> <br/>
                                        <p>A story about a little red house with no window, no doors and a star inside.
                                            <br/>
                                            Jimmy starts out on an advantage that takes him many places, meets many people, and learns to trust in others as well as himself. This is a wonderful story about love and trust a mother has for her son. Also, a story about always believing in yourself and anything is possible.
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