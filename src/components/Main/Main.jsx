import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainComponents } from "./components/MainComponents";

export const Main = ({ Assets, Languages, useLanguage, setActiveMenuId }) => {
    return (
        <main className="Main">
            <Routes>
                <Route
                    path="/"
                    element={
                        <MainComponents.Introduction
                            Assets={Assets}
                            Languages={Languages}
                            useLanguage={useLanguage}
                            setActiveMenuId={setActiveMenuId}
                        />
                    }
                />

                <Route
                    path="/services"
                    element={<MainComponents.ALLServices />}
                />
                <Route
                    path="/accounting-services"
                    element={<MainComponents.AccountingServices />}
                />
                <Route
                    path="/it-services"
                    element={<MainComponents.ITServices />}
                />
                <Route path="/about" element={<MainComponents.AboutUs />} />
                <Route path="/contacts" element={<MainComponents.Contacts />} />
            </Routes>
        </main>
    );
};
