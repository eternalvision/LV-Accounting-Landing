import React, { useState } from "react";
import { Components } from "./components/Components.js";
import { Assets } from "./assets/Assets.js";
import { Languages } from "./Localization/Languages/Languages.jsx";
import { LanguageProvider } from "./Localization/LanguageContext.jsx";
import { Localization } from "./Localization/Localization.jsx";
import { useLanguage } from "./Localization/LanguageContext.jsx";

function App() {
    const [activeMenuId, setActiveMenuId] = useState(0);

    return (
        <LanguageProvider>
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
        </LanguageProvider>
    );
}

export default App;
