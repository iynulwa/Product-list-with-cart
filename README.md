# Frontend Mentor - Product list with cart solution

This is a solution to the [Product list with cart challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

Creating a shopping cart webpage using React

### The challenge

Users should be able to:
- Add items to the cart and remove them
- Increase/decrease the number of items in the cart
- See an order confirmation modal when they click "Confirm Order"
- Reset their selections when they click "Start New Order"
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Live Site URL: [Live webpage on vercel](https://product-list-with-cart-sand-alpha.vercel.app/)

## My process

- Write down the tasks and challenges that might be encountered while working on the project on a piece of paper. Example is making the data in the json file available to every part of the application.
- List out the tech (React, SCSS, Vite) I'll need to make this application function.
- Create the app and applying all the styling that might be necessary. (Here CSS reset is applied, Components are created, Unnecessary folders and files are removed, Dependencies are added, Placeholders are created for parts of the application that will be created dynamically)
- Functionality is added (At this stage, several react hooks and APIs are explored and applied/tested to see which fits the project the most)
- Further CSS styling
- Deployment

### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

- CSS logical properties
- React Context API: Involves the use of two react hooks; createContext and useContext. These hooks are used to make function, data available to every part of the react application without the use of prop drilling.
- useRef: Used to query and manipulate the DOM when using React. The scrollIntoView method can be applied to a component by using this react hook.


```css
button{
  position: absolute;
  inset-inline-start: 50%;
  inset-block-end: 0;
}
```
```js 
// use context API
const cartContext = createContext({});

export const UseCartContext = () => {
  return useContext(cartContext);
}

function getItems(id) {
  return cartItems.find(item => item.id === id)?.quantity || 0 
}

return(
  <cartContext.Provider value={{ getItems }}>
      {children}
  </cartContext.Provider>
)
```

```js
// useRef
const modalRef = useRef(null);

useEffect(() => {
    if(openModal && modalRef.current) {
        modalRef.current.scrollIntoView({behavior: 'smooth'});
    }
}, [openModal])
```

### Continued development

I would like to work on a similar project or a project that extensively uses react context API. 

## Author

- Frontend Mentor - [@iynulwa](https://www.frontendmentor.io/profile/iynulwa)
- Twitter - [@iynulwa](https://www.twitter.com/iynulwa)