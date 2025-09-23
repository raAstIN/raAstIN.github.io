'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// testimonials variables
const blogItems = document.querySelectorAll("[data-blog-item]");
const blogModalContainer = document.querySelector("[data-blog-modal-container]");
const blogModalCloseBtn = document.querySelector("[data-blog-modal-close-btn]");
const blogOverlay = document.querySelector("[data-blog-overlay]");

// modal variable
const blogModalImg = document.querySelector("[data-blog-modal-img]");
const blogModalTitle = document.querySelector("[data-blog-modal-title]");
const blogModalCategory = document.querySelector("[data-blog-modal-category]");
const blogModalTime = document.querySelector("[data-blog-modal-time]");
const blogModalDesc = document.querySelector("[data-blog-modal-desc]");

// modal toggle function
const blogModalFunc = function () {
  blogModalContainer.classList.toggle("active");
  blogOverlay.classList.toggle("active");
}

// add click event to all modal items
blogItems.forEach(item => {
  item.addEventListener("click", function () {
    blogModalImg.src = this.querySelector(".blog-banner-box img").src;
    blogModalImg.alt = this.querySelector(".blog-banner-box img").alt;
    blogModalTitle.innerHTML = this.querySelector(".blog-item-title").innerHTML;
    blogModalCategory.innerHTML = this.querySelector(".blog-category").innerHTML;
    blogModalTime.innerHTML = this.querySelector("time").innerHTML;
    blogModalTime.dateTime = this.querySelector("time").dateTime;
    blogModalDesc.innerHTML = this.querySelector(".blog-description").innerHTML;
    blogModalFunc();
  });
});

// add click event to modal close button
blogModalCloseBtn.addEventListener("click", blogModalFunc);
blogOverlay.addEventListener("click", blogModalFunc);

// portfolio modal variables
const portfolioItems = document.querySelectorAll("[data-portfolio-item]");
const portfolioModalContainer = document.querySelector("[data-portfolio-modal-container]");
const portfolioModalCloseBtn = document.querySelector("[data-portfolio-modal-close-btn]");
const portfolioOverlay = document.querySelector("[data-portfolio-overlay]");

// modal variable
const portfolioModalImg = document.querySelector("[data-portfolio-modal-img]");
const portfolioModalTitle = document.querySelector("[data-portfolio-modal-title]");
const portfolioModalCategory = document.querySelector("[data-portfolio-modal-category]");
const portfolioModalDesc = document.querySelector(".portfolio-modal-desc");
const portfolioModalLink = document.querySelector("[data-portfolio-modal-link]");

// modal toggle function
const portfolioModalFunc = function () {
  portfolioModalContainer.classList.toggle("active");
  portfolioOverlay.classList.toggle("active");
}

// add click event to all modal items
portfolioItems.forEach(item => {
  item.addEventListener("click", function () {
    const link = this.dataset.portfolioLink;

    portfolioModalImg.src = this.querySelector(".project-img img").src;
    portfolioModalImg.alt = this.querySelector(".project-img img").alt;
    portfolioModalTitle.innerHTML = this.querySelector(".project-title").innerHTML;
    portfolioModalCategory.innerHTML = this.querySelector(".project-category").innerHTML;
    portfolioModalDesc.innerHTML = this.querySelector(".project-description").innerHTML;

    if (link && link !== '#') {
      portfolioModalLink.href = link;
      portfolioModalLink.classList.remove('disabled');
    } else {
      portfolioModalLink.href = '#';
      portfolioModalLink.classList.add('disabled');
    }
    portfolioModalFunc();
  });
});

// add click event to modal close button
portfolioModalCloseBtn.addEventListener("click", portfolioModalFunc);
portfolioOverlay.addEventListener("click", portfolioModalFunc);

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
    if (selectedValue === "همه موارد") {
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
      pages[j].classList.remove("active");
      navigationLinks[j].classList.remove("active");
    }

    this.classList.add("active");
    const targetPage = document.querySelector(`[data-page="${this.innerHTML}"]`);
    if (targetPage) {
      targetPage.classList.add("active");
    }
    window.scrollTo(0, 0);
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

document.addEventListener('DOMContentLoaded', () => {
  const mainContent = document.querySelector('main');
  const languagePopup = document.querySelector('[data-language-popup]');
  const languageOverlay = document.querySelector('[data-language-overlay]');
  const faBtn = document.querySelector('[data-lang-btn="fa"]');
  const enBtn = document.querySelector('[data-lang-btn="en"]');

  const closePopup = () => {
    languagePopup?.classList.remove('active');
  }

  // Show and animate main content immediately on page load, behind the popup.
  mainContent?.classList.add('loaded');

  if (faBtn) faBtn.addEventListener('click', closePopup);

  if (enBtn) {
    enBtn.addEventListener('click', () => {
      sessionStorage.setItem('langSelected', 'true');
      window.location.href = './en/';
    });
  }
});

// Function to animate counter
const animateValue = (obj, start, end, duration, suffix) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const currentValue = Math.floor(progress * (end - start) + start);
    obj.textContent = currentValue + suffix;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// Scroll reveal functionality
const revealElements = document.querySelectorAll("[data-reveal]");

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const isSkillItem = el.classList.contains('skills-item');

      // Stagger animation for service, timeline, skill and project items
      if (el.classList.contains('service-item') || el.classList.contains('timeline-item') || isSkillItem) {
        const delay = Array.from(el.parentNode.children).indexOf(el) * 100;
        el.style.transitionDelay = `${delay}ms`;
      }

      if (el.classList.contains('project-item')) {
        const delay = Array.from(el.parentNode.children).indexOf(el) * 50; // Faster stagger for projects
        el.style.transitionDelay = `${delay}ms`;
      }

      // Animate progress bars and counters
      if (isSkillItem) {
        const progressFill = el.querySelector('.skill-progress-fill');
        const dataEl = el.querySelector('data');
        progressFill.style.width = progressFill.dataset.progress + '%';
        animateValue(dataEl, 0, parseInt(dataEl.value), 1500, '%');
      }
      el.classList.add("revealed");
      observer.unobserve(el);
    }
  });
}, {
  root: null,
  rootMargin: "0px",
  threshold: 0.02
});

revealElements.forEach(el => revealObserver.observe(el));

// Image loading animation
const portfolioImages = document.querySelectorAll('.project-img img');

portfolioImages.forEach(img => {
  const parent = img.parentElement;
  parent.classList.add('loading');
  if (img.complete) {
    parent.classList.remove('loading');
    parent.classList.add('loaded');
  } else {
    img.addEventListener('load', () => {
      parent.classList.remove('loading');
      parent.classList.add('loaded');
    });
  }
});

// Auto-scrolling clients list
const clientsLists = document.querySelectorAll('.clients-list');

clientsLists.forEach(list => {
  const listContent = Array.from(list.children);
  listContent.forEach(item => {
    const duplicatedItem = item.cloneNode(true);
    duplicatedItem.setAttribute('aria-hidden', true);
    list.appendChild(duplicatedItem);
  });
});

clientsLists.forEach(list => {
  let animationFrameId;
  let isHovering = false;
  let isUserScrolling = false;
  let scrollTimeout;

  function autoScroll() {
    if (!isHovering && !isUserScrolling) {
      list.scrollLeft += 0.5; // Adjust speed here
      if (list.scrollLeft >= list.scrollWidth / 2) {
        list.scrollLeft = 0;
      }
    }
    animationFrameId = requestAnimationFrame(autoScroll);
  }

  list.addEventListener('mouseenter', () => {
    isHovering = true;
  });

  list.addEventListener('mouseleave', () => {
    isHovering = false;
  });

  list.addEventListener('scroll', () => {
    isUserScrolling = true;
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      isUserScrolling = false;
    }, 2000); // Pause for 2 seconds after manual scroll
  });

  autoScroll();
});
