const isValidEmail = email =>
/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
);

export const handleEmailValidation = email => {
const validEmail = isValidEmail(email);
if (validEmail === false) {
    const message = 'Email должен содержать символ: @'
    return message
}
return validEmail;
}