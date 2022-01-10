import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

const refs = {
  searchBox: document.getElementById('search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

const DEBOUNCE_DELAY = 300;

refs.searchBox.addEventListener(
  'input',
  debounce(onInputCountry, DEBOUNCE_DELAY),
);

// function onInputCountry() {
//   const countryName = refs.searchBox.value;
//   if (countryName === '') {
//     refs.countryInfo.innerHTML = '';
//     refs.countryList.innerHTML = '';
//     return;
//   }

//   fetchCountries(countryName)
//     .then(countrys => {
//       if (countrys.length > 10) {
//         Notify.info(
//           'Too many matches found. Please enter a more specific name.',
//         );
//         refs.countryInfo.innerHTML = '';
//         refs.countryList.innerHTML = '';
//         return;
//       }

//       if (countrys.length <= 10) {
//         const listMarkup = countrys.map(country =>
//           countryListTemplate(country),
//         );
//         refs.countryList.innerHTML = listMarkup.join('');
//         refs.countryInfo.innerHTML = '';
//       }

//       if (countrys.length === 1) {
//         const markup = countrys.map(country => countryСardTeemplate(country));
//         refs.countryInfo.innerHTML = markup.join('');
//         refs.countryList.innerHTML = '';
//       }
//     })
//     .catch(error => {
//       Notify.failure('Oops, there is no country with that name');
//       refs.countryInfo.innerHTML = '';
//       refs.countryList.innerHTML = '';
//       return error;
//     });
// }

// fetch('https://restcountries.com/v3.1/name/`${name}`')
//   .then(r => r.json())
//   .then(console.log(message));

// function countryСardTeemplate({ flags, name, capital, population, languages }) {
//   return `
//     <div class="country-info__container">
//       <div class="country-info__wrapper">
//         <img class="country-info__flags" src="${flags.svg}" alt="${
//     name.official
//   }" width="50" />
//         <h2 class="country-info__name">${name.official}</h2>
//       </div>
//       <p class="country-info__capital"><span class="country-info__weight">Capital:</span> ${capital}</p>
//       <p class="country-info__population"><span class="country-info__weight">Population:</span> ${population}</p>
//       <p class="country-info__languages"><span class="country-info__weight">Languages:</span> ${Object.values(
//         languages,
//       )}</p>
//     </div>
//   `;
// }

// export function countryListTemplate({ flags, name }) {
//   return `
//   <li class="country-list__item">
//     <img class="country-list__flags" src="${flags.svg}" alt="${name.official}" width="25" />
//     <h2 class="country-list__name">${name.official}</h2>
//   </li>
//   `;
// }

// function fetchCountries(name) {
//   const url = 'https://restcountries.com/v3.1/name/';
//   const filter = '?fields=name,capital,population,flags,languages';
//   return fetch(`${url}${name}${filter}`).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   });
// }
