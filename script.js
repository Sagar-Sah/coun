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





























// Scam Type Section
document.addEventListener('DOMContentLoaded', function () {
    const options = document.querySelectorAll('.option');
    const nextButtons = document.querySelectorAll('.nbtn');
    const backButton = document.querySelectorAll('.get_consultation .btns .cancel');
    const sections = document.querySelectorAll('.get_consultation');
    const popUpSection = document.querySelector('.pop_up');
    const aionButton = document.getElementById('aion');



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
  
  

    // Function to show selected scam type
    function showSelectedScamType() {
        const consultationSection = document.querySelector('.get_consultation.first');
        consultationSection.classList.remove('hidden');
    }

    // Function to handle next button click
    function handleNextButtonClick() {
        console.log('next button is clicked')
        const currentSection = this.closest('.get_consultation');
        const nextSection = currentSection.nextElementSibling;
        currentSection.style.display = 'none'; // Hide current section

        if (nextSection) {
            console.log('if')
            nextSection.style.display = 'block';

        } else {
            console.log('else')
            popUpSection.classList.remove('hidden');
        }
    }

    // Function to handle back button click
    function handleBackButtonClick() {
        const currentSection = this.closest('.get_consultation');
        const prevSection = currentSection.previousElementSibling;
        currentSection.style.display = 'none';
        prevSection.style.display = 'block';
    }

    // Add event listener to select menu options
    options.forEach(function (option) {
        option.addEventListener('click', showSelectedScamType);
    });

    // Add event listener to next buttons
    nextButtons.forEach(function (button) {
        button.addEventListener('click', handleNextButtonClick);
    });

    // Add event listener to back buttons
    backButton.forEach(function (button) {
        button.addEventListener('click', handleBackButtonClick);
    });

    // Add event listener to pop-up cancel button
    const cancelButton = popUpSection.querySelector('.cancel');
    cancelButton.addEventListener('click', function () {
        popUpSection.classList.add('hidden');
    });

    // Add event listener to button with ID "aion"
    aionButton.addEventListener('click', function () {
        const firstSection = document.querySelector('.get_consultation.first');
        firstSection.classList.remove('hidden');
    });

});
document.addEventListener('DOMContentLoaded', function () {
    const aionButton = document.getElementById('aion');
    const firstSection = document.querySelector('.get_consultation.first');
    const conSection = document.querySelector('.get_consultation');
    const closeIcon = document.querySelector('.icon.get_close');
    closeIcon.addEventListener('click', function() {
        conSection.style.display = 'none';
    });
    
    function showFirstConsultationSection() {
        firstSection.style.display = 'block';
    }

    aionButton.addEventListener('click', showFirstConsultationSection);

});
