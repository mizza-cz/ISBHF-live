window.cookieConsentSettings = (function () {
  function detectLanguageFromURL() {
    var langRegex = /^\/(de|en)\//;
    var match = window.location.pathname.match(langRegex);
    if (match) {
      return match[1];
    }
    return "cs";
  }

  var currentLang = detectLanguageFromURL();

  return {
    current_lang: currentLang,
    autoclear_cookies: true,
    theme_css: "/css/cookie-consent.css",
    page_scripts: true,
    languages: {
      cs: {
        consent_modal: {
          title: "This website uses cookies",
          description:
            'These websites use cookies to provide services, personalize ads, and analyze traffic. Some of them are essential for the site to function, but you can decide on others. More about the use of cookies can be found below. You can enable all of them, select individual ones, or reject them all. More information is available anytime on the Cookies Policy page. <button type="button" data-cc="c-settings" class="cc-link">Cookie Settings</button>',
          primary_btn: {
            text: "Accept All",
            role: "accept_all",
          },
          secondary_btn: {
            text: "Essential Only",
            role: "accept_necessary",
          },
        },
        settings_modal: {
          title: "Cookie Settings",
          save_settings_btn: "Save my choices",
          accept_all_btn: "Accept All",
          reject_all_btn: "Reject All",
          close_btn_label: "Close",
          cookie_table_headers: [
            { col1: "Name" },
            { col2: "Domain" },
            { col3: "Expires" },
            { col4: "Description" },
          ],
          blocks: [
            {
              title: "Used Cookies",
              description:
                "These websites use cookies to provide services, personalize ads, and analyze traffic. Some of them are essential for the site to function, but you can decide on others.",
            },
            {
              title: "Functional Cookies – always allowed",
              description:
                "These cookie files are necessary for the basic functions of the site and are therefore always allowed.",
              toggle: {
                value: "necessary",
                enabled: true,
                readonly: true,
              },
            },
            {
              title: "Statistical Cookies",
              description:
                "Statistical cookies enable website owners to track website traffic. They anonymously collect and report information that helps improve the content of the site.",
              toggle: {
                value: "analytics",
                enabled: false,
                readonly: false,
              },
            },
            {
              title: "Marketing Cookies",
              description:
                "Marketing cookies are used to track visitors on websites. The intention is to display ads that are relevant and interesting to the individual user and, therefore, more valuable to publishers and third-party advertisers.",
              toggle: {
                value: "targeting",
                enabled: false,
                readonly: false,
              },
            },
            {
              title: "Social Media",
              description:
                "With the consent of social media cookies, you can connect to your social networks and share content from our website through them. When turned off, content from social networks (Facebook, Twitter, Youtube, and others) will not be displayed.",
              toggle: {
                value: "social",
                enabled: false,
                readonly: false,
              },
            },
          ],
        },
      },

      en: {
        consent_modal: {
          title: "This website uses cookies",
          description:
            'These websites use cookies to provide services, personalize ads, and analyze traffic. Some of them are essential for the site to function, but you can decide on others. More about the use of cookies can be found below. You can enable all of them, select individual ones, or reject them all. More information is available anytime on the Cookies Policy page. <button type="button" data-cc="c-settings" class="cc-link">Cookie Settings</button>',
          primary_btn: {
            text: "Accept All",
            role: "accept_all",
          },
          secondary_btn: {
            text: "Essential Only",
            role: "accept_necessary",
          },
        },
        settings_modal: {
          title: "Cookie Settings",
          save_settings_btn: "Save my choices",
          accept_all_btn: "Accept All",
          reject_all_btn: "Reject All",
          close_btn_label: "Close",
          cookie_table_headers: [
            { col1: "Name" },
            { col2: "Domain" },
            { col3: "Expires" },
            { col4: "Description" },
          ],
          blocks: [
            {
              title: "Used Cookies",
              description:
                "These websites use cookies to provide services, personalize ads, and analyze traffic. Some of them are essential for the site to function, but you can decide on others.",
            },
            {
              title: "Functional Cookies – always allowed",
              description:
                "These cookie files are necessary for the basic functions of the site and are therefore always allowed.",
              toggle: {
                value: "necessary",
                enabled: true,
                readonly: true,
              },
            },
            {
              title: "Statistical Cookies",
              description:
                "Statistical cookies enable website owners to track website traffic. They anonymously collect and report information that helps improve the content of the site.",
              toggle: {
                value: "analytics",
                enabled: false,
                readonly: false,
              },
            },
            {
              title: "Marketing Cookies",
              description:
                "Marketing cookies are used to track visitors on websites. The intention is to display ads that are relevant and interesting to the individual user and, therefore, more valuable to publishers and third-party advertisers.",
              toggle: {
                value: "targeting",
                enabled: false,
                readonly: false,
              },
            },
            {
              title: "Social Media",
              description:
                "With the consent of social media cookies, you can connect to your social networks and share content from our website through them. When turned off, content from social networks (Facebook, Twitter, Youtube, and others) will not be displayed.",
              toggle: {
                value: "social",
                enabled: false,
                readonly: false,
              },
            },
          ],
        },
      },

      de: {
        consent_modal: {
          title: "Diese Website verwendet Cookies",
          description:
            'Diese Websites verwenden Cookies, um Dienste bereitzustellen, Anzeigen zu personalisieren und den Datenverkehr zu analysieren. Einige von ihnen sind für die Funktion der Website unerlässlich, über andere können Sie jedoch entscheiden. Weitere Informationen zur Verwendung von Cookies finden Sie unten. Sie können alle aktivieren, einzelne auswählen oder alle ablehnen. Weitere Informationen finden Sie jederzeit auf der Seite Cookie-Richtlinie. <button type="button" data-cc="c-settings" class="cc-link">Cookie-Einstellungen</button>',
          primary_btn: {
            text: "Alle akzeptieren",
            role: "accept_all",
          },
          secondary_btn: {
            text: "Nur Notwendige",
            role: "accept_necessary",
          },
        },
        settings_modal: {
          title: "Cookie-Einstellungen",
          save_settings_btn: "Meine Auswahl speichern",
          accept_all_btn: "Alle akzeptieren",
          reject_all_btn: "Alle ablehnen",
          close_btn_label: "Schließen",
          cookie_table_headers: [
            { col1: "Name" },
            { col2: "Domain" },
            { col3: "Ablaufdatum" },
            { col4: "Beschreibung" },
          ],
          blocks: [
            {
              title: "Verwendete Cookies",
              description:
                "Diese Websites verwenden Cookies, um Dienste bereitzustellen, Anzeigen zu personalisieren und den Datenverkehr zu analysieren. Einige von ihnen sind für die Funktion der Website unerlässlich, über andere können Sie jedoch entscheiden.",
            },
            {
              title: "Funktionale Cookies – immer erlaubt",
              description:
                "Diese Cookie-Dateien sind für die grundlegenden Funktionen der Website erforderlich und daher immer erlaubt.",
              toggle: {
                value: "necessary",
                enabled: true,
                readonly: true,
              },
            },
            {
              title: "Statistische Cookies",
              description:
                "Statistische Cookies ermöglichen es den Eigentümern von Websites, den Datenverkehr auf der Website zu verfolgen. Sie sammeln und berichten anonym über Informationen, die dazu beitragen, den Inhalt der Website zu verbessern.",
              toggle: {
                value: "analytics",
                enabled: false,
                readonly: false,
              },
            },
            {
              title: "Marketing Cookies",
              description:
                "Marketing-Cookies werden verwendet, um Besucher auf Websites zu verfolgen. Die Absicht ist es, Anzeigen anzuzeigen, die für den einzelnen Benutzer relevant und interessant sind und daher für Herausgeber und Drittanbieter-Werbetreibende wertvoller sind.",
              toggle: {
                value: "targeting",
                enabled: false,
                readonly: false,
              },
            },
            {
              title: "Soziale Medien",
              description:
                "Mit der Zustimmung zu Cookies von sozialen Medien können Sie sich mit Ihren sozialen Netzwerken verbinden und Inhalte von unserer Website über sie teilen. Wenn dies deaktiviert ist, wird kein Inhalt von sozialen Netzwerken (Facebook, Twitter, Youtube und andere) angezeigt.",
              toggle: {
                value: "social",
                enabled: false,
                readonly: false,
              },
            },
          ],
        },
      },
    },
  };
})();