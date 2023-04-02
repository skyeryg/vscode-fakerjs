export function fakerFactory(locale: string) {
  switch (locale) {
    case 'az':
      return import('@faker-js/faker/locale/az')
    case 'ar':
      return import('@faker-js/faker/locale/ar')
    case 'cz':
      return import('@faker-js/faker/locale/cz')
    case 'de':
      return import('@faker-js/faker/locale/de')
    case 'de_AT':
      return import('@faker-js/faker/locale/de_AT')
    case 'de_CH':
      return import('@faker-js/faker/locale/de_CH')
    case 'en':
      return import('@faker-js/faker/locale/en')
    case 'en_AU':
      return import('@faker-js/faker/locale/en_AU')
    case 'en_AU_ocker':
      return import('@faker-js/faker/locale/en_AU_ocker')
    case 'en_BORK':
      return import('@faker-js/faker/locale/en_BORK')
    case 'en_CA':
      return import('@faker-js/faker/locale/en_CA')
    case 'en_GB':
      return import('@faker-js/faker/locale/en_GB')
    case 'en_IE':
      return import('@faker-js/faker/locale/en_IE')
    case 'en_IND':
      return import('@faker-js/faker/locale/en_IND')
    case 'en_US':
      return import('@faker-js/faker/locale/en_US')
    case 'en_ZA':
      return import('@faker-js/faker/locale/en_ZA')
    case 'es':
      return import('@faker-js/faker/locale/es')
    case 'es_MX':
      return import('@faker-js/faker/locale/es_MX')
    case 'fa':
      return import('@faker-js/faker/locale/fa')
    case 'fi':
      return import('@faker-js/faker/locale/fi')
    case 'fr':
      return import('@faker-js/faker/locale/fr')
    case 'fr_CA':
      return import('@faker-js/faker/locale/fr_CA')
    case 'fr_CH':
      return import('@faker-js/faker/locale/fr_CH')
    case 'ge':
      return import('@faker-js/faker/locale/ge')
    case 'id_ID':
      return import('@faker-js/faker/locale/id_ID')
    case 'it':
      return import('@faker-js/faker/locale/it')
    case 'ja':
      return import('@faker-js/faker/locale/ja')
    case 'ko':
      return import('@faker-js/faker/locale/ko')
    case 'nb_NO':
      return import('@faker-js/faker/locale/nb_NO')
    case 'ne':
      return import('@faker-js/faker/locale/ne')
    case 'nl':
      return import('@faker-js/faker/locale/nl')
    case 'nl_BE':
      return import('@faker-js/faker/locale/nl_BE')
    case 'pl':
      return import('@faker-js/faker/locale/pl')
    case 'pt_BR':
      return import('@faker-js/faker/locale/pt_BR')
    case 'pt_PT':
      return import('@faker-js/faker/locale/pt_PT')
    case 'ro':
      return import('@faker-js/faker/locale/ro')
    case 'ru':
      return import('@faker-js/faker/locale/ru')
    case 'sk':
      return import('@faker-js/faker/locale/sk')
    case 'sv':
      return import('@faker-js/faker/locale/sv')
    case 'tr':
      return import('@faker-js/faker/locale/tr')
    case 'uk':
      return import('@faker-js/faker/locale/uk')
    case 'vi':
      return import('@faker-js/faker/locale/vi')
    case 'zh_CN':
      return import('@faker-js/faker/locale/zh_CN')
    case 'zh_TW':
      return import('@faker-js/faker/locale/zh_TW')
    default:
      return import('@faker-js/faker/locale/en')
  }
}