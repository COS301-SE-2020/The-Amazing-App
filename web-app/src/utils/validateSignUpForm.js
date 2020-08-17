export default function validate(credentials, isReset) {
  let errors = {};

  // Checking if email is not empty
  if (!credentials.email) {
    errors.emailIsEmpty = "Please enter your email address.";
  }

  if (!credentials.username) {
    errors.UsernameIsEmpty = "Please enter your username.";
  }
  // Checking if email format is valid
  if (credentials.email && !/\S+@\S+\.\S+/.test(credentials.email)) {
    errors.emailFormatInvalid = "Your e-mail format doesn't seem right.";
  }

  // Don't check password if user is resetting password
  if (!isReset) {
    // Checking if password is not empty
    if (!credentials.password) {
      errors.passIsEmpty = "Please enter your password.";
    }
    // Checking if password is strong enough
    let strengthCheck = /^(?=.*[A-Z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])(?=.*[0-9])(?=.*[a-z]).{8,250}$/;
    if (credentials.password && !credentials.password.match(strengthCheck))
      errors.passIsStrong = "Please enter a strong password.";
  }

  return errors;
}
