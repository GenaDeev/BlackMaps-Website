"use client"
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function NotFoundTitle() {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const [locale, setLang] = useState();

    useEffect(() => {
        setLang(currentLocale);
    }, [currentLocale]);

    return (
        <>{locale === "es" ? "No se encontró la página" : "Couldn't find page"}</>
    )
}