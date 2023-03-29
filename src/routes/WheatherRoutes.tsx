import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import SignleDay from "../pages/SignleDay/SignleDay";
import Next3Days from "../pages/Next3Days/Next3Days";


const WheatherRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="next3days" element={<Next3Days />} />
                <Route path="day">
                    <Route path="today" element={<SignleDay flag="TODAY" />} />
                    <Route path="tomorrow" element={<SignleDay flag="TOMORROW" />} />
                </Route>
                <Route path="*" element={<>Page Not Found</>} />
            </Route>
        </Routes>
    )
}

export default WheatherRoutes;