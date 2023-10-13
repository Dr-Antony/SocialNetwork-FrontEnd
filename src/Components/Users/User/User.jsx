import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';

export default function User({ data }) {
    const defaultImageUrl = 'https://img.freepik.com/premium-vector/flat-instagram-icons-and-notifications_619991-50.jpg?size=626&ext=jpg'
    // const { userName, profession, avatarUrl, email, phone } = data;
    return (
        <MDBCol md="9" lg="7" xl="5" className="mt-5">
            <MDBCard style={{ borderRadius: '15px' }}>
                <MDBCardBody className="p-4">
                    <div className="d-flex text-black">
                        <div className="flex-shrink-0">
                            <MDBCardImage
                                style={{ maxWidth: '180px', borderRadius: '10px' }}
                                src={defaultImageUrl}
                                alt='Generic placeholder image'
                                fluid />
                        </div>
                        <div className="flex-grow-1 ms-3">
                            <MDBCardTitle>{data.userName}</MDBCardTitle>
                            <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                                style={{ backgroundColor: '#efefef' }}>
                                <div>
                                    <p className="small text-muted mb-1">Email</p>
                                    <p className="mb-0">{data.email}</p>
                                </div>
                            </div>
                            <div className="d-flex pt-1">
                                <MDBBtn outline className="me-1 flex-grow-1">Chat</MDBBtn>
                                <MDBBtn className="flex-grow-1">Follow</MDBBtn>
                            </div>
                        </div>
                    </div>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    );
}