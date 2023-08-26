import { Container } from "react-bootstrap";

export const Footer = () => {
    return (
        <footer className="mt-5">
            <Container>
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                        <a
                            href="https://github.com/tiagolimar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-dark"
                        >
                            GitHub
                        </a>{" "}|{" "}
                        <a
                            href="https://www.linkedin.com/in/tiago-limar/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            LinkedIn
                        </a>
                    </div>
                    <div>Tiago Lima</div>
                    <div>Última Atualização: 26/08/2023</div>
                </div>
            </Container>
        </footer>
    );
};
