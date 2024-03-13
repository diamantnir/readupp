// ADDING PRESSED ATTRIBUTE
var clickedBtn = document.getElementsByTagName("button");
var index,
  l = clickedBtn.length;

const falseToEveryTag = () => {
  for (index = 0; index < l; ++index) {
    clickedBtn[index].setAttribute("aria-pressed", "false");
  }
};
falseToEveryTag();

for (index = 0; index < l; ++index) {
  // console.log(this.id);

  clickedBtn[index].onclick = function () {
    falseToEveryTag();
    clickedBtn[index].setAttribute("aria-pressed", "true");
  };
}
// ADDING PRESSED ATTRIBUTE

// ADDING ROLE TO ANCHOR ATTRIBUTE
var anchors = document.getElementsByTagName("a");
var index,
  l = anchors.length;

for (index = 0; index < l; ++index) {
  anchors[index].setAttribute("role", "link");
}
// ADDING ROLE TO ANCHOR ATTRIBUTE

// ADDING ALT TO IMAGE TAG
var images = document.getElementsByTagName("img");
var index,
  l = images.length;

for (index = 0; index < l; ++index) {
  const altAttribute = images[index]
    .getAttribute("src")
    .split("/")
    .pop()
    .split(".")
    .shift();

  images[index].setAttribute("alt", altAttribute);
}
// ADDING ALT TO IMAGE TAG

// REST ALL
const userType = (type) => {
  if (type === "Private user") {
    document.getElementById("privat-user").style.display = "block";
    document.getElementById("organisation").style.display = "none";
  } else {
    document.getElementById("privat-user").style.display = "none";
    document.getElementById("organisation").style.display = "block";
  }
};

const userSubscription = (type) => {
  if (type === "YES") {
    document.getElementById("subscription_message").style.display = "none";
    document.getElementById("not_organisation").style.display = "block";
    document.querySelector(".focus").classList.remove("focus");
  } else {
    document.getElementById("subscription_message").style.display = "block";
    document.getElementById("not_organisation").style.display = "none";
  }
};

const sidebar = (type) => {
  if (type === "hamburger") {
    document.querySelector(".sidebar_container").style.top = "0%";
  } else {
    document.querySelector(".sidebar_container").style.top = "-100%";
  }
};
// REST ALL
