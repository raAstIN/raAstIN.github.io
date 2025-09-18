'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);
    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let j = 0; j < pages.length; j++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

// تابع ارسال پیام به ربات تلگرام
const sendMessageToTelegram = function (message) {
  const chatId = '101533594'; // شناسه گروه یا چت کاربری مقصد
  const url = `https://api.telegram.org/bot6410878622:AAHEqvMS05MkN_-znobrRsPt3GMvFcbFCXs/sendMessage?chat_id=${chatId}&text=${message}`;

  fetch(url)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => console.log(data))
      .catch(error => console.error('There was a problem with your fetch operation:', error));
}

// اضافه کردن رویداد برای فرم ارسال پیام
form.addEventListener('submit', function (event) {
  event.preventDefault(); // جلوگیری از ارسال فرم به صورت پیش‌فرض

  // دریافت مقادیر فیلدهای فرم
  const name = document.querySelector('input[name="name"]').value;
  const lastname = document.querySelector('input[name="lastname"]').value;
  const phone = document.querySelector('input[name="phone"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  // ساختن پیام برای ارسال به تلگرام
  const telegramMessage = `نام: ${name} , \nنام خانوادگی: ${lastname} , \nشماره تلفن: ${phone} , \nآدرس پست الکترونیکی: ${email} , \nپیام: ${message}`;

  // ارسال پیام به تلگرام
  sendMessageToTelegram(telegramMessage);

  // ارسال داده‌ها به سرور برای ارسال ایمیل
  fetch('/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      lastname: lastname,
      phone: phone,
      email: email,
      message: message
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.status === 'success') {
      console.log('Email sent successfully');
    } else {
      console.error('Error sending email:', data.message);
    }
  })
  .catch(error => console.error('Error:', error));
});


// Language selection popup
document.addEventListener('DOMContentLoaded', () => {
  const languagePopup = document.querySelector('[data-language-popup]');
  const faBtn = document.querySelector('[data-lang-btn="fa"]');
  const enBtn = document.querySelector('[data-lang-btn="en"]');
  const currentLang = localStorage.getItem('language');
  const isEnglishPage = window.location.pathname.includes('/en/');

  if (!currentLang) {
    if (isEnglishPage) {
      window.location.replace('/');
    } else {
      languagePopup.classList.add('active');
    }
  } else if (currentLang === 'en' && !isEnglishPage) {
    window.location.replace('/en/');
  } else if (currentLang === 'fa' && isEnglishPage) {
    window.location.replace('/');
  }

  if (faBtn) {
    faBtn.addEventListener('click', () => {
      localStorage.setItem('language', 'fa');
      window.location.href = '/';
    });
  }

  if (enBtn) {
    enBtn.addEventListener('click', () => {
      localStorage.setItem('language', 'en');
      languagePopup.classList.remove('active');
    });
  }
});
