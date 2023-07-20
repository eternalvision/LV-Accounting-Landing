import { Link } from "react-router-dom";

export const Logo = ({ Languages, useLanguage, setActiveMenuId }) => {
    const { selectedLang } = useLanguage();
    const Values = Languages.Logo();
    return (
        <>
            {Values[selectedLang].map((val) => (
                <Link
                    onClick={() => {
                        setActiveMenuId(val.id);
                    }}
                    className="Logo"
                    key={val.id}
                    to={val.linkTo}>
                    {val.text}
                </Link>
            ))}
        </>
    );
};
