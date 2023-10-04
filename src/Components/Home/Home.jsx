import React from "react";
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit';


import { Link, useNavigate } from "react-router-dom";

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useSelector } from "react-redux";
import { userIsAuth } from "../../redux/slices/userSlice";











const HomePage = (props) => {
    const navigate = useNavigate()
    const isAuth = useSelector(userIsAuth);
    const { data } = useSelector(state => state.auth);
    if (!isAuth) {
        return navigate('/login')
    }
    return (
        <div>
            <section style={{ backgroundColor: '#eee' }}>
                <MDBContainer className="py-5" >
                    <MDBRow>
                        <MDBCol lg="4">
                            <MDBCard className="mb-4">
                                <MDBCardBody className="text-center">
                                    <MDBCardImage
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                        alt="avatar"
                                        className="rounded-circle"
                                        style={{ width: '150px' }}
                                        fluid />
                                    <p className="text-muted mb-1">{!data.profession === null ? data.profession : 'Profession'}</p>
                                    <div className="d-flex justify-content-center mb-2">
                                        <MDBBtn>Follow</MDBBtn>
                                        <MDBBtn outline className="ms-1">Message</MDBBtn>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>

                            <MDBCard className="mb-4 mb-lg-0">
                                <MDBCardBody className="p-0">
                                    <MDBListGroup flush className="rounded-3">
                                        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                            <MDBIcon fas icon="globe fa-lg text-warning" />
                                            <MDBCardText>{data.website ? data.website : 'Website'}</MDBCardText>
                                        </MDBListGroupItem>
                                        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                            <MDBIcon fab icon="github fa-lg" style={{ color: '#333333' }} />
                                            <MDBCardText>{data.github ? data.github : 'Github'}</MDBCardText>
                                        </MDBListGroupItem>
                                        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                            <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                                            <MDBCardText>{data.twitter ? data.twitter : 'Twitter'}</MDBCardText>
                                        </MDBListGroupItem>
                                        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                            <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                                            <MDBCardText>{data.instagram ? data.instagram : 'Instagram'}</MDBCardText>
                                        </MDBListGroupItem>
                                        <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                            <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                                            <MDBCardText>{data.facebook ? data.facebook : 'Facebook'}</MDBCardText>
                                        </MDBListGroupItem>
                                    </MDBListGroup>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol lg="8">
                            <MDBCard className="mb-4">
                                <MDBCardBody>
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Full Name</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">{data.userName ? data.userName : 'User Name'}</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Email</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">{data.email ? data.email : 'Email'}</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Phone</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">{data.phone ? data.phone : 'Phone'}</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Address</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">{data.address ? data.address : 'Address'}</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </div>
    )
}

export default HomePage;


