export const verifyEmail = (email) => {
  if (!email) {
    return 'Entrez une adresse email';
  }
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(String(email).toLowerCase()) === false) {
    return 'L\'adresse email renseignée est invalide';
  }
  return false;
};

export const verifyPassword = (password) => {
  if (!password) {
    return 'Entrez un mot de passe';
  }
  if (password.length < 8) {
    return 'Le mot de passe doit contenir un minimum de 8 caracteres';
  }
  const hasUpperCase = /[A-Z]/.test(password);
  if (!hasUpperCase) {
    return 'Le mot de passe doit contenir au moins une majuscule';
  }
  const hasNumbers = /\d/.test(password);
  if (!hasNumbers) {
    return 'Le mot de passe doit contenir au moins un chiffre';
  }
  return false;
};

const verify = (email, password) => {
  if (!email || !password) {
    return 'Entrez une adresse email et un mot de passe';
  }
  const error = verifyEmail(email);
  if (error) {
    return error;
  }
  return verifyPassword(password);
};

export default verify;
