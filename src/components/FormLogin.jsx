/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Form from "react-bootstrap/Form";

export const FormLogin = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputs.email && inputs.password) {
            alert("Login realizado com sucesso!");
            navigate("/usuarios");
        }else{
            alert("Preencha os campos");
        }
    };

    const navigate = useNavigate();

    return (
        <div className="container mb-4 col-8">
            <h4 className="text-center">Login</h4>
            <Form className="border border-success rounded-4 p-2">
                <Form.Group className="mb-2" controlId="email">
                    <Form.Label className="form-titulo">Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={inputs.email || ""}
                        onChange={handleChange}
                        placeholder="fulano@gmail.com"
                    />
                </Form.Group>
                <Form.Group className="mb-2" controlId="senha">
                    <Form.Label className="form-titulo">Senha</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        value={inputs.password || ""}
                        onChange={handleChange}
                        placeholder="digite..."
                    />
                </Form.Group>

                <div className="col-12 mt-4">
                    <button
                        className="btn confirme col-12"
                        onClick={handleSubmit}
                    >
                        Enviar
                    </button>
                </div>
            </Form>
        </div>
    );
};
