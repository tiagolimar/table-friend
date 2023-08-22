/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

import Form from "react-bootstrap/Form";
import { objToString } from "./objToString";

const formatar = (valor) => {
    const isString = typeof valor == "string";
    const isNumber = typeof valor == "number";
    return isString || isNumber ? valor : objToString(valor);
};

const renderDados = (userKeys, user, inputs, handleChange) => {
    return userKeys.map((key, id) => {
        return (
            <Form.Group key={id} className="mb-2" controlId={`fg${id}`}>
                <Form.Label className="form-titulo">
                    <b>{key.toUpperCase()}</b>
                </Form.Label>
                <Form.Control
                    type="text"
                    name={userKeys[id]}
                    value={inputs[userKeys[id]] || formatar(user[key])}
                    onChange={handleChange}
                    placeholder="Escreva..."
                    disabled={key == "id"}
                />
            </Form.Group>
        );
    });
};

export const Formulario = (props) => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const user = props.data;
    const userKeys = Object.keys(user);
    const navigate = useNavigate();

    const goHome = () => navigate("/usuarios");

    return (
        <div className="container mb-4 col-8">
            <h4 className="text-center">{props.title}</h4>
            <Form className="border border-success rounded-4 p-2">
                {renderDados(userKeys, user, inputs, handleChange)}
                <div className="row mt-4 mb-2">
                    <div className="col-6">
                        <button
                            className="btn confirme col-12"
                            onClick={goHome}
                        >
                            Enviar
                        </button>
                    </div>
                    <div className="col-6">
                        <button className="btn cancel col-12" onClick={goHome}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </Form>
        </div>
    );
};
