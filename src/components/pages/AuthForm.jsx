import  { useContext, useRef, useState } from "react";
import { login, signup } from "../../services/user";
import { UserContext } from "../../context/UserContext";
// import { ChildExample } from "../ChildExample";
import { Navigate } from "react-router-dom";
import { ChildExample } from "../ChildExample";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const AuthForm = () => {
  const formRef = useRef(null);
  const [isMember, setIsMember] = useState(true);

  const { token, user, setToken, setUser } = useContext(UserContext)

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const dataObject = Object.fromEntries(formData);


    if (isMember) {

      const userData = await login(dataObject);

      if (userData.message === 'invalid user or password') {
        alert('usuario o password incorrecto')

      } else {
        setToken(userData.detail.token);
        setUser(userData.detail.user.firstname);
      }


    } else {
      const userData = await signup(dataObject);

      if (userData.message === 'User was created successfully') {
        alert('registro correcto, inicia sesion')
        console.log('registro correcto, ahora inicia sesion');
        setIsMember(false);
        formRef.current.reset();
        return <Navigate to="/" />;

      }

    }
    formRef.current.reset(); // Limpiar todos los inputs del formulario

  };



  if (!token) {
    return (
      
        <Container>
        
          <Row>
            <Col></Col>
            <Col><section>
        <div className="Auth-form-container">
          <form className="Auth-form" ref={formRef} onSubmit={onSubmit}>
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">{isMember ? "Inciar sesion" : "Registrarme"}</h3>
             
              {!isMember && (
                <>
                  <div className="form-group mt-3">
                    <label htmlFor="firstname">Nombre</label>
                    <input className="form-control mt-1" id="firstname" type="text" name="firstname"></input>
                  </div>
                  <div>
                    <label htmlFor="lastname">Apellido</label>
                    <input className="form-control mt-1" id="lastname" type="text" name="lastname"></input>
                  </div>
                </>
              )}
              <div className="form-group mt-3">
                <label htmlFor="email">Email</label>
                <input className="form-control mt-1" id="email" type="text" name="email"></input>
              </div>
              <div className="form-group mt-3">
                <label htmlFor="password">Contrasena</label>
                <input className="form-control mt-1" id="password" type="password" name="password"></input>
              </div>
              <button className="btn btn-success mt-3" type="submit">Enviar</button>
              <div className="d-grid gap-2 mt-3">
                <p>
                  {isMember ? "No estas registrado?    " : "Estas registrado?"}
                  <button className="btn btn-primary" onClick={() => setIsMember(!isMember)}>{isMember ? "  Registrarme" : "Inciar sesion"}</button>
                </p>
              </div>
            </div>
          </form>

        </div>
      </section></Col>
            <Col></Col>
          </Row>
        </Container>
      





      
    );
  } else {


    return <Navigate to="/home" />;


  }

};
