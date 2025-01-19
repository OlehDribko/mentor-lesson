import { fetchAllRecepie, getPopularRecepies } from './service-api';
import createMarkup from './create-markup';

const refs = {
  btnEl: document.querySelector('.recepise-get-js-btn'),
  listEL: document.querySelector('.list-recept'),
};


refs.btnEl.addEventListener('click', event => {
  fetchAllRecepie().then(data => {
    getPopularRecepies();
    const markup = createMarkup(data);
    refs.listEL.innerHTML = markup;

  });
});
