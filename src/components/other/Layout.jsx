import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
        <div className="flex-grow">
          <Outlet />
        </div>
      <Footer />
    </div>
  );
};

export default Layout;