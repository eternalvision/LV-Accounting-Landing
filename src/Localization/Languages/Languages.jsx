const Menu = () => {
    return {
        cz: [
            {
                id: 0,
                linkTo: "/",
                text: "Úvod",
            },
            {
                id: 1,
                linkTo: "/services",
                text: "Všechny služby",
            },
            {
                id: 2,
                linkTo: "/accounting-services",
                text: "Účetní služby",
            },
            {
                id: 3,
                linkTo: "/it-services",
                text: "IT služby",
            },
            {
                id: 4,
                linkTo: "/about",
                text: "O nás",
            },
            {
                id: 5,
                linkTo: "/contacts",
                text: "Kontakt",
            },
        ],
        en: [
            {
                id: 0,
                linkTo: "/",
                text: "Home",
            },
            {
                id: 1,
                linkTo: "/services",
                text: "All services",
            },
            {
                id: 2,
                linkTo: "/accounting-services",
                text: "Accounting services",
            },
            {
                id: 3,
                linkTo: "/it-services",
                text: "IT services",
            },
            {
                id: 4,
                linkTo: "/about",
                text: "About Us",
            },
            {
                id: 5,
                linkTo: "/contacts",
                text: "Contact",
            },
        ],
        ru: [
            {
                id: 0,
                linkTo: "/",
                text: "Главная",
            },
            {
                id: 1,
                linkTo: "/services",
                text: "Все услуги",
            },
            {
                id: 2,
                linkTo: "/accounting-services",
                text: "Бухгалтерские услуги",
            },
            {
                id: 3,
                linkTo: "/it-services",
                text: "IT-услуги",
            },
            {
                id: 4,
                linkTo: "/about",
                text: "О нас",
            },
            {
                id: 5,
                linkTo: "/contacts",
                text: "Контакты",
            },
        ],
        ua: [
            {
                id: 0,
                linkTo: "/",
                text: "Головна",
            },
            {
                id: 1,
                linkTo: "/services",
                text: "Всі послуги",
            },
            {
                id: 2,
                linkTo: "/accounting-services",
                text: "Бухгалтерські послуги",
            },
            {
                id: 3,
                linkTo: "/it-services",
                text: "IT-послуги",
            },
            {
                id: 4,
                linkTo: "/about",
                text: "Про нас",
            },
            {
                id: 5,
                linkTo: "/contacts",
                text: "Контакти",
            },
        ],
    };
};

const Logo = () => {
    return {
        cz: [
            {
                id: 0,
                text: "LV Účetnictví S.R.O | LVÚ",
                linkTo: "/",
            },
        ],
        en: [
            {
                id: 0,
                text: "LV Accounting S.R.O | LVA",
                linkTo: "/",
            },
        ],
        ua: [
            {
                id: 0,
                text: "LV Accounting S.R.O | LVA",
                linkTo: "/",
            },
        ],
        ru: [
            {
                id: 0,
                text: "LV Accounting S.R.O | LVA",
                linkTo: "/",
            },
        ],
    };
};

const Title = () => {
    return {
        cz: [
            {
                id: 0,
                text: "Poskytujeme efektivní a individuální účetní a IT služby",
            },
        ],
        en: [
            {
                id: 0,
                text: "We provide efficient and personalized accounting and IT services",
            },
        ],
        ua: [
            {
                id: 0,
                text: "Ми ведемо ефективний та індивідуальний бухгалтерський облік і надаємо IT-послуги",
            },
        ],
        ru: [
            {
                id: 0,
                text: "Мы предоставляем эффективные и индивидуальные бухгалтерские и IT-услуги",
            },
        ],
    };
};

const TitleButtons = () => {
    return {
        cz: [
            {
                id: 4,
                linkTo: "/about",
                text: "PROČ LVÚ ?",
            },
            {
                id: 1,
                linkTo: "/services",
                text: "SLUŽBY",
            },
        ],
        en: [
            {
                id: 4,
                linkTo: "/about",
                text: "WHY LVA ?",
            },
            {
                id: 1,
                linkTo: "/services",
                text: "SERVICES",
            },
        ],
        ua: [
            {
                id: 4,
                linkTo: "/about",
                text: "ЧОМУ LVA ?",
            },
            {
                id: 1,
                linkTo: "/services",
                text: "ПОСЛУГИ",
            },
        ],
        ru: [
            {
                id: 4,
                linkTo: "/about",
                text: "ПОЧЕМУ LVA ?",
            },
            {
                id: 1,
                linkTo: "/services",
                text: "УСЛУГИ",
            },
        ],
    };
};

const LocalizationButtons = () => {
    return [
        { id: 1, text: "CZ", textId: "cz" },
        { id: 2, text: "EN", textId: "en" },
        { id: 3, text: "UA", textId: "ua" },
        { id: 4, text: "RU", textId: "ru" },
    ];
};

export const Languages = {
    Logo,
    Menu,
    Title,
    TitleButtons,
    LocalizationButtons,
};
