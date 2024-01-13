const form = document.querySelector("#form");
const submit = document.querySelector("submit#submit");
const fullName = document.querySelector("input#name");
const fullEmail = document.querySelector("input#email");
const fullProyect = document.querySelector("input#proyect");
const fullSubject = document.querySelector("input#subject");
const fullMsg = document.querySelector("textarea#msg");

function sendEmail() {
  const bodyMessage = `Full name: ${fullName.value}<br> Email: ${fullEmail.value}<br> Proyect: ${fullProyect.value}<br> Message: ${fullMsg.value}`;

  Email.send({
    SecureToken: "625895ef-224b-4b7c-9532-aa03ddcc7652",
    To: "adriandev334@gmail.com",
    From: "adriandev334@gmail.com",
    Subject: fullSubject.value,
    Body: bodyMessage,
  }).then((message) => {
    if (message === "OK") {
      Swal.fire({
        title: "Succes!",
        text: "Message sent succesfully!",
        icon: "success",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
});
