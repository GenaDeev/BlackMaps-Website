import 'server-only'
 
const dictionaries = {
  en: () => import('./dictionaries/es.json').then((module) => module.default),
  nl: () => import('./dictionaries/en.json').then((module) => module.default),
}
 
export const getDictionary = async (locale) => dictionaries[locale]()