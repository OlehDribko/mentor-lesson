export default function createMarkup(results) {
    return results
      .map(item => {
        const { _id, title, description, preview, rating } = item;
  
        return `
  <li class="card" data-id="${_id}">
    <img class="card-img" src="${preview}" alt="${title}" />
    <div class="card-body">
      <button class="card-favorit-btn" type="button">
        <svg class="card-favorit-icon" width="22" height="22">
          <use href=""></use>
        </svg>
      </button>
      <h2 class="card-title">${title}</h2>
      <p class="card-text">
        ${description}
      </p>
      <div class="card-content">
        <p class="card-content-rating">
          <span class="card-content-value">${rating}</span
          ><svg class="card-content-icons">
            <use></use>
          </svg>
        </p>
        <button type="button" class="card-content-btn">See recipe</button>
      </div>
    </div>
  </li>
  `;
      })
      .join('');
  }