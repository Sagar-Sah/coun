const listItemsWithOptions = document.querySelectorAll(".list_item");

listItemsWithOptions.forEach((item) => {
  const optionsList = item.querySelector(".options");
  const arrowIcon = item.querySelector(".icon svg");

  item.addEventListener("mouseenter", () => {
    optionsList.style.display = "block";
    arrowIcon.style.transform = "rotate(180deg)";
  });

  item.addEventListener("mouseleave", () => {
    optionsList.style.display = "none";
    arrowIcon.style.transform = "rotate(0deg)";
  });
});

// for drop down

const optionMenus = document.querySelectorAll(".select-menu");

optionMenus.forEach((optionMenu) => {
  const selectBtn = optionMenu.querySelector(".select-btn");
  const sBtn_text = selectBtn.querySelector(".sBtn-text");
  const options = optionMenu.querySelectorAll(".options .option");

  selectBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    optionMenu.classList.toggle("active");
    console.log("Button clicked");
  });

  options.forEach((option) => {
    option.addEventListener("click", (event) => {
      event.preventDefault();
      let selectedOption = option.querySelector(".option-text").innerText;
      sBtn_text.innerText = selectedOption;
      console.log(selectedOption);
      optionMenu.classList.remove("active");
      console.log("Option clicked");
    });
  });

  document.body.addEventListener("click", (event) => {
    if (
      !optionMenu.contains(event.target) &&
      !selectBtn.contains(event.target)
    ) {
      optionMenu.classList.remove("active");
    }
  });
});

// for about more section
const iconSmallElements = document.querySelectorAll(".has-child .icon-small");

iconSmallElements.forEach((iconSmall) => {
  iconSmall.addEventListener("click", function (e) {
    e.preventDefault();
    const parent = this.parentElement;
    if (!parent) return;

    const content = parent.querySelector(".content");
    if (content) {
      content.classList.toggle("visible");
    }

    const icon = this.querySelector("svg");
    if (icon) {
      icon.classList.toggle("rotated");
    }
  });
});







// menubar
document.addEventListener("DOMContentLoaded", function () {
  var menuIcon = document.querySelector(".menuIcon");
  var menuBar = document.querySelector(".menuBar");
  var body = document.querySelector("body");

  menuIcon.addEventListener("click", function () {
    if (menuBar.classList.contains("visible")) {
      menuBar.classList.remove("visible");
      // body.classList.remove("menuBarVisible");
    } else {
      menuBar.classList.add("visible");
      // body.classList.add("menuBarVisible");
    }
  });

  document.addEventListener("click", function (event) {
    if (!menuBar.contains(event.target) && !menuIcon.contains(event.target)) {
      menuBar.classList.remove("visible");
      // body.classList.remove("menuBarVisible");
    }
  });

  menuBar.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});





















document.addEventListener("DOMContentLoaded", function () {
  const getConsultationSection = document.querySelector(".get_consultation");
  const getSubmitButton = document.querySelector(".get_submit button");
  const getCloseButton = document.querySelector(".get_close");
  const options = document.querySelectorAll(".get_consultation .option");

  function openConsultationSection() {
    console.log("Opening consultation section...");
    getConsultationSection.classList.add("active");
  }

  function closeConsultationSection() {
    console.log("Closing consultation section...");
    getConsultationSection.classList.remove("active");
  }

  getSubmitButton.addEventListener("click", function (event) {
    event.preventDefault();
    openConsultationSection();
  });

  getCloseButton.addEventListener("click", function (event) {
    event.preventDefault();
    closeConsultationSection();
  });

  document.addEventListener("click", function (event) {
    if (!getConsultationSection.contains(event.target)) {
      closeConsultationSection();
    }
  });

  options.forEach((option) => {
    option.addEventListener("click", function (event) {
      event.preventDefault();
      console.log("Option clicked:", option.textContent.trim());
      options.forEach((opt) => {
        opt.querySelector("a").classList.remove("active");
      });
      option.querySelector("a").classList.add("active");
    });
  });
});



const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".pop_up");

// Function to show modal and overlay
function showModal() {
  overlay.classList.add("active");
  modal.classList.add("active");
}

// Function to hide modal and overlay
function hideModal() {
  overlay.classList.remove("active");
  modal.classList.remove("active");
}

// Event listeners to show/hide modal
document.querySelector(".cancel").addEventListener("click", hideModal);
document.querySelector(".btn").addEventListener("click", hideModal);

// Show modal when desired (e.g., on button click)
document.querySelector("#openModalButton").addEventListener("click", showModal);
