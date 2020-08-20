export default function validate(credentials, isReset) {
  let errors = {};

  // Checking if email is not empty
  if (!credentials.email) {
    errors.emailIsEmpty = "Please enter your email address.";
  }
  // Checking if email format is valid
  if (credentials.email && !/\S+@\S+\.\S+/.test(credentials.email)) {
    errors.emailFormatInvalid = "Please enter a valid email address.";
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
      errors.passIsStrong = "You need a stronger password";
  }

  return errors;
}
