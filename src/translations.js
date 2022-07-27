const testaustimeCardLocales = {
  "testaustimecard.title": {
    en: "Testaustime Stats",
    fi: "Testaustime tilastot",
  },
  "testaustimecard.nocodingactivity": {
    en: "No coding activity during this period",
    fi: "Ei koodausaktiviteettiä tällä ajanjaksolla",
  },
};

const availableLocales = Object.keys(testaustimeCardLocales["testaustimecard.title"]);

function isLocaleAvailable(locale) {
  return availableLocales.includes(locale.toLowerCase());
}

module.exports = {
  isLocaleAvailable,
  availableLocales,
  testaustimeCardLocales,
};
