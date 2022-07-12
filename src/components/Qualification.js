const Qualification = ({ education, experience }) => {
    return (
        <>
            <div className="container-fluid py-5" id="qualification">
                <div className="container">
                    <div className="position-relative d-flex align-items-center justify-content-center">
                        <h1
                            className="display-1 text-uppercase text-white"
                            style={{ WebkitTextStroke: "1px #dee2e6" }}
                        >
                            Quality
                        </h1>
                        <h1 className="position-absolute text-uppercase text-primary">
                            Education &amp; Expericence
                        </h1>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h3 className="mb-4">My Education</h3>
                            <div className="border-left border-primary pt-2 pl-4 ml-2">
                                {
                                    !!education &&
                                    education.length > 0 &&
                                    education.map((educ) => {
                                        return (
                                            <div className="position-relative mb-4" key={educ.id}>
                                                <i
                                                    className="far fa-dot-circle text-primary position-absolute"
                                                    style={{ top: 2, left: "-32px" }}
                                                />
                                                <h5 className="font-weight-bold mb-1">{educ.title}</h5>
                                                <p className="mb-2">
                                                    <strong>{educ.college}</strong> |{" "}
                                                    <small>{educ.years}</small>
                                                </p>
                                                <p>
                                                    {educ.description}
                                                </p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h3 className="mb-4">My Expericence</h3>
                            <div className="border-left border-primary pt-2 pl-4 ml-2">
                            {
                                    !!experience &&
                                    experience.length > 0 &&
                                    experience.map((exp) => {
                                        return (
                                            <div className="position-relative mb-4" key={exp.id}>
                                                <i
                                                    className="far fa-dot-circle text-primary position-absolute"
                                                    style={{ top: 2, left: "-32px" }}
                                                />
                                                <h5 className="font-weight-bold mb-1">{exp.title}</h5>
                                                <p className="mb-2">
                                                    <strong>{exp.college}</strong> |{" "}
                                                    <small>{exp.years}</small>
                                                </p>
                                                <p>
                                                    {exp.description}
                                                </p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Qualification;