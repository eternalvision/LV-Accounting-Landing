import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Components } from "./components/Components.js";
import { Assets } from "./assets/Assets.js";
import { Languages } from "./Localization/Languages/Languages.jsx";
import { useLanguage } from "./Localization/LanguageContext.jsx";
import { Localization } from "./Localization/Localization.jsx";
import { DisableLinks } from "./helpers/DisableLinks.js";
// import { useLocalStorageState } from "./helpers/useLocalStorageState.js";

function App() {
    const { selectedLang } = useLanguage();
    const location = useLocation();

    const [activeMenuId, setActiveMenuId] = useState(() => {
        const storedActiveMenuId = parseInt(
            localStorage.getItem("activeMenuId")
        );
        return isNaN(storedActiveMenuId) ? 0 : storedActiveMenuId;
    });

    useEffect(() => {
        const values = Languages.Menu()[selectedLang];
        const activeMenuItem = values.find(
            (val) => val.linkTo === location.pathname
        );
        setActiveMenuId(activeMenuItem ? activeMenuItem.id : 0);
    }, [selectedLang, location.pathname]);

    useEffect(() => {
        localStorage.setItem("activeMenuId", activeMenuId.toString());
    }, [activeMenuId]);

    return (
        <>
            <DisableLinks />
            <Components.Header
                Assets={Assets}
                Languages={Languages}
                Localization={Localization}
                useLanguage={useLanguage}
                activeMenuId={activeMenuId}
                setActiveMenuId={setActiveMenuId}
            />
            <Components.Main
                Assets={Assets}
                Languages={Languages}
                useLanguage={useLanguage}
                activeMenuId={activeMenuId}
                setActiveMenuId={setActiveMenuId}
            />
            <Components.Footer
                Assets={Assets}
                Languages={Languages}
                useLanguage={useLanguage}
                activeMenuId={activeMenuId}
                setActiveMenuId={setActiveMenuId}
            />
        </>
    );
}

export default App;
