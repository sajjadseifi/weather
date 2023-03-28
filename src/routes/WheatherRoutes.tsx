import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Next3Days from "../pages/Next3Days";
import Today from "../pages/Today";
import Tomorrow from "../pages/Tomorrow";


const WheatherRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="today" element={<Today />} />
                <Route path="tomorrow" element={<Tomorrow />} />
                <Route path="next3days" element={<Next3Days />} />
                <Route path="*" element={<>Page Not Found</>} />
            </Route>
        </Routes>
    )
}

export default WheatherRoutes;