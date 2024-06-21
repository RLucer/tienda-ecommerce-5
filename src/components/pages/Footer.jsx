import React from 'react';

import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
export default function Footer() {
  return (

    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted mt-5'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='md-5 d-none d-lg-block'>
          {/* <span>Get connected with us on social networks:</span> */}
        </div>


      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />

              </h6>
              <p>

                Texto reseña sobre el negocio
              </p>
            </MDBCol>

            <MDBCol md="3" lg="3" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Quienes Somos</h6>
              <p>
                Somos una tienda online, que cada día se esmera para hacer tu experiencia más agradable
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>RRSS</h6>
              <ul className="social-media">
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </li>
        </ul>

            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
        
              <p>
                <MDBIcon icon="phone" className="me-1" /> + 562 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-1" /> + 562 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.10)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='https://github.com/RLucer'>
          Ricardo_Lucero
        </a>
      </div>
    </MDBFooter>
  );
}