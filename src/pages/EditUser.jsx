import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import url from "../components/url.js";
import { Formulario } from './../components/Formulario';

function EditUsers() {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const users = await response.json();
            setData(users.filter(user => user.id == id)[0]);
        };
        fetchData();
    }, []);

    return (
        <>
            <Formulario data={data} title={`Dados: Usuário ${data.id}`} />
        </>
    );
}

export default EditUsers;
