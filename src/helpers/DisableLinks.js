import { useEffect } from "react";

export const DisableLinks = () => {
    useEffect(() => {
        const handleClick = (event) => {
            if (
                event.target.classList.contains("activeLanguage") ||
                event.target.classList.contains("activeMenu")
            ) {
                event.preventDefault();
            }
        };

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);

    return null;
};
