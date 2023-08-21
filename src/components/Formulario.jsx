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
            <Form.Group key={id} className="mb-2" controlId={`fg${id}`}>
                <Form.Label className="form-titulo">
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
        <div className="container mb-4 col-8">
            <h4 className="text-center">Formulário de edição do usuário {user.id}</h4>
            <Form className="border border-success rounded-4 p-2">
                {renderDados(userKeys, user)}
                <div className="row mt-4 mb-2">
                    <div className="col-6">
                        <button
                            className="btn confirme col-12"
                            onClick={goHome}
                        >
                            Confirmar e voltar
                        </button>
                    </div>
                    <div className="col-6">
                        <button
                            className="btn cancel col-12"
                            onClick={goHome}
                        >
                            Cancelar e voltar
                        </button>
                    </div>
                </div>
            </Form>
        </div>
    );
};
