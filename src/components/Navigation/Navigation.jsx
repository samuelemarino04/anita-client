import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navigation = () => {

    return (
        <Navbar bg="light" data-bs-theme="light" className='mb-5'>
            <Container>
                <Navbar.Brand>Le creazioni di Ani_</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to={'/'} className='nav-link'>Home</Link>
                    <Link to={'/creazioni'} className='nav-link'>Creazioni</Link>
                </Nav>
            </Container>
        </Navbar>
    )

}

export default Navigation