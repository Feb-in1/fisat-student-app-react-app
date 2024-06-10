import React, { useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const AddStudent = () => {
    const [data, setData] = useState(
        {
            // "_id": "",
            "firstname": "",
            "lastname": "",
            "college": "",
            "dob": "",
            "course": "",
            "mobile": "",
            "email": "",
            "address": ""


        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(data)

        axios.post("https://courseapplogix.onrender.com/addstudents", data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("Added Successfully")
                } else {
                    alert(response.data)
                }
            }
        ).catch(
            (error)=>{
                
                alert("error")
            }
        )
    }


    return (
        <div>
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">

                            {/* <div className="col col-12 col-sm-6 col-md-6 col col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Id</label>
                                <input type="text" className="form-control" name='_id' value={data._id} onChange={inputHandler} />
                            </div> */}

                            <div className="col col-12 col-sm-6 col-md-6 col col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">First Name</label>
                                <input type="text" className="form-control" name='firstname' value={data.firstname} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Last Name</label>
                                <input type="text" className="form-control" name='lastname' value={data.lastname} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">College</label>
                                <input type="text" className="form-control" name='college' value={data.college} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Date of Birth</label>
                                <input type="date" className="form-control" name='dob' value={data.dob} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Course</label>
                                <input type="text" className="form-control" name='course' value={data.course} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Mobile No</label>
                                <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email Id</label>
                                <input type="email" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Address</label>
                                <textarea id="" className="form-control" name='address' value={data.address} onChange={inputHandler}></textarea>
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