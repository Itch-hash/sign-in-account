function handleSignUp(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const foundUser = users.find((user) => user.email === email);

  if (!foundUser) {
    users.push({ name: name, email: email, password: password });
    localStorage.setItem("users", JSON.stringify(users));
    document.getElementById("registered").style.display = "block";
  } else return window.alert("Email is already registered");
}

function handleSignIn(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const foundUser = users.find(
    (user) => user.email == email && user.password == password
  );

  foundUser
    ? window.alert(`Welcome back ${foundUser.name}`)
    : window.alert("Wrong e-mail or password");
}
