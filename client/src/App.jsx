
import "./App.css";
import { useState , useEffect } from "react";
import axios from "axios";
import Footer from "./Components/Footer/Footer";
import Training from "./Components/Training/Training";
import ServicesSection from "./Components/ServicesSection/ServicesSection";
import Navbar from "./Components/Navbar/Navbar";
import HeroPage from "./Components/HeroPage/HeroPage";
import AboutUsSectioon from "./Components/AboutUsSection/AboutUsSection"
import { Routes, Route, Outlet } from "react-router-dom";
import TrainingPage from "./pages/TrainingPage/TrainingPage";
import ServicePage from "./pages/ServicePage/ServicePage";
import AssociateInstitution from "./Components/AssociateInstitution/AssociateInstitution";
import MainMemberPage from "./pages/MemberPage/MainMemberPage";
import LoginPage from "../src/AuthenticationPages/LoginPage/LoginPage"
import Register from "../src/AuthenticationPages/Register/Register"
import Otp from "../src/AuthenticationPages/Otp/Otp"
import {Toaster} from "react-hot-toast";
const App = () => {

  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:4444/get-user", {
          withCredentials: true,
        });
        if (response.status === 200) {
          setUser(response.data.data); // Set the user data properly
        } else {
          setUser(null); // In case of failure
        }
      } catch (error) {
        setUser(null); // In case of an error
        console.error("Failed to fetch user", error);
      }
    };
  
    fetchUser();
  }, []);

  const MainLayout = () => (



    <div className="bg-black min-h-screen px-[10%] overflow-hidden">
      <Navbar user={user} setUser={setUser}/>
      <div >
        <Outlet />
      </div>

      <Footer />
    </div>
  );
  return (

    <div className="overfllow-hidden">
      <Toaster position="top-center"
  reverseOrder={false}
/>
      <div>

        <Routes>
          <Route path="/" element={<MainLayout />}>


            <Route index element={
              <>
                <HeroPage />

                <Training />
                <ServicesSection />
                <AboutUsSectioon />
                <AssociateInstitution />
              </>
            } />


            <Route path="/training" element={<TrainingPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/member" element={<MainMemberPage />} />
            


          </Route>
          <Route path="/login" element={  <div className="bg-black px-[10%]"> <Navbar/> <LoginPage /> </div> } />
            <Route path="/register" element={  <div className="bg-black px-[10%]"> <Navbar/> <Register /> </div> } />


          <Route path="/sendotp" element={<Otp setUser={setUser} />}/>

        </Routes>
      </div>

    </div>


  );
};

export default App;