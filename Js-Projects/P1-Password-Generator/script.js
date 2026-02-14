// the dom
const passwordEl = document.getElementById("password");
const copyBtn = document.getElementById("copy");
const generateBtn = document.getElementById("generate");
const msg = document.getElementById("msg");

generateBtn.addEventListener("click", () => {
  randomPassword();
  passwordEl.style.border = "1px solid #0f0";
  passwordEl.style.boxShadow = "0 8px 32px 0 #0f0";
  msg.style.display = "none";
});

//   copy

copyBtn.addEventListener("click", () => {
  const inputValue = passwordEl.value;
  console.log(inputValue);
  navigator.clipboard.writeText(inputValue);
  passwordEl.style.border = "1px solid #0f0";
  msg.style.display = "block";
  msg.style.top = "6em";
  if (passwordEl.value === "") {
    msg.textContent = "Please Tap The Generate Button";
    msg.style.boxShadow = "0 8px 12px 0 #f00";
    passwordEl.style.border = "1px solid #f00";
  } else {
    msg.textContent = "Your Password Is Copied";
    msg.style.boxShadow = "0 8px 12px 0 #00";
  }
});

function randomPassword() {
  const char =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789%&?._";

  let password = "";
  for (let i = 0; i < 10; i++) {
    const randomChar = Math.floor(Math.random() * char.length);

    password += char[randomChar];
  }
  return (passwordEl.value = password);
}
