// console.log("funciona");
// fetch("http://localhost:3000/api/jwt/login", {
//   method: "POST",
//   body: JSON.stringify({
//     email: "email1@email.com",
//     password: "123456",
//   }),
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then((data) => data.json())
//   .then((data) => {
//     console.log(data);
//     localStorage.setItem("coderhouse", data.token);
    fetch("http://localhost:3000/api/jwt/localStorage", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("coderhouse")}`,
      },
    });
  // });
