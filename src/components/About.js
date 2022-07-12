const About = (props) => {
    return (
        <>
        <div className="container-fluid py-5" id="about">
                <div className="container">
                    <div className="position-relative d-flex align-items-center justify-content-center">
                        <h1
                            className="display-1 text-uppercase text-white"
                            style={{ WebkitTextStroke: "1px #dee2e6" }}
                        >
                            About
                        </h1>
                        <h1 className="position-absolute text-uppercase text-primary">
                            About Me
                        </h1>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-5 pb-4 pb-lg-0">
                            <img className="img-fluid rounded w-100" src={props.photo} alt="" />
                        </div>
                        <div className="col-lg-7">
                            <h3 className="mb-4">{props.title}</h3>
                            <p>
                                {props.description}
                            </p>
                            <div className="row mb-3">
                                <div className="col-sm-6 py-2">
                                    <h6>
                                        Name: <span className="text-secondary">{props.name}</span>
                                    </h6>
                                </div>
                                <div className="col-sm-6 py-2">
                                    <h6>
                                        Birthday: <span className="text-secondary">{props.birthday}</span>
                                    </h6>
                                </div>
                                <div className="col-sm-6 py-2">
                                    <h6>
                                        Degree: <span className="text-secondary">{props.degree}</span>
                                    </h6>
                                </div>
                                <div className="col-sm-6 py-2">
                                    <h6>
                                        Experience: <span className="text-secondary">{props.experience}</span>
                                    </h6>
                                </div>
                                <div className="col-sm-6 py-2">
                                    <h6>
                                        Phone: <span className="text-secondary">{props.phone}</span>
                                    </h6>
                                </div>
                                <div className="col-sm-6 py-2">
                                    <h6>
                                        Email: <span className="text-secondary">{props.email}</span>
                                    </h6>
                                </div>
                                <div className="col-sm-6 py-2">
                                    <h6>
                                        Address:{" "}
                                        <span className="text-secondary">
                                            {props.address}
                                        </span>
                                    </h6>
                                </div>
                                <div className="col-sm-6 py-2">
                                    <h6>
                                        Freelance: <span className="text-secondary">{props.freelance}</span>
                                    </h6>
                                </div>
                            </div>
                            <a href="" className="btn btn-outline-primary mr-4">
                                Hire Me
                            </a>
                            <a href="" className="btn btn-outline-primary">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;