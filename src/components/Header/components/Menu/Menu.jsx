import { Link } from "react-router-dom";

export const Menu = ({
    Languages,
    Localization,
    useLanguage,
    activeMenuId,
    setActiveMenuId,
}) => {
    const { selectedLang } = useLanguage();
    const Values = Languages.Menu();

    return (
        <>
            <ul className="Menu-list">
                {Values[selectedLang].map((val) => (
                    <li
                        key={val.id}
                        className={
                            activeMenuId === val.id
                                ? "activeMenu"
                                : "inactiveMenu"
                        }>
                        <Link
                            onClick={() => {
                                setActiveMenuId(val.id);
                            }}
                            to={val.linkTo}>
                            {val.text}
                        </Link>
                    </li>
                ))}
            </ul>
            <Localization />
        </>
    );
};
