import { useState } from "react";

const Skills = ({ skills, getSkills }) => {

    const [skill, setSkill] = useState("");
    const [level, setLevel] = useState("");

    const [selectedSkill, setSelectedSkill] = useState({
        skill: '',
        level: ''
    })

    const handleSubmitUpdate = e => {
        e.preventDefault();

        let data = {
            skill: selectedSkill.skill,
            level: selectedSkill.level
        }

        let url = `https://3001-ljavierrodr-practiceint-paii6ojc9gl.ws-us53.gitpod.io/skills/${selectedSkill.id}`;
        let options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        updateSkill(url, options);

    }
    const handleSubmitSave = e => {
        e.preventDefault();

        let data = {
            skill: skill,
            level: level
        }

        let url = "https://3001-ljavierrodr-practiceint-paii6ojc9gl.ws-us53.gitpod.io/skills";
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        saveSkill(url, options);

    }

    const saveSkill = (url, options) => {
        fetch(url, options)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                if (data.id > 0) {
                    getSkills(
                        "https://3001-ljavierrodr-practiceint-paii6ojc9gl.ws-us53.gitpod.io/skills",
                        {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })
                    setSkill("");
                    setLevel("");
                }
            })
    }

    const updateSkill = (url, options) => {
        fetch(url, options)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                if (data.id > 0) {
                    getSkills(
                        "https://3001-ljavierrodr-practiceint-paii6ojc9gl.ws-us53.gitpod.io/skills",
                        {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })
                    setSelectedSkill({
                        skill: '',
                        level: ''
                    })
                }
            })
    }

    const deleteSkill = (id) => {

        let url = `https://3001-ljavierrodr-practiceint-paii6ojc9gl.ws-us53.gitpod.io/skills/${id}`;
        let options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        fetch(url, options)
            .then((response) => {
                return response.json();
            })
            .then(() => {
                getSkills(
                    "https://3001-ljavierrodr-practiceint-paii6ojc9gl.ws-us53.gitpod.io/skills",
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
            })
    }

    return (
        <>
            <div className="container-fluid py-5" id="skill">
                <div className="container">
                    <div className="position-relative d-flex align-items-center justify-content-center">
                        <h1
                            className="display-1 text-uppercase text-white"
                            style={{ WebkitTextStroke: "1px #dee2e6" }}
                        >
                            Skills
                        </h1>
                        <h1 className="position-absolute text-uppercase text-primary">
                            My Skills
                            <button className="btn btn-primary mx-3" data-toggle="modal" data-target="#exampleModal"><i className="fas fa-plus"></i></button>
                        </h1>
                    </div>
                    <div className="row align-items-center">

                        {
                            !!skills &&
                            skills.length > 0 &&
                            skills.map((s) => {
                                return (
                                    <div className="col-md-6" key={s.id}>
                                        <div className="skill mb-4">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="font-weight-bold">{s.skill} <i className="fas fa-minus" onClick={() => deleteSkill(s.id)}></i></h6>
                                                <h6 className="font-weight-bold">{s.level}%</h6>
                                            </div>
                                            <div className="progress" data-toggle="modal" data-target="#modalUpdate" onClick={() => setSelectedSkill(s)}>
                                                <div
                                                    className="progress-bar bg-primary"
                                                    role="progressbar"
                                                    aria-valuenow={s.level}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                    style={{ "width": `${s.level}%` }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        {/* <div className="col-md-6">
                            <div className="skill mb-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-bold">HTML</h6>
                                    <h6 className="font-weight-bold">95%</h6>
                                </div>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-primary"
                                        role="progressbar"
                                        aria-valuenow={95}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                        style={{ "width": "95%" }}
                                    />
                                </div>
                            </div>
                            <div className="skill mb-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-bold">CSS</h6>
                                    <h6 className="font-weight-bold">85%</h6>
                                </div>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-warning"
                                        role="progressbar"
                                        aria-valuenow={85}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                            </div>
                            <div className="skill mb-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-bold">PHP</h6>
                                    <h6 className="font-weight-bold">90%</h6>
                                </div>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        aria-valuenow={90}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="skill mb-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-bold">Javascript</h6>
                                    <h6 className="font-weight-bold">90%</h6>
                                </div>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        aria-valuenow={90}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                            </div>
                            <div className="skill mb-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-bold">Angular JS</h6>
                                    <h6 className="font-weight-bold">95%</h6>
                                </div>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-dark"
                                        role="progressbar"
                                        aria-valuenow={95}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                            </div>
                            <div className="skill mb-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-bold">Wordpress</h6>
                                    <h6 className="font-weight-bold">85%</h6>
                                </div>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-info"
                                        role="progressbar"
                                        aria-valuenow={85}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                    />
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmitSave}>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Skills</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group mb3">
                                    <label htmlFor="skill" className="form-label">Skill</label>
                                    <input type="text" name="skill" id="skill" className="form-control" placeholder="ex: javascript" value={skill} onChange={(e) => setSkill(e.target.value)} />
                                </div>
                                <div className="form-group mb3">
                                    <label htmlFor="level" className="form-label">Level</label>
                                    <input type="number" name="level" id="level" className="form-control" placeholder="ex: 80" value={level} onChange={(e) => setLevel(e.target.value)} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

            <form onSubmit={handleSubmitUpdate}>
                <div className="modal fade" id="modalUpdate" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Skills</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group mb3">
                                    <label htmlFor="skill" className="form-label">Skill</label>
                                    <input type="text" name="skill" id="skill" className="form-control" placeholder="ex: javascript" value={selectedSkill.skill} onChange={(e) => setSelectedSkill({ ...selectedSkill, skill: e.target.value })} />
                                </div>
                                <div className="form-group mb3">
                                    <label htmlFor="level" className="form-label">Level</label>
                                    <input type="number" name="level" id="level" className="form-control" placeholder="ex: 80" value={selectedSkill.level} onChange={(e) => setSelectedSkill({ ...selectedSkill, level: e.target.value })} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Update changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Skills;