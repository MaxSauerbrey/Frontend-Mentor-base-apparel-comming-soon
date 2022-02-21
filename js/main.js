const form = document.getElementById("form"),
    email = form[0],
    $text = document.createElement("p"),
    $img = document.createElement("img"),
    $card = document.querySelector(".card__form"),
    $textContent = document.createTextNode("Please Provide a valid email"),
    $input = document.querySelector("input"),
    $fragment = document.createDocumentFragment();

const regExx = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (regExx.email.test(email.value)) {
        if ($input.classList.contains("card__input-email-err")) $input.classList.remove("card__input-email-err");
        if (form.classList.contains("card__form-err")) form.classList.remove("card__form-err");
        $text.removeChild($textContent);
        $card.removeChild($img);
        form.reset();

    } else {
        $img.setAttribute("src", "../images/icon-error.svg");
        $img.setAttribute("alt", "error-form");
        $img.classList.add("card__alert");
        $text.classList.add("card__msg");
        $input.classList.add("card__input-email-err");
        form.classList.add("card__form-err");
        $text.appendChild($textContent);
        $card.appendChild($img);
        $card.appendChild($text);
    }
})