import React from "react";
import { Route, Routes } from "react-router-dom";
import styles from './Dashboard.module.css';
import NavBar from "../components/header/Header";
import icons from '../images/index.js';

import NewsRoom from "./news/News";
import TeamRoom from "./team/TeamRoom";
import BlogRoom from "./blog/BlogRoom";
import StoreRoom from "./store/StoreRoom";
import CourseeRoom from "./courses/CoursesRoom";
import SpecialtiesRoom from "./specialties/SpecialtiesRoom";
import GalleryRoom from "./gallery/GalleryRoom";
import ServicesRoom from "./services/ServicesRoom";

const Dashboard = () => {
    return(
        <div className={styles.wrapper}>
            <NavBar />
            <img src={icons.img2}/>
            <Routes>
                <Route path="/news" element={<NewsRoom/>}></Route>
                <Route path="/blog" element={<BlogRoom/>}></Route>
                <Route path="/team" element={<TeamRoom/>}></Route>
                <Route path="/store" element={<StoreRoom/>}></Route>
                <Route path="/courses" element={<CourseeRoom/>}></Route>
                <Route path="/specialties" element={<SpecialtiesRoom/>}></Route>
                <Route path="/gallery" element={<GalleryRoom/>}></Route>
                <Route path="/services" element={<ServicesRoom/>}></Route>
            </Routes>
        </div>
    )
}

export default Dashboard