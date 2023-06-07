import i18 from 'i18next';
import Backend from 'i18next-http-backend';

import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';

i18
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng : 'ru',
        debug: __IS_DEV__,
        interpolation : {
            escapeValue : false
        }
    })

