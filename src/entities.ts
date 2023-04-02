interface Method {
  description: string
  params?: object
  callback?: (value: any) => string
}
interface ModuleMethods {
  [methodName: string]: Method
}
export interface Modules {
  [moduleName: string]: ModuleMethods
}

// function dateFormat(value: Date) {
//   return value.toLocaleString()
// }

export const entities: Modules = {
  address: {
    buildingNumber: {
      description: 'Generates a random building number.',
    },
    cardinalDirection: {
      description: 'Returns a random cardinal direction (north, east, south, west).',
    },
    city: {
      description: 'Generates a random localized city name.',
    },
    cityName: {
      description: 'Returns a random localized and existing city name.',
    },
    cityPrefix: {
      description: 'Deprecated',
    },
    citySuffix: {
      description: 'Deprecated',
    },
    country: {
      description: 'Returns a random country name.',
    },
    countryCode: {
      description: 'Returns a random country code.',
    },
    county: {
      description: 'Returns a random localized county.',
    },
    direction: {
      description: 'Returns a random direction (cardinal and ordinal; northwest, east, etc).',
    },
    latitude: {
      description: 'Generates a random latitude.',
    },
    longitude: {
      description: 'Generates a random longitude.',
    },
    nearbyGPSCoordinate: {
      description: 'Generates a random GPS coordinate within the specified radius from the given coordinate.',
    },
    ordinalDirection: {
      description: 'Returns a random ordinal direction (northwest, southeast, etc).',
    },
    secondaryAddress: {
      description: 'Generates a random localized secondary address. This refers to a specific location at a given address such as an apartment or room number.',
    },
    state: {
      description: 'Returns a random localized state from this country.',
    },
    stateAbbr: {
      description: 'Returns a random localized state\'s abbreviated name from this country.',
    },
    street: {
      description: 'Generates a random localized street name.',
    },
    streetAddress: {
      description: 'Generates a random localized street address.',
    },
    streetName: {
      description: 'Returns a random localized street name.',
    },
    streetPrefix: {
      description: 'Deprecated',
    },
    streetSuffix: {
      description: 'Deprecated',
    },
    timeZone: {
      description: 'Returns a random time zone.',
    },
    zipCode: {
      description: 'Generates random zip code from specified format. If format is not specified, the locale\'s zip format is used.',
    },
    zipCodeByState: {
      description: 'Generates random zip code from state abbreviation. If state abbreviation is not specified, a random zip code is generated according to the locale\'s zip format. Only works for locales with postcode_by_state definition. If a locale does not have a postcode_by_state definition, a random zip code is generated according to the locale\'s zip format.',
    },
  },
  animal: {
    bear: {
      description: 'Returns a random bear species.',
    },
    bird: {
      description: 'Returns a random bird species.',
    },
    cat: {
      description: 'Returns a random cat breed.',
    },
    cetacean: {
      description: 'Returns a random cetacean species.',
    },
    cow: {
      description: 'Returns a random cow species.',
    },
    crocodilia: {
      description: 'Returns a random crocodilian species.',
    },
    dog: {
      description: 'Returns a random dog breed.',
    },
    fish: {
      description: 'Returns a random fish species.',
    },
    horse: {
      description: 'Returns a random horse breed.',
    },
    insect: {
      description: 'Returns a random insect species.',
    },
    lion: {
      description: 'Returns a random lion species.',
    },
    rabbit: {
      description: 'Returns a random rabbit species.',
    },
    rodent: {
      description: 'Returns a random rodent breed.',
    },
    snake: {
      description: 'Returns a random snake species.',
    },
    type: {
      description: 'Returns a random animal type.',
    },
  },
  color: {
    cmyk: {
      description: 'Returns a CMYK color.',
    },
    colorByCSSColorSpace: {
      description: 'Returns a random color based on CSS color space specified.',
    },
    cssSupportedFunction: {
      description: 'Returns a random css supported color function name.',
    },
    cssSupportedSpace: {
      description: 'Returns a random css supported color space name.',
    },
    hsl: {
      description: 'Returns an HSL color.',
    },
    human: {
      description: 'Returns a random human readable color name.',
    },
    hwb: {
      description: 'Returns an HWB color.',
    },
    lab: {
      description: 'Returns a LAB (CIELAB) color.',
    },
    lch: {
      description: 'Returns an LCH color. Even though upper bound of\nchroma in LCH color space is theoretically unbounded,\nit is bounded to 230 as anything above will not\nmake a noticeable difference in the browser.',
    },
    rgb: {
      description: 'Returns an RGB color.',
    },
    space: {
      description: 'Returns a random color space name from the worldwide accepted color spaces.',
    },
  },
  commerce: {
    department: {
      description: 'Returns a department inside a shop.',
    },
    price: {
      description: 'Generates a price between min and max (inclusive).',
    },
    product: {
      description: 'Returns a short product name.',
    },
    productAdjective: {
      description: 'Returns an adjective describing a product.',
    },
    productDescription: {
      description: 'Returns a product description.',
    },
    productMaterial: {
      description: 'Returns a material of a product.',
    },
    productName: {
      description: 'Generates a random descriptive product name.',
    },
  },
  company: {
    bs: {
      description: 'Generates a random company bs phrase.',
    },
    bsAdjective: {
      description: 'Returns a random company bs adjective.',
    },
    bsBuzz: {
      description: 'Returns a random company bs buzz word.',
    },
    bsNoun: {
      description: 'Returns a random company bs noun.',
    },
    catchPhrase: {
      description: 'Generates a random business catch phrase.',
    },
    catchPhraseAdjective: {
      description: 'Returns a random catch phrase adjective.',
    },
    catchPhraseDescriptor: {
      description: 'Returns a random catch phrase descriptor.',
    },
    catchPhraseNoun: {
      description: 'Returns a random catch phrase noun.',
    },
    companySuffix: {
      description: 'Returns a random company suffix.',
    },
    name: {
      description: 'Generates a random company name.',
    },
    suffixes: {
      description: 'Returns an array with possible company name suffixes.',
    },
  },
  database: {
    collation: {
      description: 'Returns a random database collation.',
    },
    column: {
      description: 'Returns a random database column name.',
    },
    engine: {
      description: 'Returns a random database engine.',
    },
    mongodbObjectId: {
      description: 'Returns a MongoDB ObjectId string.',
    },
    type: {
      description: 'Returns a random database column type.',
    },
  },
  datatype: {
    array: {
      description: 'Returns an array with random strings and numbers.',
    },
    bigInt: {
      description: 'Returns a BigInt number.',
    },
    boolean: {
      description: 'Returns the boolean value true or false.',
    },
    datetime: {
      description: 'Returns a Date object using a random number of milliseconds since the Unix Epoch (1 January 1970 UTC).',
    },
    float: {
      description: 'Returns a single random floating-point number for the given precision or range and precision.',
    },
    hexadecimal: {
      description: 'Returns a hexadecimal number.',
    },
    json: {
      description: 'Returns a string representing JSON object with 7 pre-defined properties.',
    },
    number: {
      description: 'Returns a single random number between zero and the given max value or the given range with the specified precision. The bounds are inclusive.',
    },
    string: {
      description: 'Returns a string containing UTF-16 chars between 33 and 125 (! to }).',
    },
    uuid: {
      description: 'Returns a UUID v4 (Universally Unique Identifier).',
    },
  },
  date: {
    between: {
      description: 'Generates a random date between the given boundaries.',
    },
    betweens: {
      description: 'Generates n random dates between the given boundaries.',
    },
    birthdate: {
      description: 'Returns a random birthdate.',
    },
    future: {
      description: 'Generates a random date in the future.',
    },
    month: {
      description: 'Returns a random name of a month.',
    },
    past: {
      description: 'Generates a random date in the past.',
    },
    recent: {
      description: 'Generates a random date in the recent past.',
    },
    soon: {
      description: 'Generates a random date in the near future.',
    },
    weekday: {
      description: 'Returns a random day of the week.',
    },
  },
  finance: {
    account: {
      description: 'Generates a random account number.',
    },
    accountName: {
      description: 'Generates a random account name.',
    },
    amount: {
      description: 'Generates a random amount between the given bounds (inclusive).',
    },
    bic: {
      description: 'Generates a random SWIFT/BIC code based on the ISO-9362 format.',
    },
    bitcoinAddress: {
      description: 'Generates a random Bitcoin address.',
    },
    creditCardCVV: {
      description: 'Generates a random credit card CVV.',
    },
    creditCardIssuer: {
      description: 'Returns a random credit card issuer.',
    },
    creditCardNumber: {
      description: 'Generates a random credit card number.',
    },
    currencyCode: {
      description: 'Returns a random currency code. (The short text/abbreviation for the currency (e.g. US Dollar -> USD))',
    },
    currencyName: {
      description: 'Returns a random currency name.',
    },
    currencySymbol: {
      description: 'Returns a random currency symbol.',
    },
    ethereumAddress: {
      description: 'Generates a random Ethereum address.',
    },
    iban: {
      description: 'Generates a random iban.',
    },
    litecoinAddress: {
      description: 'Generates a random Litecoin address.',
    },
    mask: {
      description: 'Generates a random masked number.',
    },
    pin: {
      description: 'Generates a random PIN number.',
    },
    routingNumber: {
      description: 'Generates a random routing number.',
    },
    transactionDescription: {
      description: 'Generates a random transaction description.',
    },
    transactionType: {
      description: 'Returns a random transaction type.',
    },
  },
  git: {
    branch: {
      description: 'Generates a random branch name.',
    },
    commitEntry: {
      description: 'Generates a random commit entry.',
    },
    commitMessage: {
      description: 'Generates a random commit message.',
    },
    commitSha: {
      description: 'Generates a random commit sha (full).',
    },
    shortSha: {
      description: 'Generates a random commit sha (short).',
    },
  },
  hacker: {
    abbreviation: {
      description: 'Returns a random hacker/IT abbreviation.',
    },
    adjective: {
      description: 'Returns a random hacker/IT adjective.',
    },
    ingverb: {
      description: 'Returns a random hacker/IT verb for continuous actions (en: ing suffix; e.g. hacking).',
    },
    noun: {
      description: 'Returns a random hacker/IT noun.',
    },
    phrase: {
      description: 'Generates a random hacker/IT phrase.',
    },
    verb: {
      description: 'Returns a random hacker/IT verb.',
    },
  },

  image: {
    abstract: {
      description: 'Generates a random abstract image url.',
    },
    animals: {
      description: 'Generates a random animal image url.',
    },
    avatar: {
      description: 'Generates a random avatar image url.',
    },
    business: {
      description: 'Generates a random business image url.',
    },
    cats: {
      description: 'Generates a random cat image url.',
    },
    city: {
      description: 'Generates a random city image url.',
    },
    dataUri: {
      description: 'Generates a random data uri containing an svg image.',
    },
    fashion: {
      description: 'Generates a random fashion image url.',
    },
    food: {
      description: 'Generates a random food image url.',
    },
    image: {
      description: 'Generates a random image url from one of the supported categories.',
    },
    imageUrl: {
      description: 'Generates a random image url.',
    },
    nature: {
      description: 'Generates a random nature image url.',
    },
    nightlife: {
      description: 'Generates a random nightlife image url.',
    },
    people: {
      description: 'Generates a random people image url.',
    },
    sports: {
      description: 'Generates a random sports image url.',
    },
    technics: {
      description: 'Generates a random technics image url.',
    },
    transport: {
      description: 'Generates a random transport image url.',
    },
  },
  internet: {
    avatar: {
      description: 'Returns a random avatar url.',
    },
    color: {
      description: 'Generates a random css hex color code in aesthetically pleasing color palette.',
    },
    domainName: {
      description: 'Generates a random domain name.',
    },
    domainSuffix: {
      description: 'Returns a random domain suffix.',
    },
    domainWord: {
      description: 'Generates a random domain word.',
    },
    email: {
      description: 'Generates an email address using the given person\'s name as base.',
    },
    emoji: {
      description: 'Generates a random emoji.',
    },
    exampleEmail: {
      description: 'Generates an email address using an example mail provider using the given person\'s name as base.',
    },
    httpMethod: {
      description: 'Returns a random http method.',
    },
    httpStatusCode: {
      description: 'Generates a random HTTP status code.',
    },
    ip: {
      description: 'Generates a random IPv4 address.',
    },
    ipv4: {
      description: 'Generates a random IPv4 address.',
    },
    ipv6: {
      description: 'Generates a random IPv6 address.',
    },
    mac: {
      description: 'Generates a random mac address.',
    },
    password: {
      description: 'Generates a random password.',
    },
    port: {
      description: 'Generates a random port number.',
    },
    protocol: {
      description: 'Returns a random web protocol. Either http or https.',
    },
    url: {
      description: 'Generates a random url.',
    },
    userAgent: {
      description: 'Generates a random user agent string.',
    },
    userName: {
      description: 'Generates a username using the given person\'s name as base.',
    },
  },
  lorem: {
    lines: {
      description: 'Generates the given number lines of lorem separated by \'\\n\'.',
    },
    paragraph: {
      description: 'Generates a paragraph with at least the given number of sentences.',
    },
    paragraphs: {
      description: 'Generates the given number of paragraphs.',
    },
    sentence: {
      description: 'Generates a space separated list of words beginning a capital letter and ending with a dot.',
    },
    sentences: {
      description: 'Generates the given number of sentences.',
    },
    slug: {
      description: 'Generates a slugified text consisting of the given number of hyphen separated words.',
    },
    text: {
      description: 'Generates a random text based on a random lorem method.',
    },
    word: {
      description: 'Generates a word of a specified length.',
    },
    words: {
      description: 'Generates a space separated list of words.',
    },
  },
  music: {
    genre: {
      description: 'Returns a random music genre.',
    },
    songName: {
      description: 'Returns a random song name.',
    },
  },
  name: {
    findName: {
      description: 'Deprecated',
    },
    firstName: {
      description: 'Returns a random first name.',
    },
    fullName: {
      description: 'Generates a random full name.',
    },
    gender: {
      description: 'Returns a random gender.',
    },
    jobArea: {
      description: 'Generates a random job area.',
    },
    jobDescriptor: {
      description: 'Generates a random job descriptor.',
    },
    jobTitle: {
      description: 'Generates a random job title.',
    },
    jobType: {
      description: 'Generates a random job type.',
    },
    lastName: {
      description: 'Returns a random last name.',
    },
    middleName: {
      description: 'Returns a random middle name.',
    },
    prefix: {
      description: 'Returns a random name prefix.',
    },
    sex: {
      description: 'Returns a random sex.',
    },
    sexType: {
      description: 'Returns a random sex type.',
    },
    suffix: {
      description: 'Returns a random name suffix.',
    },
  },
  phone: {
    imei: {
      description: 'Generates IMEI number.',
    },
    number: {
      description: 'Generates a random phone number.',
    },
    phoneFormats: {
      description: 'Deprecated',
    },
    phoneNumber: {
      description: 'Deprecated',
    },
    phoneNumberFormat: {
      description: 'Deprecated',
    },
  },
  random: {
    alpha: {
      description: 'Generating a string consisting of letters in the English alphabet.',
    },
    alphaNumeric: {
      description: 'Generating a string consisting of alpha characters and digits.',
    },
    locale: {
      description: 'Returns a random locale, that is available in this faker instance. You can use the returned locale with faker.setLocale(result).',
    },
    numeric: {
      description: 'Generates a given length string of digits.',
    },
    word: {
      description: 'Returns random word.',
    },
    words: {
      description: 'Returns string with set of random words.',
    },
  },
  science: {
    chemicalElement: {
      description: 'Returns a random periodic table element.',
    },
    unit: {
      description: 'Returns a random scientific unit.',
    },
  },
  system: {
    commonFileExt: {
      description: 'Returns a commonly used file extension.',
    },
    commonFileName: {
      description: 'Returns a random file name with a given extension or a commonly used extension.',
    },
    commonFileType: {
      description: 'Returns a commonly used file type.',
    },
    cron: {
      description: 'Returns a random cron expression.',
    },
    directoryPath: {
      description: 'Returns a directory path.',
    },
    fileExt: {
      description: 'Returns a file extension.',
    },
    fileName: {
      description: 'Returns a random file name with extension.',
    },
    filePath: {
      description: 'Returns a file path.',
    },
    fileType: {
      description: 'Returns a file type.',
    },
    mimeType: {
      description: 'Returns a mime-type.',
    },
    networkInterface: {
      description: 'Returns a random network interface.',
    },
    semver: {
      description: 'Returns a semantic version.',
    },
  },
  vehicle: {
    bicycle: {
      description: 'Returns a type of bicycle.',
    },
    color: {
      description: 'Returns a vehicle color.',
    },
    fuel: {
      description: 'Returns a fuel type.',
    },
    manufacturer: {
      description: 'Returns a manufacturer name.',
    },
    model: {
      description: 'Returns a vehicle model.',
    },
    type: {
      description: 'Returns a vehicle type.',
    },
    vehicle: {
      description: 'Returns a random vehicle.',
    },
    vin: {
      description: 'Returns a vehicle identification number (VIN).',
    },
    vrm: {
      description: 'Returns a vehicle registration number (Vehicle Registration Mark - VRM)',
    },
  },
  word: {
    adjective: {
      description: 'Returns an adjective of random or optionally specified length.',
    },
    adverb: {
      description: 'Returns an adverb of random or optionally specified length.',
    },
    conjunction: {
      description: 'Returns a conjunction of random or optionally specified length.',
    },
    interjection: {
      description: 'Returns an interjection of random or optionally specified length.',
    },
    noun: {
      description: 'Returns a noun of random or optionally specified length.',
    },
    preposition: {
      description: 'Returns a preposition of random or optionally specified length.',
    },
    verb: {
      description: 'Returns a verb of random or optionally specified length.',
    },
  },
}
