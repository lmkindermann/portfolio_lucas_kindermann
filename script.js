let currLang = "ptbr";
let lang = document.getElementById("lang");

async function changeLanguage(opt) {
  const response = await fetch("translations.json");
  const data = await response.json();
  document.getElementById("menu1").textContent = data[opt].txt_menu1;
  document.getElementById("menu2").textContent = data[opt].txt_menu2;
  document.getElementById("menu3").textContent = data[opt].txt_menu3;
  document.getElementById("menu4").textContent = data[opt].txt_menu4;
  document.getElementById("menu5").textContent = data[opt].txt_menu5;
  document.getElementById("home-title").innerHTML = data[opt].txt_home_title;
  document.getElementById("about1").textContent = data[opt].txt_about1;
  document.getElementById("about2").textContent = data[opt].txt_about2;
  document.getElementById("about3").textContent = data[opt].txt_about3;
  document.getElementById("about4").textContent = data[opt].txt_about4;
  document.getElementById("services-title").textContent =
    data[opt].txt_services_title;
  document.getElementById("services-description").textContent =
    data[opt].txt_services_description;
  document.getElementById("serviceSW-title").textContent =
    data[opt].txt_serviceSW_title;
  document.getElementById("serviceSW-description").textContent =
    data[opt].txt_serviceSW_description;
  document.getElementById("serviceSE-title").textContent =
    data[opt].txt_serviceSE_title;
  document.getElementById("serviceSE-description").textContent =
    data[opt].txt_serviceSE_description;
  document.getElementById("serviceCI-title").textContent =
    data[opt].txt_serviceCI_title;
  document.getElementById("serviceCI-description").textContent =
    data[opt].txt_serviceCI_description;
  document.getElementById("serviceEA-title").textContent =
    data[opt].txt_serviceEA_title;
  document.getElementById("serviceEA-description").textContent =
    data[opt].txt_serviceEA_description;
  document.getElementById("serviceHW-title").textContent =
    data[opt].txt_serviceHW_title;
  document.getElementById("serviceHW-description").textContent =
    data[opt].txt_serviceHW_description;
  document.getElementById("serviceET-title").textContent =
    data[opt].txt_serviceET_title;
  document.getElementById("serviceET-description").textContent =
    data[opt].txt_serviceET_description;
  document.getElementById("servicePE-title").textContent =
    data[opt].txt_servicePE_title;
  document.getElementById("servicePE-description").textContent =
    data[opt].txt_servicePE_description;
  document.getElementById("projects-title").textContent =
    data[opt].txt_projects_title;
  document.getElementById("projects-description").textContent =
    data[opt].txt_projects_description;
  document.getElementById("projectBC-title").textContent =
    data[opt].txt_projectBC_title;
  document.getElementById("projectBC-description").textContent =
    data[opt].txt_projectBC_description;
  document.getElementById("projectBC-link").textContent =
    data[opt].txt_projectBC_link;
  document.getElementById("projectOV-title").textContent =
    data[opt].txt_projectOV_title;
  document.getElementById("projectOV-description").textContent =
    data[opt].txt_projectOV_description;
  document.getElementById("projectOV-link").textContent =
    data[opt].txt_projectOV_link;
  document.getElementById("projectRP-title").textContent =
    data[opt].txt_projectRP_title;
  document.getElementById("projectRP-description").textContent =
    data[opt].txt_projectRP_description;
  document.getElementById("projectRP-link").textContent =
    data[opt].txt_projectRP_link;
  document.getElementById("skills-title").textContent =
    data[opt].txt_skills_title;
  document.getElementById("skills-description").textContent =
    data[opt].txt_skills_description;
  document.getElementById("skillPL-title").textContent =
    data[opt].txt_skillPL_title;
  document.getElementById("skillPL-item1").textContent =
    data[opt].txt_skillPL_item1;
  document.getElementById("skillPL-item2").textContent =
    data[opt].txt_skillPL_item2;
  document.getElementById("skillPL-item3").textContent =
    data[opt].txt_skillPL_item3;
  document.getElementById("skillPL-item4").textContent =
    data[opt].txt_skillPL_item4;
  document.getElementById("skillPL-item5").textContent =
    data[opt].txt_skillPL_item5;
  document.getElementById("skillFW-title").textContent =
    data[opt].txt_skillFW_title;
  document.getElementById("skillFW-item1").textContent =
    data[opt].txt_skillFW_item1;
  document.getElementById("skillFW-item2").textContent =
    data[opt].txt_skillFW_item2;
  document.getElementById("skillFW-item3").textContent =
    data[opt].txt_skillFW_item3;
  document.getElementById("skillFW-item4").textContent =
    data[opt].txt_skillFW_item4;
  document.getElementById("skillFW-item5").textContent =
    data[opt].txt_skillFW_item5;
  document.getElementById("skillTO-title").textContent =
    data[opt].txt_skillTO_title;
  document.getElementById("skillTO-item1").textContent =
    data[opt].txt_skillTO_item1;
  document.getElementById("skillTO-item2").textContent =
    data[opt].txt_skillTO_item2;
  document.getElementById("skillTO-item3").textContent =
    data[opt].txt_skillTO_item3;
  document.getElementById("skillTO-item4").textContent =
    data[opt].txt_skillTO_item4;
  document.getElementById("skillTO-item5").textContent =
    data[opt].txt_skillTO_item5;
  document.getElementById("skillSS-title").textContent =
    data[opt].txt_skillSS_title;
  document.getElementById("skillSS-item1").textContent =
    data[opt].txt_skillSS_item1;
  document.getElementById("skillSS-item2").textContent =
    data[opt].txt_skillSS_item2;
  document.getElementById("skillSS-item3").textContent =
    data[opt].txt_skillSS_item3;
  document.getElementById("skillSS-item4").textContent =
    data[opt].txt_skillSS_item4;
  document.getElementById("skillSS-item5").textContent =
    data[opt].txt_skillSS_item5;
  document.getElementById("skillPCB-title").textContent =
    data[opt].txt_skillPCB_title;
  document.getElementById("skillPCB-item1").textContent =
    data[opt].txt_skillPCB_item1;
  document.getElementById("skillPCB-item2").textContent =
    data[opt].txt_skillPCB_item2;
  document.getElementById("skillPCB-item3").textContent =
    data[opt].txt_skillPCB_item3;
  document.getElementById("skillPCB-item4").textContent =
    data[opt].txt_skillPCB_item4;
  document.getElementById("skillPCB-item5").textContent =
    data[opt].txt_skillPCB_item5;
  document.getElementById("skillIC-title").textContent =
    data[opt].txt_skillIC_title;
  document.getElementById("skillIC-item1").textContent =
    data[opt].txt_skillIC_item1;
  document.getElementById("skillIC-item2").textContent =
    data[opt].txt_skillIC_item2;
  document.getElementById("skillIC-item3").textContent =
    data[opt].txt_skillIC_item3;
  document.getElementById("skillIC-item4").textContent =
    data[opt].txt_skillIC_item4;
  document.getElementById("skillIC-item5").textContent =
    data[opt].txt_skillIC_item5;
  document.getElementById("contacts-title").textContent =
    data[opt].txt_contacts_title;
  document.getElementById("contacts-description").textContent =
    data[opt].txt_contacts_description;
  document.getElementById("contact1-name").textContent =
    data[opt].txt_contact1_name;
  document.getElementById("contact1-value").textContent =
    data[opt].txt_contact1_value;
  document.getElementById("contact2-name").textContent =
    data[opt].txt_contact2_name;
  document.getElementById("contact2-value").textContent =
    data[opt].txt_contact2_value;
  document.getElementById("contact3-name").textContent =
    data[opt].txt_contact3_name;
  document.getElementById("contact3-value").textContent =
    data[opt].txt_contact3_value;
}

function toggleLanguage() {
  if (currLang === "ptbr") {
    currLang = "enus";
    lang.innerHTML = '<img src="./pictures/us_flag.png" height="20">';
  } else {
    currLang = "ptbr";
    lang.innerHTML = '<img src="./pictures/br_flag.png" height="20">';
  }
  changeLanguage(currLang);
}

let hamb = document.getElementById("hamburger");
const menu = document.getElementById("menu");
hamb.addEventListener("click", function () {
  menu.classList.toggle("ativa");
});

let email = document
  .getElementById("emailLink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "mailto:lmkindermann@gmail.com";
  });

let phone = document
  .getElementById("phoneLink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "tel:+5548991421484";
  });

var url =
  "https://www.bing.com/maps/search?style=r&q=S%C3%A3o+Jos%C3%A9-Santa+Catarina%2C+Brazil";
let map = document
  .getElementById("mapLink")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.open(url, "_blank");
  });
