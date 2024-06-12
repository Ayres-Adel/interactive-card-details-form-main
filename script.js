const Number_Card = document.getElementById("Number_Card");
const Name_Card = document.getElementById("Name_Card");
const Date_Card = document.getElementById("Date_Card");
const form_container = document.getElementById("form_container");
const submit_Confirm = document.getElementById("submit_Confirm");
const hidden_Section = document.getElementById("hidden_Section");
const cvc_number = document.getElementById("cvc_number");

const Name_Cart = document.getElementById("Name_Cart");
const Number_Cart = document.getElementById("Number_Cart");
const date_number_MM = document.getElementById("date_number_MM");
const date_number_YY = document.getElementById("date_number_YY");
const year_cart = document.getElementById("year_cart");

const error_Card_Name = document.getElementById("error_Card_Name");
const error_Card_Number = document.getElementById("error_Card_Number");
const error_Card_date_MM = document.getElementById("error_Card_date_MM");
const error_Card_date_YY = document.getElementById("error_Card_date_YY");
const error_Card_date_Year = document.getElementById("error_Card_date_Year");

const hasNumbers = /\d/;
const hasLetters = /[a-zA-Z]/;

function formatCardNumber(number) {
    return number.replace(/\d{4}(?=.)/g, '$& ');
}

function SubmitBtn() {
    let isValid = true;

    // Check for empty fields
    if (!Name_Cart.value) {
        error_Card_Name.textContent = "Can't be blank";
        Name_Cart.style.border = "1px solid red";
        isValid = false;
    } else if (hasNumbers.test(Name_Cart.value)) {
        error_Card_Name.textContent = "Wrong Format, Words only";
        Name_Cart.style.border = "1px solid red";
        isValid = false;
    } else {
        error_Card_Name.textContent = "";
        Name_Cart.style.border = "1px solid hsl(278, 94%, 30%)";
    }

    if (!Number_Cart.value) {
        error_Card_Number.textContent = "Can't be blank";
        Number_Cart.style.border = "1px solid red";
        isValid = false;
    } else if (Number_Cart.value.length !== 16 || hasLetters.test(Number_Cart.value)) {
        error_Card_Number.textContent = "Wrong Format, 16 Numbers only";
        Number_Cart.style.border = "1px solid red";
        isValid = false;
    } else {
        error_Card_Number.textContent = "";
        Number_Cart.style.border = "1px solid hsl(278, 94%, 30%)";
    }

    if (!date_number_MM.value) {
        error_Card_date_MM.textContent = "Can't be blank";
        date_number_MM.style.border = "1px solid red";
        isValid = false;
    } else if (date_number_MM.value.length < 1 || date_number_MM.value.length > 2 || hasLetters.test(date_number_MM.value)) {
        error_Card_date_MM.textContent = "Wrong Format";
        date_number_MM.style.border = "1px solid red";
        isValid = false;
    } else {
        error_Card_date_MM.textContent = "";
        date_number_MM.style.border = "1px solid hsl(278, 94%, 30%)";
    }

    if (!date_number_YY.value) {
        error_Card_date_YY.textContent = "Can't be blank";
        date_number_YY.style.border = "1px solid red";
        isValid = false;
    } else if (date_number_YY.value.length < 1 || date_number_YY.value.length > 2 || hasLetters.test(date_number_YY.value)) {
        error_Card_date_YY.textContent = "Wrong Format";
        date_number_YY.style.border = "1px solid red";
        isValid = false;
    } else {
        error_Card_date_YY.textContent = "";
        date_number_YY.style.border = "1px solid hsl(278, 94%, 30%)";
    }

    if (!year_cart.value) {
        error_Card_date_Year.textContent = "Can't be blank";
        year_cart.style.border = "1px solid red";
        isValid = false;
    } else if (year_cart.value.length !== 3 || hasLetters.test(year_cart.value)) {
        error_Card_date_Year.textContent = "Wrong Format";
        year_cart.style.border = "1px solid red";
        isValid = false;
    } else {
        error_Card_date_Year.textContent = "";
        year_cart.style.border = "1px solid hsl(278, 94%, 30%)";
    }

    if (isValid) {
        form_container.style.display = "none";
        sumbit_Confirm.style.display = "none";
        hidden_Section.style.display = "block";
        Number_Card.textContent = formatCardNumber(Number_Cart.value);
        Name_Card.textContent = Name_Cart.value;
        Date_Card.textContent = `${date_number_MM.value} / ${date_number_YY.value}`;
        cvc_number.textContent = year_cart.value;
    }
}

