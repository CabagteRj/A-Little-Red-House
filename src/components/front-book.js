import React from 'react'
import { Link } from 'gatsby'
import FrontBook from '../../static/books/Nancybook.png'
import Author from '../../static/author/NancyArmstrong.jpg';

const MidBook = () => {
    return (
        <>
            <section className="upper-main">
                <div className="container-gt separator-line">

                    <div className="grid-two-columns" id="wrapper-two-books">

                        <div className="book-wraps">
                        <h2><spam>Click Here to View</spam></h2>
                            <img src={FrontBook} alt="book-img" />
                                <div className="book-overlay">

                                    <h1 className="heading--featured">
                                        <span>Featured Book</span>
                                    </h1>

                                    <p>
                                    This is a story about a little boy who learns that everything that is fun cannot always be found in a toy box or even in a book...
                                    </p>

                                    <button className="btn-book-featured">
                                        <Link to="/about-the-book">
                                            Read More
                                        </Link>
                                    </button>
                                </div>
                        </div>

                        <div className="author-wraps">
                        <h2><span>Click Here to View</span></h2>
                            <img src={Author} alt="author-img" />
                            <div className="author-overlay">
                                    <p>
                                    Nancy Armstrong has been an educator for over 20 years, she enjoyed and experienced many beautiful days roaming the countryside exploring and learning about...
                                </p>

                                <h1 className="author-name-tag">
                                    <span>Nancy Armstrong</span>
                                </h1>

                                <span className="author-tagline">
                                    Author & Writer
                                </span>

                                <button >
                                    <Link to="/about-the-author">Read More</Link>
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default MidBook