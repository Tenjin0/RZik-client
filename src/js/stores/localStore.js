import {LocaleStore} from "mobx-react-intl"
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import translationsEn from './../../translations/en.js';
import translationsfr from './../../translations/fr.js';
addLocaleData([...en, ...fr]);

var language = 'en';
const localeStore = new LocaleStore(language, {en : translationsEn, fr : translationsfr});
localeStore.value = language

export default localeStore;
