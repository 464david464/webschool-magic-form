function checkDetails(userName, password) {
  const data = {
    david: "464",
  };
  return data[userName] == password;
}

function init() {
    if(localStorage.isLogin == 'true') {
        setImg()
    }
}

function login() {
  const userName = document.querySelector("#input-username").value;
  const password = document.querySelector("#input-password").value;

  const userNameElement = document.querySelector("#input-username");
  const passwordElement = document.querySelector("#input-password");

  if (userName == "" || password == "") {
    if (userName == "") {
      addRedBorder(userNameElement);
    }
    if (password == "") {
      addRedBorder(passwordElement);
    }
    return;
  }

  if(! checkDetails(userName, password)) {
      document.querySelector('#error').style.display = 'flex';
      return;
  }

  localStorage.setItem('isLogin', 'true')
  localStorage.setItem('userViseted', userName)
  setImg()
}

function setImg() {
    document.querySelector('#div-login').style.display = 'none';
    document.querySelector('#div-success').style.display = 'flex';

    document.querySelector('#p-username').innerHTML = localStorage.getItem('userViseted')
}



function addRedBorder(element) {
  element.classList.add("redBorder");
}

document
  .querySelector("#input-username")
  .addEventListener("input", function (event) {
    event.target.classList.remove("redBorder");
  });
document
  .querySelector("#input-password")
  .addEventListener("input", function (event) {
    event.target.classList.remove("redBorder");
  });

document.querySelector("#btn-login").addEventListener("click", login);
init()
