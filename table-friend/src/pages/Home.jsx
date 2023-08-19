import { MenuBar } from "./../components/MenuBar";
function Home() {
    return (
        <>
            <MenuBar />
            <main className="container d-flex flex-column align-items-center justify-content-center altura-total">
                <h1>SEJA BEM-VINDO!!!</h1>
                <h2 className="text-danger">TABLE FRIEND</h2>
            </main>  
        </>
    );
}

export default Home;
