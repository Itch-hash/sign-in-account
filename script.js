function handleSignUp() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const foundUser = users.find((user) => user.email === email);
  if (name === "" || email === "" || password === "") {
    return window.alert("Please insert all required data");
  }
  if (!email.includes("@") || !email.includes(".")) {
    return alert("Please check your e-mail and try again!");
  }
  if (!foundUser) {
    users.push({ name: name, email: email, password: password });
    localStorage.setItem("users", JSON.stringify(users));
    document.getElementById("registered").style.display = "block";
  } else return window.alert("Email is already registered");
}

function handleSignIn() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const foundUser = users.find(
    (user) => user.email == email && user.password == password
  );
  if (email === "" || password === "") {
    return window.alert("Please insert all required data");
  }
  if (!email.includes("@") || !email.includes(".")) {
    return alert("Please check your e-mail and try again!");
  }

  foundUser
    ? window.alert(`Welcome back ${foundUser.name}`)
    : window.alert("Wrong e-mail or password");
}
