import { Link } from "react-router-dom";

export const Introduction = ({
    Assets,
    Languages,
    useLanguage,
    setActiveMenuId,
}) => {
    const { selectedLang } = useLanguage();
    const Values = Languages.TitleButtons();
    const titleValues = Languages.Title();
    return (
        <section className="Introduction-section">
            <ul className="Introduction-list">
                <li>
                    <img src={Assets.mainImage} alt="" />
                </li>
                <li className="Introduction-list__item">
                    <ul className="Introduction-list__title">
                        <li>
                            <section>
                                <h1>
                                    {titleValues[selectedLang].map((val) => (
                                        <span key={val.id}>{val.text}</span>
                                    ))}
                                </h1>
                                <div className="Introduction-buttons">
                                    {Values[selectedLang].map((val) => (
                                        <Link
                                            onClick={() => {
                                                setActiveMenuId(val.id);
                                            }}
                                            key={val.id}
                                            to={val.linkTo}>
                                            <span>{val.text}</span>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    );
};
