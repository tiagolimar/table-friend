import { MenuBar } from "../components/MenuBar";
import { Table } from '../components/Table';

function Users() {
    return (
        <>
            <MenuBar />
            <Table url='https://jsonplaceholder.typicode.com/users' />
        </>
    );
}

export default Users;
