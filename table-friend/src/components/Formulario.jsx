/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { objToString } from "./objToString";

const formatar = (valor) => {
    const isString = typeof valor == "string";
    const isNumber = typeof valor == "number";
    return isString || isNumber ? valor : objToString(valor);
};

const renderDados = (userKeys, user) => {
    return userKeys.map((key, id) => {
        return (
            <Form.Group key={id} className="mb-3" controlId={`fg${id}`}>
                <Form.Label>
                    <b>{key.toUpperCase()}</b>
                </Form.Label>
                <Form.Control
                    type="text"
                    value={formatar(user[key])}
                    onChange={e=>{e}}
                    placeholder="Escreva..."
                    disabled={key=='id'}
                />
            </Form.Group>
        );
    });
};

export const Formulario = (props) => {
    const user = props.data;
    const userKeys = Object.keys(user);
    const navigate = useNavigate();

    const goHome = () => navigate("/usuarios")

    return (
        <div className="container mb-4">
            <h3 className="text-center">EDIÇÃO - USUÁRIO {user.id}</h3>
            <Form className="border border-primary rounded-4 p-4">
                {renderDados(userKeys, user)}
                <div className="row">
                    <div className="col-6">
                        <button
                            className="btn btn-primary col-12"
                            onClick={goHome}
                        >
                            Editar
                        </button>
                    </div>
                    <div className="col-6">
                        <button
                            className="btn btn-danger col-12"
                            onClick={goHome}
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            </Form>
        </div>
    );
};
