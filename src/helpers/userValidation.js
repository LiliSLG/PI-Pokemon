//Expresión Regular Contraseña Fuerte
// var ExpRegPassFuerte=/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;
// var ExpRegPassFuerte2=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
// Expresión	Significado / Uso
// /^/	Indica inicio de línea
// /(?=.*?[A-Z])/	Busca al menos una letra mayúscula
// /(?=.*?[a-z])/	Busca al menos una letra minúscula
// /(?=.*?[0-9])/	Busca al menos un número
// /(?=.*?[#?!@$ %^&*-])/	Busca al menos un caracter especial
// /.{8,}/	Cualquier caracter. Mínimo 8
// /$/	Indica fin de línea
// /^(?=.*?[0-9])$/

// Existan al menos dos dígitos (?:.*\d){2}
// Existan al menos dos mayúsculas (?:.*[A-Z]){2}
// Existan al menos dos minúsculas (?:.*[a-z]){2}

export function validate(userData) {
  // eslint-disable-next-line
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexletrasynumeros = new RegExp(/^(?:.*\d){1}/);
  // const regexCaracteresInvalidos = new RegExp(/^(?:.*?[#?!@$ %^&*-])/);
  const errors = { eMail: "", password: "" };
  if (!regexEmail.test(userData.eMail)) {
    errors.eMail = "Debe ser un correo electrónico";
  }
  if (!userData.eMail.length) {
    errors.eMail = "Se requiere un email";
  }
  if (userData.password.length > 35) {
    errors.eMail = "No puede tener mas de 35 caracteres";
  }
  if (!regexletrasynumeros.test(userData.password)) {
    errors.password = "Debe tener al menos un numero";
  }
  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "Debe tener entre 6 y 10 caracteres";
  }
  if (!userData.password.length) {
    errors.password = "Se requiere un password";
  }
  return errors;
}

export function validateNewUser(userData) {
  // eslint-disable-next-line
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexletrasynumeros = new RegExp(/^(?:.*\d){1}/);
  // const regexCaracteresInvalidos = new RegExp(/^(?:.*?[#?!@$ %^&*-])/);
  const errors = {
    fullName: "",
    eMail: "",
    password: "",
    confirmPassword: "",
  };

  if (!userData.fullName.length) {
    errors.fullName = "Se requiere un nombre";
  }
  if (userData.fullName.length > 35) {
    errors.fullName = "No puede tener mas de 35 caracteres";
  }

  if (!regexEmail.test(userData.eMail)) {
    errors.eMail = "Debe ser un correo electrónico";
  }
  if (!userData.eMail.length) {
    errors.eMail = "Se requiere un email";
  }

  if (userData.password.length > 35) {
    errors.eMail = "No puede tener mas de 35 caracteres";
  }
  if (!regexletrasynumeros.test(userData.password)) {
    errors.password = "Debe tener al menos un numero";
  }
  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "Debe tener entre 6 y 10 caracteres";
  }
  if (!userData.password.length) {
    errors.password = "Se requiere un password";
  }

  if (userData.confirmPassword !== userData.password) {
    errors.confirmPassword = "Las passwords deben ser iguales";
  }
  return errors;
}
