# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
- ## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly
   
### Screenshot

Desktop version

![]( /design/mobile-version.png  )

Mobile version

![](/design/desktop-version.png)

### Links

- Solution URL: [Code on Github](https://github.com/MaxSauerbrey/Frontend-Mentor-base-apparel-comming-soon)
- Live Site URL: [Github pages URL](https://maxsauerbrey.github.io/Frontend-Mentor-base-apparel-comming-soon/)

- ## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Sass
- Flexbox
- CSS Grid 
- Mobile-first workflow
- Responsive design
- Javascript

### What I learned

Learned and implemented Sass - variables, mixins. Working with Mobile first workflow is better for faster development. I've been working on DOM manipulation, event handlers and regular expressions.

```js
const form = document.getElementById("form"),
    email = form[0],
    $text = document.createElement("p"),
    $img = document.createElement("img"),
    $card = document.querySelector(".card__form"),
    $textContent = document.createTextNode("Please Provide a valid email"),
    $input = document.querySelector("input");

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
        $img.setAttribute("src", "./images/icon-error.svg");
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
```
### Continued development

In future, I want to work and implement DOM manipulation and CSS grid.

## Author

- Frontend Mentor - [@MaxSauerbrey](https://www.frontendmentor.io/profile/MaxSauerbrey)
