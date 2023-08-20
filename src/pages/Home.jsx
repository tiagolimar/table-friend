import { MenuBar } from "./../components/MenuBar"

function Home() {


    return (
        <>
            <MenuBar />
            <main className="container d-flex flex-column align-items-center justify-content-center altura-total">
                <img className="home-img" src="./src/img/table-friend-logo.png" alt="logomarca table friend" />
            </main>
        </>
    );
}

export default Home;
