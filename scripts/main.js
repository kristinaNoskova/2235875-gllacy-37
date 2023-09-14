// каталог
const buttonCatalog = document.querySelector('.nav-menu__link-catalog');
const catalogMenu = document.querySelector('.catalog-menu');

document.addEventListener('click', (e) => {
  const block = e.composedPath().includes(catalogMenu);
  if (!block) {
    catalogMenu.classList.remove('catalog-menu-opened');
    buttonCatalog.classList.remove('nav-menu__link--active');

  }

  buttonCatalog.addEventListener('click', (evt) => {
    evt.preventDefault();
    catalogMenu.classList.toggle('catalog-menu-opened');
    buttonCatalog.classList.toggle('nav-menu__link--active');
  })
})

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    catalogMenu.classList.remove('catalog-menu-opened');
    buttonCatalog.classList.remove('nav-menu__link--active');
  }
})

// поиск
// const searchInput = document.querySelector('.search__input');
// const searchReset = document.querySelector('.search-reset');
// const searchButton = document.querySelector('.nav-bar__button');
// const searchForm = document.querySelector('.search');

// searchInput.oninput = function () {
//   if (searchInput.value != 0) {
//     searchReset.classList.add('search-reset-visible');
//   } else { searchReset.classList.remove('search-reset-visible'); }
// };

// document.addEventListener('mouseup', (e) => {
//   const click = e.composedPath().includes(searchForm);
//   if (!click) {
//     searchForm.classList.remove('search-active');
//     searchButton.classList.remove('nav-bar__button--active');
//   }

//   searchButton.addEventListener('click', (evt) => {
//     evt.preventDefault();
//     searchForm.classList.toggle('search-active');
//     searchButton.classList.toggle('nav-bar__button--active');
//   })
// })

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape') {
//     searchForm.classList.remove('search-active');
//     searchButton.classList.remove('nav-bar__button--active');

//   }
// });


let list = Array.from(document.querySelectorAll('.nav-bar__item'));

list.shift(0);

for (let item in list) {
  let itemChild = list[item].lastElementChild;
  let btnChild = list[item].firstElementChild;

  btnChild.addEventListener('click', function () {
    itemChild.classList.toggle('popover-active');
    btnChild.classList.toggle('nav-bar__link--active');
  })
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    for (let item in list) {
      let itemChild = list[item].lastElementChild;
      let btnChild = list[item].firstElementChild;

      itemChild.classList.remove('popover-active');
      btnChild.classList.remove('nav-bar__link--active');
    }
  }
})

document.addEventListener('mouseup', (e) => {
  for (let item in list) {
    let itemChild = list[item].lastElementChild;
    let btnChild = list[item].firstElementChild;

    let popover = e.composedPath().includes(itemChild);
    if (!popover) {
      itemChild.classList.remove('popover-active');
      btnChild.classList.remove('nav-bar__link--active');
    }
  }
});


// слайдер
const slider = document.querySelector('.slider');
const page = document.querySelector('.page');
const prevButton = document.querySelectorAll('.slider-prev');
const nextButton = document.querySelectorAll('.slider-next');
const slides = Array.from(slider.querySelectorAll('.slide'));
const slideCount = slides.length;
let slideIndex = 0;


for (const prevBtn of prevButton) {
  prevBtn.addEventListener('click', showPreviousSlide);
}

for (const nextBtn of nextButton) {
  nextBtn.addEventListener('click', showNextSlide);
}

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.classList.add('slide-active');
      page.style.backgroundColor = document.querySelector('.slide-active').dataset.colors;
    } else {
      slide.classList.remove('slide-active');
    }
  });
}

updateSlider();

// модалка
const contactsBtn = document.querySelector('.contacts-text__btn');
const modalCloseButton = document.querySelector('.modal__close-btn');
const modalContainer = document.querySelector('.modal-container');
const modal = document.querySelector('.modal');


contactsBtn.addEventListener('click', () => {
  modalContainer.classList.remove('modal-container-close');
})

modalCloseButton.addEventListener('click', () => {
  modalContainer.classList.add('modal-container-close');
})

modalContainer.addEventListener('click', (e) => {
  const click = e.composedPath().includes(modal);
  if (!click) {
    modalContainer.classList.add('modal-container-close');
  }
})

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    modalContainer.classList.add('modal-container-close');
  }
});
