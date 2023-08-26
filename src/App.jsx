import { Outlet } from "react-router-dom";
import { MenuBar } from "./components/MenuBar";
import { Footer } from "./components/Footer";

const App = () => {
    return (
        <>
            <MenuBar />
            <Outlet />
            <Footer />
        </>
    );
};

export default App;