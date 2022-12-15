import { fileURLToPath } from 'node:url';

import i18n from 'i18next';
import Backend from 'i18next-fs-backend';

const loadPath = fileURLToPath(new URL('{{lng}}/{{ns}}.json', import.meta.url));

export default await i18n.use(Backend).init({
    fallbackLng: 'en',
    ns: ['store'],
    backend: { loadPath }
});
