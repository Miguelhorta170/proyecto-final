const btnSignIn = document.getElementById("sign-in");
const btnSignUp = document.getElementById("sign-up");
const formRegister = document.querySelector(".register");
const formLogin = document.querySelector(".login");

btnSignIn.addEventListener("click", (e) => {
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide");
});

btnSignUp.addEventListener("click", (e) => {
    formLogin.classList.add("hide");
    formRegister.classList.remove("hide");
});

const registrationForm = document.getElementById('registerForm');

registrationForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    try {
        const response = await axios.post('http://localhost:9000/api/usuario', {
            name: name,
            email: email,
            password: password
        });

        console.log(response.data);
      
    } catch (error) {
        console.error('Error:', error.message);
    }
});

// Function for login process
/*async function login() {
    const email = document.getElementById('inicioEmailInput').value;
    const password = document.getElementById('iniciopasswordInput').value;

    try {
        const response = await axios.post('http://localhost:9000/api/login', {
            email,
            password
        });

        const { name } = response.data;
        const userInfoDiv = document.getElementById('userInfo');
        userInfoDiv.innerText = `¡Hola, ${name}!`;
    } catch (error) {
        console.error('Error:', error.message);
    }
}*/

const loginForm = document.getElementById('iniciologinForm');
const loginButton = document.getElementById('login-btn');
loginButton.addEventListener('click', (event) => {
    event.preventDefault();
    login();
});






