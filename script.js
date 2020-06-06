let names = ["Peti", "Judit", "Gabi", "Tonia"];

names.forEach((name) => {
    if (name === "Tonia") {
    $("ul").append(`<li class="bold">${name}</li>`);
    } else {
        $("ul").append(`<li>${name}</li>`);
    };
});

//or

/* names.forEach((name) => {
    if (name === "Tonia") {
    $("ul").append(`<li><b>${name}<b></li>`);
    } else {
        $("ul").append(`<li>${name}</li>`);
    };
}); */
 


let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

$('body').append(
    `<h1>${additionalBlock.title}</h1>
    <p>${additionalBlock.text}</p>`
);

