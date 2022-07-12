import { useEffect, useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Qualification from "./components/Qualification";
import Skills from "./components/Skills";
import VideoModal from "./components/VideoModal";

const App = () => {

    const [aboutMe, setAboutMe] = useState(null);
    const [education, setEducation] = useState(null);
    const [experience, setExperience] = useState(null);
    const [skills, setSkills] = useState(null);


    useEffect(() => {
        getAboutMe(
            "https://3001-ljavierrodr-practiceint-paii6ojc9gl.ws-us53.gitpod.io/aboutme",
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

        getEducation(
            "https://3001-ljavierrodr-practiceint-paii6ojc9gl.ws-us53.gitpod.io/education",
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

        getExperience(
            "https://3001-ljavierrodr-practiceint-paii6ojc9gl.ws-us53.gitpod.io/experience",
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

        getSkills(
            "https://3001-ljavierrodr-practiceint-paii6ojc9gl.ws-us53.gitpod.io/skills",
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })


    }, [])


    const getAboutMe = (url = "", options = {}) => {
        fetch(url, options)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setAboutMe(data);
            })
    }

    const getEducation = (url = "", options = {}) => {
        fetch(url, options)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setEducation(data);
            })
    }

    const getExperience = (url = "", options = {}) => {
        fetch(url, options)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setExperience(data);
            })
    }

    const getSkills = (url = "", options = {}) => {
        fetch(url, options)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setSkills(data);
            })
    }

    return (
        <>
            {/* Navbar Start */}
            <Navbar />
            {/* Navbar End */}
            {/* Video Modal Start */}
            <VideoModal {...aboutMe} />
            {/* Video Modal End */}
            {/* Header Start */}
            <Header {...aboutMe} />
            {/* Header End */}
            {/* About Start */}
            <About {...aboutMe} />
            {/* About End */}
            {/* Qualification Start */}
            <Qualification education={education} experience={experience} />
            {/* Qualification End */}
            {/* Skill Start */}
            <Skills skills={skills} getSkills={getSkills}/>
            {/* Skill End */}
            {/* Services Start */}
            <div className="container-fluid pt-5" id="service">
                <div className="container">
                    <div className="position-relative d-flex align-items-center justify-content-center">
                        <h1
                            className="display-1 text-uppercase text-white"
                            style={{ WebkitTextStroke: "1px #dee2e6" }}
                        >
                            Service
                        </h1>
                        <h1 className="position-absolute text-uppercase text-primary">
                            My Services
                        </h1>
                    </div>
                    <div className="row pb-3">
                        <div className="col-lg-4 col-md-6 text-center mb-5">
                            <div className="d-flex align-items-center justify-content-center mb-4">
                                <i className="fa fa-2x fa-laptop service-icon bg-primary text-white mr-3" />
                                <h4 className="font-weight-bold m-0">Web Design</h4>
                            </div>
                            <p>
                                Justo sit justo eos amet tempor amet clita amet ipsum eos elitr.
                                Amet lorem lorem lorem est amet labore eirmod erat clita
                            </p>
                            <a
                                className="border-bottom border-primary text-decoration-none"
                                href=""
                            >
                                Read More
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center mb-5">
                            <div className="d-flex align-items-center justify-content-center mb-4">
                                <i className="fa fa-2x fa-laptop-code service-icon bg-primary text-white mr-3" />
                                <h4 className="font-weight-bold m-0">Web Development</h4>
                            </div>
                            <p>
                                Justo sit justo eos amet tempor amet clita amet ipsum eos elitr.
                                Amet lorem lorem lorem est amet labore eirmod erat clita
                            </p>
                            <a
                                className="border-bottom border-primary text-decoration-none"
                                href=""
                            >
                                Read More
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center mb-5">
                            <div className="d-flex align-items-center justify-content-center mb-4">
                                <i className="fab fa-2x fa-android service-icon bg-primary text-white mr-3" />
                                <h4 className="font-weight-bold m-0">Apps Design</h4>
                            </div>
                            <p>
                                Justo sit justo eos amet tempor amet clita amet ipsum eos elitr.
                                Amet lorem lorem lorem est amet labore eirmod erat clita
                            </p>
                            <a
                                className="border-bottom border-primary text-decoration-none"
                                href=""
                            >
                                Read More
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center mb-5">
                            <div className="d-flex align-items-center justify-content-center mb-4">
                                <i className="fab fa-2x fa-apple service-icon bg-primary text-white mr-3" />
                                <h4 className="font-weight-bold m-0">Apps Development</h4>
                            </div>
                            <p>
                                Justo sit justo eos amet tempor amet clita amet ipsum eos elitr.
                                Amet lorem lorem lorem est amet labore eirmod erat clita
                            </p>
                            <a
                                className="border-bottom border-primary text-decoration-none"
                                href=""
                            >
                                Read More
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center mb-5">
                            <div className="d-flex align-items-center justify-content-center mb-4">
                                <i className="fa fa-2x fa-search service-icon bg-primary text-white mr-3" />
                                <h4 className="font-weight-bold m-0">SEO</h4>
                            </div>
                            <p>
                                Justo sit justo eos amet tempor amet clita amet ipsum eos elitr.
                                Amet lorem lorem lorem est amet labore eirmod erat clita
                            </p>
                            <a
                                className="border-bottom border-primary text-decoration-none"
                                href=""
                            >
                                Read More
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 text-center mb-5">
                            <div className="d-flex align-items-center justify-content-center mb-4">
                                <i className="fa fa-2x fa-edit service-icon bg-primary text-white mr-3" />
                                <h4 className="font-weight-bold m-0">Content Creating</h4>
                            </div>
                            <p>
                                Justo sit justo eos amet tempor amet clita amet ipsum eos elitr.
                                Amet lorem lorem lorem est amet labore eirmod erat clita
                            </p>
                            <a
                                className="border-bottom border-primary text-decoration-none"
                                href=""
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Services End */}
            {/* Blog Start */}
            <div className="container-fluid pt-5" id="blog">
                <div className="container">
                    <div className="position-relative d-flex align-items-center justify-content-center">
                        <h1
                            className="display-1 text-uppercase text-white"
                            style={{ WebkitTextStroke: "1px #dee2e6" }}
                        >
                            Blog
                        </h1>
                        <h1 className="position-absolute text-uppercase text-primary">
                            Latest Blog
                        </h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 mb-5">
                            <div className="position-relative mb-4">
                                <img
                                    className="img-fluid rounded w-100"
                                    src="img/blog-1.jpg"
                                    alt=""
                                />
                                <div className="blog-date">
                                    <h4 className="font-weight-bold mb-n1">01</h4>
                                    <small className="text-white text-uppercase">Jan</small>
                                </div>
                            </div>
                            <h5 className="font-weight-medium mb-4">
                                Rebum lorem no eos ut ipsum diam tempor sed rebum elitr ipsum
                            </h5>
                            <a className="btn btn-sm btn-outline-primary py-2" href="">
                                Read More
                            </a>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="position-relative mb-4">
                                <img
                                    className="img-fluid rounded w-100"
                                    src="img/blog-2.jpg"
                                    alt=""
                                />
                                <div className="blog-date">
                                    <h4 className="font-weight-bold mb-n1">01</h4>
                                    <small className="text-white text-uppercase">Jan</small>
                                </div>
                            </div>
                            <h5 className="font-weight-medium mb-4">
                                Rebum lorem no eos ut ipsum diam tempor sed rebum elitr ipsum
                            </h5>
                            <a className="btn btn-sm btn-outline-primary py-2" href="">
                                Read More
                            </a>
                        </div>
                        <div className="col-lg-4 mb-5">
                            <div className="position-relative mb-4">
                                <img
                                    className="img-fluid rounded w-100"
                                    src="img/blog-3.jpg"
                                    alt=""
                                />
                                <div className="blog-date">
                                    <h4 className="font-weight-bold mb-n1">01</h4>
                                    <small className="text-white text-uppercase">Jan</small>
                                </div>
                            </div>
                            <h5 className="font-weight-medium mb-4">
                                Rebum lorem no eos ut ipsum diam tempor sed rebum elitr ipsum
                            </h5>
                            <a className="btn btn-sm btn-outline-primary py-2" href="">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Blog End */}
            {/* Contact Start */}
            <div className="container-fluid py-5" id="contact">
                <div className="container">
                    <div className="position-relative d-flex align-items-center justify-content-center">
                        <h1
                            className="display-1 text-uppercase text-white"
                            style={{ WebkitTextStroke: "1px #dee2e6" }}
                        >
                            Contact
                        </h1>
                        <h1 className="position-absolute text-uppercase text-primary">
                            Contact Me
                        </h1>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="contact-form text-center">
                                <div id="success" />
                                <form name="sentMessage" id="contactForm" noValidate="novalidate">
                                    <div className="form-row">
                                        <div className="control-group col-sm-6">
                                            <input
                                                type="text"
                                                className="form-control p-4"
                                                id="name"
                                                placeholder="Your Name"
                                                required="required"
                                                data-validation-required-message="Please enter your name"
                                            />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="control-group col-sm-6">
                                            <input
                                                type="email"
                                                className="form-control p-4"
                                                id="email"
                                                placeholder="Your Email"
                                                required="required"
                                                data-validation-required-message="Please enter your email"
                                            />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <input
                                            type="text"
                                            className="form-control p-4"
                                            id="subject"
                                            placeholder="Subject"
                                            required="required"
                                            data-validation-required-message="Please enter a subject"
                                        />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="control-group">
                                        <textarea
                                            className="form-control py-3 px-4"
                                            rows={5}
                                            id="message"
                                            placeholder="Message"
                                            required="required"
                                            data-validation-required-message="Please enter your message"
                                            defaultValue={""}
                                        />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div>
                                        <button
                                            className="btn btn-outline-primary"
                                            type="submit"
                                            id="sendMessageButton"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}
            {/* Footer Start */}
            <div className="container-fluid bg-primary text-white mt-5 py-5 px-sm-3 px-md-5">
                <div className="container text-center py-5">
                    <div className="d-flex justify-content-center mb-4">
                        <a className="btn btn-light btn-social mr-2" href="#">
                            <i className="fab fa-twitter" />
                        </a>
                        <a className="btn btn-light btn-social mr-2" href="#">
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a className="btn btn-light btn-social mr-2" href="#">
                            <i className="fab fa-linkedin-in" />
                        </a>
                        <a className="btn btn-light btn-social" href="#">
                            <i className="fab fa-instagram" />
                        </a>
                    </div>
                    <div className="d-flex justify-content-center mb-3">
                        <a className="text-white" href="#">
                            Privacy
                        </a>
                        <span className="px-3">|</span>
                        <a className="text-white" href="#">
                            Terms
                        </a>
                        <span className="px-3">|</span>
                        <a className="text-white" href="#">
                            FAQs
                        </a>
                        <span className="px-3">|</span>
                        <a className="text-white" href="#">
                            Help
                        </a>
                    </div>
                    <p className="m-0">
                        ©{" "}
                        <a className="text-white font-weight-bold" href="#">
                            Domain Name
                        </a>
                        . All Rights Reserved. Designed by{" "}
                        <a className="text-white font-weight-bold" href="https://htmlcodex.com">
                            HTML Codex
                        </a>
                    </p>
                </div>
            </div>
            {/* Footer End */}
            {/* Scroll to Bottom */}
            <i className="fa fa-2x fa-angle-down text-white scroll-to-bottom" />
            {/* Back to Top */}
            <a href="#" className="btn btn-outline-dark px-0 back-to-top">
                <i className="fa fa-angle-double-up" />
            </a>
        </>
    )
}

export default App;