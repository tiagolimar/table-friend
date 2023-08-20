import { MenuBar } from "../components/MenuBar";
import { Table } from '../components/Table';
import url from '../components/url.js'

function Users() {
    return (
        <>
            <MenuBar />
            <Table url={url} />
        </>
    );
}

export default Users;
