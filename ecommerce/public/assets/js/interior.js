const body = document.querySelector("body");
const optionMenu = document.querySelector(".dropdown_menu");
const selectBtn = optionMenu.querySelector(".dropdown_btn");
const options = optionMenu.querySelectorAll(".option");
const sBtn_text = optionMenu.querySelector(".profile");
const main = document.getElementById("main");

selectBtn.addEventListener("click", () => {
  if (optionMenu.classList.contains("active")) {
    optionMenu.classList.remove("active");
    main.classList.remove("active");
  } else {
    optionMenu.classList.add("active");
    main.classList.toggle("active");
  }
});

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;
    optionMenu.classList.remove("active");
    main.classList.remove("active");
  });
});

window.addEventListener("scroll", function (event) {
  const bodyRect = document.body.getBoundingClientRect().top;
  // console.log(event);
  // console.log(window.pageYOffset);
  // console.log(this);
  // console.log(this.scrollY);
  if (this.scrollY > 500) {
    document
      .getElementsByClassName("main-header")[0]
      .classList.add("menu-fixed");

    document.body.style.backgroundColor = "#282828";
  } else {
    document
      .getElementsByClassName("main-header")[0]
      .classList.remove("menu-fixed");
    document.body.style.backgroundColor = "#202020";
  }
});

// ---------cart-------

document.getElementById("quantity").addEventListener("change", function () {
  console.log("called");
  mrp = document.getElementById("mrp").innerText;
  var newmrp = mrp.substring(1);
  Amount = parseFloat(newmrp) * this.value;
  document.getElementById("amount_by_quantity").innerHTML = "&#8377;" + Amount;
  console.log(Amount);
  discountPercent = document.getElementById("discount_percent").value;
  DiscountAmountPercent = (Amount * discountPercent) / 100;
  document.getElementById("retail_discount").innerHTML =
    "- &#8377;" + DiscountAmountPercent;
  console.log("DiscountAmountPercent", DiscountAmountPercent);
  DiscountAmount = Amount - DiscountAmountPercent;
  document.getElementById("item_price").innerHTML = "&#8377;" + DiscountAmount;
  console.log(DiscountAmount);
});
