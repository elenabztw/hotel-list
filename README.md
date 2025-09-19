# List of Hotels (React App)

A simple React application to display a list of hotels with the ability to view/hide full descriptions and remove individual items from array and emptying the entire array.

---

## Features

* Display a list of hotels in New York  
* `Remove` button deletes an individual hotel  
* `Show more / Show less` button toggles the description text  
* `Delete all` button clears the entire list  

---

## Technologies

| File           | Description                                             |
|----------------|---------------------------------------------------------|
| `App.js`       | Main React app logic                                     |
| `App.css`      | Styling for the app                                      |
| `data.js`      | Hotel data array                                         |

## React Features Used

**Functional Component**

App is a React functional component.

Functional components are simpler than class components and allow the use of React Hooks for state and lifecycle features.

**useState Hook**

Used to manage state in functional components:

const [hotels, setHotel] = useState(data);
const [showText, setShowText] = useState(false);


hotels holds the list of hotels.

showText toggles whether the full description is shown.

useState ensures the component re-renders when state changes.

**Event Handling**

Handles user actions like clicks on buttons:

<button onClick={() => removeHotel(id)}>Remove</button>
<button className="btnShow" onClick={() => showTextClick(element)}>

**Array Mapping (map)**

Iterates over the hotels array to render each hotel dynamically:

hotels.map(element => { ... })


**Destructuring Props/State**

Makes code cleaner by extracting properties from objects:

const {id, hotelName, description, image, source, showMore} = element;


**Conditional Rendering**

Shows either the full description or a truncated version based on showMore:

{showMore ? description : description.substring(0, 160) + " ..."}



**Summary:**
This app demonstrates functional components, useState for state management, event handling, dynamic rendering with .map(), conditional rendering, and React’s declarative UI approach.

---

## Usage
On app start, a list of hotels is displayed.

Click Show more to view the full description.

Click Remove to delete a hotel.

Click Delete all to clear the entire list.

<img width="400" height="500" alt="image" src="https://github.com/user-attachments/assets/c9c24fe1-39b8-4009-9968-ad0a7fb6b287" />


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
