import { HeaderComponents } from "./components/HeaderComponents";

export const Header = ({
    Languages,
    Localization,
    useLanguage,
    activeMenuId,
    setActiveMenuId,
}) => {
    return (
        <header className="Header">
            <nav>
                <ul className="Header-list">
                    <li className="Header-list__logo">
                        <HeaderComponents.Logo
                            Languages={Languages}
                            useLanguage={useLanguage}
                            setActiveMenuId={setActiveMenuId}
                        />
                    </li>
                    <li className="Header-list__menu">
                        <HeaderComponents.Menu
                            Languages={Languages}
                            Localization={Localization}
                            useLanguage={useLanguage}
                            activeMenuId={activeMenuId}
                            setActiveMenuId={setActiveMenuId}
                        />
                    </li>
                </ul>
            </nav>
        </header>
    );
};
