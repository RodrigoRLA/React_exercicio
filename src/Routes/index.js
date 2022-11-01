import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../Pages/Home";
import { About } from "../Pages/About";
import { NotFound } from "../Pages/NotFound";

export const Root = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quemsomos/:nome" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}