(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileBtnClose = document.querySelector("[data-menu-close]");
  const mobileMenuLink1 = document.querySelector("[data-menu-link1]");
  const mobileMenuLink2 = document.querySelector("[data-menu-link2]");
  const mobileMenuLink3 = document.querySelector("[data-menu-link3]");
  const mobileMenuLink4 = document.querySelector("[data-menu-link4]");
  const mobileMenuLink5 = document.querySelector("[data-menu-link5]");

  menuBtnRef.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });

  mobileBtnClose.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });

mobileMenuLink1.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
});
  
  mobileMenuLink2.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });
  
  mobileMenuLink3.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });
  
  mobileMenuLink4.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });
  
  mobileMenuLink5.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
});
})();