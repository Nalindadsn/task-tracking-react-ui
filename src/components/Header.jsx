
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate } from "react-router-dom";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import { setUser } from "../redux/features/userSlice";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = ({ notification }) => {
  const dispatch = useDispatch();
  const  {user}  = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        dispatch(showLoading());
        const token = localStorage.getItem("token");
        if (!token) throw new Error("No token found");

        const response = await axios.post(
          "/api/user/getUserData",
          { token },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
        dispatch(hideLoading());

        const { data } = response;
        if (data.success) {
          dispatch(setUser(data.data));
        } else {
          throw new Error(data.message || "Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        localStorage.clear();
        dispatch(hideLoading());
      }
    };

    if (!user) {
      fetchUserData();
    }
  }, [user, dispatch]);


  return (
    <header>
    <Navbar  expand='lg' collapseOnSelect  style={{ backgroundColor: '#333333',color:"white" }}>
      <Container fluid>
        <LinkContainer to='/'  style={{color:"white",marginRight:"10px", } }>
          <Navbar.Brand>
            GARMENT TRACKING
            
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto' style={{alignItems: 'center',}}>
            


          <LinkContainer to='/' style={{
  backgroundColor: '#111', 
  color: 'white', 
  borderRadius: '10px', 
  padding: '10px 20px',
  marginRight: '20px',
  marginBottom: '2px',
  

}}>
                  <Nav.Link>
                     Home 
                  </Nav.Link>
                </LinkContainer>

<LinkContainer to='/list-tasks' style={{
backgroundColor: '#111', 
color: 'white', 
borderRadius: '10px', 
padding: '10px 20px',
marginRight: '20px',
marginBottom: '2px',


}}>
        <Nav.Link>
           Taking tasks 
        </Nav.Link>
      </LinkContainer>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
  );
};

export default Header;
