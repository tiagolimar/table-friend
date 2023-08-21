import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const MenuBar = () => {
    return (
        <Navbar expand="sm">
            <Container>
                <Navbar.Brand href="/">TableFriend</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="gap-2">
                        <Link className="nav-link rounded-1" to="/">
                            HOME
                        </Link>
                        <Link className="nav-link rounded-1" to="/usuarios">
                            USUÁRIOS
                        </Link>
                        <Link className="nav-link rounded-1" to="/login">
                            LOGIN
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
