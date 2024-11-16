import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import '../Header/Header.css'
// import Banner from "../Banner/Banner";

const Root = () => {
    return (
        <div>
            <div>
                <div>
                    <Header></Header>
                    {/* <Banner></Banner> */}
                </div>
                <div className="max-w-6xl mx-auto min-h-[calc(100vh-292px)]">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;