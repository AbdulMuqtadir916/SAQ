import React from 'react';
import Avatar from '@components/avatar';
import icon from '../../assets/images/logo/Maktab.png';
import { CardText, InputGroup, InputGroupText, Badge, Input, Button, Label } from 'reactstrap'

function UserInfoCard1() {
    const renderUserImg = (name) => {
        return (
            <Avatar

                // color={selectedUser.avatarColor || 'light-primary'}
                color={'light-primary'}
                className=' '
                content={name}
                // content={selectedUser.fullName}
                contentStyles={{
                    borderRadius: 0,
                    fontSize: 'calc(20px)',
                    width: '100%',
                    height: '100%'
                }}
                style={{
                    height: '50px',
                    width: '50px'
                }}
            />
        )
    }
    return (
        <div>
            <div className="card mb-3 d-flex align-items-center " >
                <div className='card-body'>
                    <div className="row g-2 py-2 align-items-center">
                        <div className="col-md-3 ">

                            <img src={icon} width={90} />
                        </div>
                        <div className="col-md-9">
                            <div className=" text-center">
                                <h5 className="card-title mb-0">NTR Nagar Maktab</h5>
                                <p className="card-text  mb-0">Mandal, District,</p>
                                <p className="card-text  mb-0"><small className="text-body-secondary">State, Country</small></p>
                            </div>
                        </div>
                    </div>

                    <div className="border border-end-0 border-start-0   fw-semibold w-80 py-2 fs-5 text-center">
                        MAKTAB ID : MKTS001
                    </div>

                    <div className="p-0">
                        <ul className='pl-1 p-2 pb-1.5 d-flex row g-2'>
                            <li className='d-flex gap-2 align-items-center'>
                                <div>{renderUserImg('MJ')}</div>
                                <div>
                                    <h5 className='mb-0'>Mufti Jafer Ahmed</h5>
                                    <p className="mb-0">Consultant : 0987654321</p>
                                </div>
                            </li>
                            <li className='d-flex gap-2 align-items-center'>
                                <div>{renderUserImg('HS')}</div>
                                <div>
                                    <h5 className='mb-0'>Hafiz Siraj Ahmed</h5>
                                    <p className="mb-0">Nigrankar : 0217654313</p>
                                </div>
                            </li>
                            <li className='d-flex gap-2 align-items-center'>
                                <div>{renderUserImg('MA')}</div>
                                <div>
                                    <h5 className='mb-0'>Mukkaram Ahmed</h5>
                                    <p className="mb-0">Sader : 0945647821</p>
                                </div>
                            </li>
                            <li className='d-flex gap-2 align-items-center'>
                                <div>{renderUserImg('SA')}</div>
                                <div>
                                    <h5 className='mb-0'>Shafi Ahmed</h5>
                                    <p className="mb-0">Nayeb Sader : 0987445321</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <hr className='pb-2'></hr>


                    <div className='d-flex justify-content-center align-items-center col gap-1'>
                        <div>
                            <p className='fw-semibold mb-0'>Maktak Category </p>
                            <p className='fw-semibold mb-0'>Maktak Type </p>
                            <p className='fw-semibold mb-0'>Student Type </p>
                            <p className='fw-semibold mb-0'>Registaration Date </p>
                        </div>
                        <div>
                            <p className="mb-0"><span className='fw-semibold pe-1'>:</span> Managed</p>
                            <p className="mb-0"><span className='fw-semibold pe-1'>:</span> Slum Maktab</p>
                            <p className="mb-0"><span className='fw-semibold pe-1'>:</span> Co-Education</p>
                            <p className="mb-0"><span className='fw-semibold pe-1'>:</span> 25th June 2023</p>
                        </div>
                    </div>

                    <hr className='pb-1'></hr>

                    <div className='d-flex justify-content-center pt-2'>
                        <Button color='primary' outline >
                            Edit
                        </Button>
                        <Button className='ms-1' color='primary'  >
                            Active
                        </Button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default UserInfoCard1
