const buttonRegister = document.querySelector("#btn-submit");

const printInfo = () => {
  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastname").value;
  const email = document.querySelector("#email").value;
  const address = document.querySelector("#address").value;
  const city = document.querySelector("#city").value;
  const state = document.querySelector("#state").value;
  const zipCode = document.querySelector("#zip-code").value;

  console.log(firstName, lastName, email, address, city, state, zipCode);
};

buttonRegister.addEventListener("click", printInfo);
