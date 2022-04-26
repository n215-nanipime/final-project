import * as MODEL from "../model/model.js";

function route() {
  let hashTag = window.location.hash;
  let pageName = hashTag.replace("#", "")
  let pageContent = pageName + "Content";

  if (pageName == "") {
    pageContent = "homeContent";
  }

  MODEL.modelPageName(pageContent);
}


// function dynamicListener() {
//   console.log("dynamic");
// }

function initListeners() {
  $(window).on("hashchange",route);
  route();
  
}

$(document).ready(function () {
  initListeners();
});


// function addButtonListeners() {
//     $("nav a").click(function(e) {
//         // the most common for the above event are "e", "evt", and "event"
//         let btnId = e.currentTarget.id;
//         let contentName = btnId + "Content";
//         console.log(contentName);
//         $("#app").html(eval(contentName));
//     });
    
// }

// function init() {
//     $("#app").html(homeContent);
//     addButtonListeners();

// }

// $(document).ready(function () {
//     // let firstName = "Pimentel";
//     init();
// });

// // console.log(firstName);