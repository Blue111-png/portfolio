
const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); //  stops page refresh

  const formData = new FormData(form);

  //  Send to Formspree manually
  const response = await fetch(form.action, {
    method: "POST",
    body: formData,
    headers: { Accept: "application/json" }
  });

  if (response.ok) {
    alert("Message sent successfully!");
    form.reset();
  } else {
    alert("Oops! Something went wrong.");
  }

});