const btn = document.getElementById("generateBtn");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
// con este condicional verifico si la cadena esta vacia
    if (firstName === "" || lastName === "") {
        result.textContent = "Por favor ingrese nombre y apellido.";
        result.style.color = "red";// lo colca en rojo
        return;
    }

    // Formatear el email: Primera letra mayúscula y resto minúscula
    const formattedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    const formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

    const email = `${formattedFirstName}.${formattedLastName}@park.edu`;

    result.textContent = email;
    result.style.color = "black";
});