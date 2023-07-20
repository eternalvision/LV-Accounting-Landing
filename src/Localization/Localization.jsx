import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { Languages } from "./Languages/Languages";

export const Localization = () => {
    const [activeId, setActiveId] = useState(1);
    const { handleLangChange } = useLanguage();
    const Values = Languages.LocalizationButtons();

    return (
        <section className="Localization-buttons">
            {Values.map((val) => (
                <button
                    key={val.id}
                    onClick={() => {
                        handleLangChange(val.textId);
                        setActiveId(val.id);
                    }}
                    className={
                        activeId === val.id
                            ? "activeLanguage"
                            : "inactiveLanguage"
                    }>
                    {val.text}
                </button>
            ))}
        </section>
    );
};
