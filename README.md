# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)

  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![Stats preview component](https://www.dropbox.com/s/blpkahjqgkljzll/fm-stats-preview-card-challenge-desktop.jpg?raw=1)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org) - JS library
- [Create React App](http://create-react-app.dev) - React framework
- [TailwindCSS](https://tailwindcss.com) - For styles

### What I learned

Simple technique to pass HTML elements inside React props
(I added a key to avoid errors, see https://reactjs.org/docs/lists-and-keys.html) :

```jsx
  <PreviewCard
    title={[
      'Get ',
      <span className="text-primary-accent" key="accent">
        insights
      </span>,
      ' that help your business grow.',
    ]}
  >
```

### Useful resources

- [background-blend-mode on CSS-Tricks](https://css-tricks.com/almanac/properties/b/background-blend-mode/) - This helped me to have a better understanding of the different blend mode available in CSS.

## Author

- Website - [Antonin Nhek](https://anhek.dev)
- Frontend Mentor - [@anhek](https://www.frontendmentor.io/profile/anhek)
