import React, { Component } from 'react'

export default class landingpage extends Component {
    render() {
        return (

            <div style={{ backgroundColor: 'aliceblue' }}>
                <div classname="container mt-5" style={{ backgroundColor: 'white' }}>
                    <div classname="row mx-2">
                        <div classname="col-auto ml-auto">
                            <button type="button" classname="btn btn-light" style={{ color: '#0076FF' }}><svg aria-hidden="true" focusable="false" data-prefix="fas" height="2em" width="2em" data-icon="times" classname="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
                            </button>
                        </div>
                        <div classname="w-100"></div>
                        <div classname="col mb-3">
                            <h1 style={{ color: '#0076FF' }}>Biolege</h1>
                        </div>
                        <div classname="w-100"></div>
                        <div classname="col-5 mt-4 mb-5">
                            <div classname="row mx-3 mr-n4">
                                <div classname="col">
                                    <h2 style={{ color: "#0076FF" }}><b>Welcome to Biolege,</b></h2>
                                </div>
                                <div classname="w-100"></div>
                                <div classname="col mt-n1">
                                    <h5 style={{ color: 'rgb(39, 137, 250)' }}>Your Health Assistance</h5>
                                </div><br /><br /><br />
                                <div classname="w-100"></div>
                                <div classname="col mt-2 text-muted" style={{ fontSize: '11px' }}>
                                    No Sign in required
                                    </div>
                                <div classname="w-100"></div>
                                <div classname="col mt-n1 text-muted" style={{ fontSize: '11px' }}>
                                    Enter you mobile number and continue.
                                    </div><br />
                                <div classname="w-100"></div>
                                <div classname="col mt-4">
                                    <div classname="row">
                                        <div classname="col-2">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" height="2em" width="2em" data-icon="phone-alt" classname="svg-inline--fa fa-phone-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" style="color: #0076FF;"></path></svg>
                                        </div>
                                        <div classname="col-10 ml-n4">
                                            <div classname="input-group mb-3">
                                                <div classname="input-group-prepend">
                                                    <span classname="input-group-text border-primary pb-1" id="basic-addon1" style="background-color: white; color: #0076FF; border-width: 2px;">+91</span>
                                                </div>
                                                <input type="text" classname="form-control border-primary" placeholder="Enter your number" aria-label="number" aria-describedby="basic-addon1" style={{ color: '#0076FF' }, { borderWidth: '2px' }} />
                                            </div>
                                        </div>
                                    </div><br />
                                    <div classname="w-100"></div>
                                    <div classname="col text-muted text-center" style={{ fontSize: '11px' }}>
                                        A 6 digit OTP will be sent via SMS to verify your mobile number.
                                    </div>
                                    <div classname="w-100"></div>
                                    <div classname="col text-muted text-center" style={{ fontSize: '11px' }}>
                                        Tap on the request OTP
                                    </div>
                                    <div classname="w-100"></div><br /><br />
                                    <div classname="col text-center">
                                        <button type="button" classname="btn btn-sm btn-primary px-5">Request OTP</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div classname="col-2 mt-5 ml-n5 mr-3">
                            <div classname="bordr-right"></div>
                        </div>
                        <div classname="col-5 ml-3">
                            <div classname="border" style={{ height: '26em' }, { backgroundColor: 'rgb(236, 203, 215)' }}></div>
                        </div>
                        <div classname="w-100"></div>
                        <div classname="col-auto ml-auto">
                            <button type="button" classname="btn btn-light" style="font-size: 20px; color: #0076FF;">Skip <svg classname="bi bi-arrow-right-short" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.793 8 8.146 5.354a.5.5 0 010-.708z" clip-rule="evenodd" />
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 01.5-.5H11a.5.5 0 010 1H4.5A.5.5 0 014 8z" clip-rule="evenodd" />
                            </svg></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
