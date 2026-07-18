/* =========================================================
   SUNZET WEBSITE
   script.js
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const buttons =
    document.querySelectorAll("[data-language]");

  const menuButton =
    document.querySelector(".mobile-menu-button");

  const mobileNavigation =
    document.querySelector(".mobile-navigation");

  let currentLanguage =
    localStorage.getItem("sunzet-language") || "no";



  /* =====================================================
     LANGUAGE
  ===================================================== */

  function setLanguage(language) {

    currentLanguage = language;

    localStorage.setItem(
      "sunzet-language",
      language
    );

    const text =
      window.translations[language];



    /* TEXT */

    document
      .querySelectorAll("[data-i18n]")
      .forEach(element => {

        const key =
          element.dataset.i18n;

        if(text[key]){

          element.textContent =
            text[key];

        }

      });



    /* HTML */

    document
      .querySelectorAll("[data-i18n-html]")
      .forEach(element => {

        const key =
          element.dataset.i18nHtml;

        if(text[key]){

          element.innerHTML =
            text[key];

        }

      });



    /* ALT */

    document
      .querySelectorAll("[data-i18n-alt]")
      .forEach(element => {

        const key =
          element.dataset.i18nAlt;

        if(text[key]){

          element.alt =
            text[key];

        }

      });



    /* ARIA */

    document
      .querySelectorAll("[data-i18n-aria]")
      .forEach(element => {

        const key =
          element.dataset.i18nAria;

        if(text[key]){

          element.setAttribute(
            "aria-label",
            text[key]
          );

        }

      });



    /* TITLE */

    document.title =
      text.pageTitle;



    /* META */

    const meta =
      document.getElementById(
        "meta-description"
      );

    if(meta){

      meta.setAttribute(
        "content",
        text.metaDescription
      );

    }



    /* BUTTON STATES */

    buttons.forEach(button => {

      const active =
        button.dataset.language === language;

      button.classList.toggle(
        "is-active",
        active
      );

      button.setAttribute(
        "aria-pressed",
        active
      );

    });

  }



  /* =====================================================
     LANGUAGE BUTTONS
  ===================================================== */

  buttons.forEach(button => {

    button.addEventListener(
      "click",
      () => {

        setLanguage(
          button.dataset.language
        );

      }
    );

  });



  /* =====================================================
     MOBILE MENU
  ===================================================== */

  if(menuButton){

    menuButton.addEventListener(
      "click",
      () => {

        menuButton.classList.toggle(
          "open"
        );

        mobileNavigation.classList.toggle(
          "open"
        );

        const expanded =
          menuButton.classList.contains(
            "open"
          );

        menuButton.setAttribute(
          "aria-expanded",
          expanded
        );

      }
    );

  }



  /* =====================================================
     CLOSE MOBILE MENU
  ===================================================== */

  document
    .querySelectorAll(
      ".mobile-navigation a"
    )
    .forEach(link => {

      link.addEventListener(
        "click",
        () => {

          if(menuButton){

            menuButton.classList.remove(
              "open"
            );

            mobileNavigation.classList.remove(
              "open"
            );

            menuButton.setAttribute(
              "aria-expanded",
              "false"
            );

          }

        }
      );

    });



  /* =====================================================
     INITIALISE
  ===================================================== */

  setLanguage(
    currentLanguage
  );

});
