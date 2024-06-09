import React, { useState } from 'react'
import Nav from './Nav'

const AddStudent = () => {
    const [data, setData] = useState(
        {
            "fname": "",
            "lname": "",
            "colg": "",
            "dob": "",
            "cour": "",
            "mob": "",
            "em": "",
            "add": ""


        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(data)
    }
    return (
        <div>
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">First Name</label>
                                <input type="text" className="form-control" name='fname' value={data.fname} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Last Name</label>
                                <input type="text" className="form-control" name='lname' value={data.lname} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">College</label>
                                <input type="text" className="form-control" name='colg' value={data.colg} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Date of Birth</label>
                                <input type="date" className="form-control" name='dob' value={data.dob} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Course</label>
                                <input type="text" className="form-control" name='cour' value={data.cour} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Mobile No</label>
                                <input type="text" className="form-control" name='mob' value={data.mob} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email Id</label>
                                <input type="email" className="form-control" name='em' value={data.em} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Address</label>
                                <textarea id="" className="form-control" name='add' value={data.add} onChange={inputHandler}></textarea>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readValue}>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddStudent