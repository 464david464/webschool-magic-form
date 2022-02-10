<<<<<<< HEAD
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
      document.querySelector('#error').style.display = 'block';
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
=======
function checkCredentials(username, password) {
	const data = {
		elie: '123456',
	};

	return data[username] === password;
}

function init() {
	if (localStorage.isLoggedIn === 'true') {
		displayImage();
	}
}

function login() {
	const username = document.querySelector('#input-username').value;
	const password = document.querySelector('#input-password').value;

	//  case 1: one of the field is empty
	if (username === '' || password === '') {
		if (username === '') {
			addRedBorder(document.querySelector('#input-username'));
		}
		if (password === '') {
			addRedBorder(document.querySelector('#input-password'));
		}
		return;
	}

	//  case 2: username and password are incorrect
	if (!checkCredentials(username, password)) {
		//TODO: display error to user
		document.querySelector('.error-div').style.display = 'block';
		return;
	}

	//  case 3: username and password are correct
	localStorage.setItem('isLoggedIn', 'true');
	localStorage.setItem('username-magic-form', username);
	displayImage();
}

function swapDiv() {
	const none = 'none',
		flex = 'flex';

	const divLogin = document.querySelector('#div-login');
	const divSuccess = document.querySelector('#div-success');
	if (divLogin.style.display === none) {
		divLogin.style.display = flex;
		divSuccess.style.display = none;
	} else {
		divLogin.style.display = none;
		divSuccess.style.display = flex;
	}
}

function displayImage() {
	const divLogin = document.querySelector('#div-login');
	const divSuccess = document.querySelector('#div-success');
	divLogin.style.display = 'none';
	divSuccess.style.display = 'block';

	document.querySelector('#p-username').innerHTML = localStorage.getItem(
		'username-magic-form'
	);
}

function addRedBorder(element) {
	element.classList.add('red-border');
}

document.querySelector('#btn-login').addEventListener('click', login);

document
	.querySelector('#input-username')
	.addEventListener('input', function (event) {
		if (event.target.value !== '') {
			event.target.classList.remove('red-border');
		}
		document.querySelector('.error-div').style.display = 'none';
	});

document
	.querySelector('#input-password')
	.addEventListener('input', function (event) {
		if (event.target.value !== '') {
			event.target.classList.remove('red-border');
		}
		document.querySelector('.error-div').style.display = 'none';
	});

init();
>>>>>>> 3bb8a790676ce27622deb96029bba171eee3a493
