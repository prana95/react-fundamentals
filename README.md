# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# React
- React is Open-source javascript lib for building user interface
- SPA, mobile app(react native)

## Reconciliation
- React first creates a new version of all the objects in the Document Object Model (DOM) in the hidden part of the browser called the virtual DOM. It then compares the existing DOM with a new one and determines what is different. That process is called reconciliation. The React DOM object we imported will then take care of applying just the changes, nothing more, to the real DOM

key points
- New Dom is compared to old
- Difference is applied in browser
- with more complex UIs this also work
- Result: faster and better user experience

So to write better code for react with  no cerateElement and all we can use component and jsx to bring structure 

## Components
**A component in React is a JavaScript function that exists in its own file, its own module. Components are dependent on data to function correctly, and that data is called the state.**  In the case of the house list component, the state is an array of house data. And for a checkbox component, the state could be a simple Boolean. It's either checked, true, or unchecked, false. The components function returns the UI of the component. We could do that by writing React.createElement statements, but a special syntax called JSX makes this a lot easier. When the state of a component changes, React will automatically take care of rerendering it by reexecuting the component's function so that the change of the state is visible. The visual appearance is a reflection of the state in the component. Rerendering in React doesn't mean bluntly replacing the complete HTML for it in the browser. React uses reconciliation to determine the difference between the old and the new appearance, and it will instruct the browser to only update what actually was changed, making it very fast and efficient while at the same time delivering a smooth experience for the user. Here are some other reasons the creators of React chose the component model. Reusability. Components allow developers to create reusable UI elements that can be used across different parts of an application. This not only saves time, but also ensures consistency in design and functionality. Modularity. By breaking down the interface into smaller manageable pieces, components promote modularity. Each component can be developed, tested, and maintained independently, which simplifies the overall development process. Separation of concerns. Components help in separating logic from presentation, and this makes it easier to manage the codebase as developers can focus on specific functionalities within individual components without affecting others. Improved readability and maintainability. A structure consisting of components enhances code readability. With clear definitions and responsibilities for each component, it becomes easier for developers to understand and maintain the application's code. And finally, easier testing. Components are generally easier to test due to their modular nature.

- JS function
- Exists in separate file/module
- Maintains state
- Function returns UI using JSX
- when state changes function re-executes
- UI is updataing using reconciliation 

Working with components: Reusability, Modularity, Sepration of concerns, Improved Readability and maintainability, easier testing.

## Components and JSX
JSX = Javascript eXtension
- JSX has to be transformed by a tool called a transpiler to JavaScript. An example of a transpiler is Babel.


- Components are JS finction that reture JSX
- JSX look like HTML but it isn't
- An alternative way to write JS
- JSX has to be  Transated to JS by a tool called Babel
```javascript
//A Components
const Banner = () => <h1 className="Hello">this is a banner</h1>

// inside bable
import { jsx as _jsx } from "react/jsx-runtime";
const Banner = () => /*#__PURE__*/_jsx("h1", {
  className: "Hello",
  children: "this is a banner"
});

//or older version of bable
const Banner = () => /*#__PURE__*/React.createElement("h1", 
    {className: "Hello"},// null si il n'a pas de className
    "this is a banner"
);


```

but what happens next? How does the browser know what to render? Each time the browser has to render a component, a JavaScript library called react‑dom uses the createElement code to generate the actual HTML elements for the browser. React separates its core library from the library that is responsible for rendering components. The latter is called react‑dom for browser applications. 

JSX to Markup: 
<h1 className="Hello">this is a banner</h1>
    |  Transpiler
    v
React.createElement("h1", 
    {className: "Hello"},
    "this is a banner")
    |  React DOM
    v
<h1 className="Hello">this is a banner</h1>

```javascript

//Built in Components
const Banner = () => <h1 className="Hello">this is a banner</h1>
const Greeting = ()=>(
    <div> 
        <Banner />
        <h2 className="highlight">Greetings!</h2>
    </div>
)
// inside bable
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Banner = () => /*#__PURE__*/_jsx("h1", {
  className: "Hello",
  children: "this is a banner"
});
const Greeting = () => /*#__PURE__*/_jsxs("div", {
  children: [/*#__PURE__*/_jsx(Banner, {}), /*#__PURE__*/_jsx("h2", {
    className: "highlight",
    children: "Greetings!"
  })]
});

//or older version of bable
const Greeting = () => /*#__PURE__*/
    React.createElement("div", 
        {className: "Hello"},// null si il n'a pas de className
            React.createElement(Banner,null),// here null is the second element
            React.createElement("h2",{className="highlight"}, "Greeting!")

    );


```

Build-in Components
- Correspond to Dom element
- Different output target use differnet built-in components (for exemple react Native use it specific building Components )
- Are camelCased ( The casing of the names of DOM‑related components built into React is camelCase. They all start with a lowercase letter. Components we create as developers are in PascalCase, where the first letter is a capital letter. )
- Custom components are PascalCased

className are the attribut on the element in React  equivalant to class on HTML, beacsue class is a known name for JS so thats  y we use className insterd of class  

## why tooling is needed
- starting point
- Transform JSX to JS
- Process JS file
- Run developpment server
- Automatically update server
- Create a production build

Options for tooling
- Do it yourself
- Use a ready-to-go developpment env
    - Vite (we are usign this)
    - Next.js

```shell
npm create vite@latest
```
choose react then JS+SWC

SWC = 
- speed web compiler
- Transpiles JSX to JS
- Performance
- Update browser on the fly


Public directory will not be processed by Vite's tooling.  It contains static assets that must retain their exact file names and need to be directly accessible via a URL path.All files in the root of this directory are served at the root URL when the application runs and are simply copied to the root of the dist directory when creating a production build. The src directory is used for assets that are referenced in source code and files that need to be processed, optimized or bundled by Vite. So that's the place to create components. There's also the dist directory that is created when a production build is done and node modules, which contains the downloaded packages that are listed in package.json. Eslint, the included tool that checks the code in the project, runs with certain default settings. These can be customized in the eslint.config.js file. Vite also has a config file. Right now, it is configured with the React plug‑in. And to give an example of what can be configured here, I'm changing the port the built‑in web server runs on to port 3000.

Main.jsx is mainly for bootstrapping, and App is the first real component in our hierarchy.

```javascript
const App= ()=> {
  const [count, setCount] = useState(0)

  return (
    <> 
    //  this element is called fragment and act a root elmetn of this component and it should be there so that there will be no errror. ( To create a parent component in this case, we could just use another div, but that div would eventually be rendered by the browser. This tag is called a fragment, which can act as a parent element that is not rendered in the browser.)
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Globomantics</h1>
      <div className="card"> 
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
```

## Module

- Components are in modules
- JS or JSX files with import and/or export statements
- not specific to react
- Vite relies on them

Modules bring structure in the codebase. Putting every component in its own module makes it easier to maintain components because complex UIs are broken down into smaller parts. They make it easy to reuse code across applications, and they enable encapsulation. Everything that is not exported from a module remains private to the module. React also utilizes modules for performance optimization, loading the code only when accessed by the user. As projects expand, they allow the seamless addition of new features and components, and the self‑contained nature of modules makes them easier to test and debug. They also make collaboration easier because several persons or teams can work on the same application without interfering each other. And the React tooling, Vite in our case, will leverage modules to bundle all separate module files into one big JavaScript file. By examining the order of imports, it can figure out the right order to include the JavaScript code. That will be very hard to accomplish without modules.

Response to use Module
- code structure
- Reusability
- encapsulation
- Performance
- Scalability
- Easier debugging and testing
- collaboration
- tooling like vite Needed for bundling 


## Styling components
Imported CSS
- Applied globally no matter where it is imported
- Developpment builds: css rendered in style element
- Production builds: css bundled in files with a hashed name

### CSS module
- Import Cssfile in a component 
- Css only available in the component 
- css element automatically renamed
- focused CSS
- Avoid scoping issues

## Hooks, Props and State

### Props
Components returns JSX, 
componenet car recive props from another component
it is like incoming 
props value can be set by another component using html like syntaw eg <Banner headerTitle='hello' />
<Component myProp='somevalue'>
                  const Component =(props)=>{
props incoming =>
                    return JSX
                  }
some value can be a string a vatiable, object, array, or a function

Important: Props are read-only, A component should never modify its own props

One of the reasons is that many props are passed on to other components by reference using objects or arrays, for example. Let's say the prop is an object. Because the reference to the object is passed on when a component changes the prop, the object will change for every component that has a reference. These other components have no way to detect that it was changed. To avoid problems around that, in React, we're using a specific pattern. The prop data flow goes one way. Components receiving props are not allowed to change them.


key points
- passing arguments to component
- Using HTML-like attributs syntax
- Receiving component accesses props object
- Allow for better reusability of components

So, to give you a quick recap, props are a way to pass arguments to components. We pass the arguments on by using HTML‑like attribute syntax. The receiving component can then access the prop value by using the props object that is passed into the component's function, and the prop name is a property on the props object. Finally, props greatly enhance the reusability of a component, as you just saw demonstrated.

#### Props-type its been deprecated by the React team, because we can use typescript insted

#### Children prop
you can write like this 
      <Banner>Providing houses all over the worlds</Banner>

and on the Banner component you can use **children** property to access the children element inside the Banner element.
like this 
const Banner = ({children}) =>{
  ...
  {children}
}

if the Banner elemtn has many children like this
<Banner>
  <div>Providing houses all over the worlds</div>
  <div>exemple</div>
</Banner>

the children property has <div>Providing houses all over the worlds</div> and <div>exemple</div>

In fact, you can treat JSX like you treat objects. You can, for example, just declare a variable and put some JSX in. That's fine because in JavaScript, the JSX is just a bunch of objects that are used to render a UI. You can then simply render the JSX wherever you want by using an expression.


const jsx = <h1>HI</h1>

const Banner = () =>{
  {jsx}
}

#### Mapping 

const number = ["one", "two", "three"]
const numberPrefixed  = number.map(n=>"Number "+ n) // ["Number one","Number two","Number three"]


const houses = [
  {
    id: 1,
    address: "12 Valley of Kings, Geneva",
    country: "Switzerland",
    price: 900000,
  },
  {
    id: 2,
    address: "89 Road of Forks, Bern",
    country: "Switzerland",
    price: 500000,
  },
];

<tbody>
    {houses.map(h =>(
        <tr key={h.id}>
            <td>{h.address}</td>
            <td>{h.country}</td>
            <td>{h.price}</td>
        </tr>
    ))}
</tbody>

#### Key prop

You might have noticed that a table row in the HouseList component had this key prop set. That is needed wherever arrays of React elements are created. So why do we need it? Let's say we have two house objects in an array like this. In this version, houses only have an address property. Then I use map to create JSX that will render the objects. What would you expect we had to do if a house is added to the array? The most efficient would be that the rendered house list would remain intact and that only the new item was inserted. But right now there's no way React can link the generated JSX to the item in the array, so it simply doesn't know how to update the list of rendered houses. The only option is to just refresh the whole list. This might not be much of a performance impact with just three items in the array, but what if the list grows to hundreds or thousands? We need something to help React link the array item to the rendered house. That something is the special key prop, the value of which is used internally by React. With the help of this key, React knows that the two existing items were already rendered, and it can now just add a new one. In the house's application, a house object has an ID property, so we can pass the tr a key prop with the ID of the house as its value. So now when a house is added, React will efficiently update the table shown in the browser. Choosing the id property is an obvious choice to uniquely identify the item. But if you don't have the convenience of an id property, you're free to come up with anything unique. If there's nothing to uniquely identify an item, as a last resort, you can use the item index that is provided by the map function. But this can cause problems when the order of items change, so only use this when there are no other options.


the Key={xx.id} on the tr is importat because if i added a new value to the houses React will know that there is key elemnt to the houses array, if the key value is not there React need to refresh all the list to add the newly added object to the array 

choosing a key value
- Use id property if present (on a object),
- Else any combination of properties that is unique
- Last resort: index provide by map function (dont use this if the order of the elemnt on the array change we dont know where is which one)

the Key should be unique

#### Extracting Component

differnt type of usage of props
//one way 
<tbody>
    {/*only element directly inside the call need keys*/}
    {houses.map(h => <HouseRow key={h.id} house={...h}/>)} 
</tbody>


const HouseRow = ({house:{address,country,price}}) => {  //one way is to destructure a deeper level
    return (
        <tr>
            <td>{address}</td>
            <td>{country}</td>
            <td>{price}</td>
        </tr>
    )
}


//another way passinf individual props
<tbody>
    {/*only element directly inside the call need keys*/}
    {houses.map(h => <HouseRow key={h.id} 
    address= {h.adresse}
    country ={h.country}
    prices={h.prices} />)}
</tbody>

const HouseRow = ({address,country,price}) => {  //another  way 
    return (
        <tr>
            <td>{address}</td>
            <td>{country}</td>
            <td>{price}</td>
        </tr>
    )
}

//another way using spread operator in JS

<tbody>
    {/*only element directly inside the call need keys*/}
    {houses.map(h => <HouseRow key={h.id} {...h} />)}   // this will unpack all the properties(element inside the h) of the house object and pass them in as individualprops to HouseRow 
</tbody>

const HouseRow = ({address,country,price}) => {  //another  way 
    return (
        <tr>
            <td>{address}</td>
            <td>{country}</td>
            <td>{price}</td>
        </tr>
    )
}

### Hooks

Hooks play a very important role when working with function components. A hook is a function. The name of the function always has the use prefix. Its purpose is to encapsulate complexity. By simply calling a function, we can use pretty complicated functionality without the need to exactly know how it works. In this way, built‑in hooks make it possible to use React's internal features within function components. In addition to React's built‑in hooks, it is also possible to create your own hooks. And just like components, when we want to use hooks, we have to import them. 


- A function
- start with "use"
- Encapsulates complexity
- Access React's features
- Custom hooks
- Imported

2 Rules of hooks
- Only call hook at the top level
  - They should always be called
  - In the same order
- Only call hooks in function components
  - Or custom hooks
Before we see a hook in action, there are two important rules around hooks you should know. First, hooks should only be called at the top level. This one is known as the first rule of hooks. It means that hooks should always be called. It is forbidden to call them conditionally, wrapping them with an if statement, for example, or call them after an early return in a function. By applying this rule, it is ensured that they will be called in the same order every time the components function is executed. React needs that to make hooks function correctly. The second rule is that hooks may only be called in a function component. Any calls to it outside a function component will result in an error. The only exception is a custom hook, so a custom hook may call other hooks if needed.

### State
Props are set by a parent component. State is data that is kept internally by a component

As we learned, in React, we don't write HTML, unlike many other libraries and frameworks that are about UIs. When we have to render data like this array(array of houses), we write JSX as an instruction on how to render it(the part in tr), and React uses the JSX to generate the HTML. So how can we add a row to the table? We're not writing HTML, so changing the table itself is off the table. Changing the JSX won't help because it is fine as it is. The only way to do it is to add a row to the houses array. It is basically a one‑way data flow. We change the data upstream, and the table that is rendered downstream is ultimately just a reflection of it. But if we add an item to the array,there is no way that React can know the item was added, so the UI won't update, and that's what we want. We need state to fix that.


we use the state hook by calling useState. It is imported from the React library. A hook is a function, and the first parameter of this hook is the initial value of the state. This state's initial value is the houses array. UseState returns an array. The first element in the array is an object that represents the current state. The second is a function that we can use to change the state. We are using array destructuring here to make the first available under the name houses, and the second is called setHouses. You can give them any name you want, but the function is expected to have the set prefix. By calling the set function, React will know that the state was updated, and it will rerender the UI automatically if needed. Now we can refer to this new state in the JSX using houses.

**Important**
cosnt [houses, setHouses] = useState(houseArray)
houseArray = is the init value of the state
useState retuen an arrray
houses = the first elemtn in the array is an object that represents the current state
setHouses = the second is a fucntion that we can use to change the state 
we are using array destructiong here.
By calling the set function, React will know that the state was updated, and it will rerender the UI automatically if needed.


State main take way
- State is internal data managed by a  component 
- Introduction by state hook
- Parameter: initial value
- Returns: array with current value and function to change it (the "set fucntion")
- change the state using the set function only 


## Component Rendering and side effects

Rendering !== updating the browser

The reason is that our App root component uses HouseList, and that causes the HouseList function to fire. That is called rendering. Strictly speaking, in React applications, rendering is not equal to updating the browser. Rendering a component is running the components function. But the updating of the browser is done by React using reconciliation. I've been using the term rendering in both contexts before, but from now on, we're making this clear distinction. 

Rerendering means that the components function is executed again.

When the state of a compoennt changes it is re-rendered


#### React Memo

memo = memoizing
inside HouseRow.jsx

add this line before export default HouseRow;
cosnt HouseRowMem = React.memeo(HouseRow)

and after export default HouseRow;
export {HouseRowMem};

and in the HouseList.jsx 
{houses.map(h => <HouseRow key={h.id} house={h}/>)} need to be changed as {houses.map(h => <HouseRowMem key={h.id} house={h}/>)} but we are not using it becasue it is a small application

When to use React.memo
- when it is faster
- Measure
- Pure functional component 
- render often
- with the same prop value
- JSX isnt trivial

Be aware that React.memo will only shallowly compare a complex object when they are passed in as props. Take a look at this documentation to understand what this means and how to work with that.

#### useEffects or (side) effects

the Effect hook
useEffect(()=>{
  //perform the effect
})

operations are called side effects or just effects in short. Basically, whenever we reach out to something that is not within the realm of React, we have to use an effect because the results are unpredictable and may be unreliable. Examples of effects are interacting with an API. This is an unpredictable operation because the API might not be available or it might return an error instead of the expected data, not something you want in a pure function. Other examples are the use of browser APIs like document and window and using timing functions with setTimeout.

To perform an effect in the function of a component, the effect hook is used. useEffect takes a function as a parameter. This function will be executed automatically after React is done running the component's pure function and the browser has been updated. In the function, the effect is performed. So we can fetch data from an API here,

async/await

Fetch is an asynchronous operation. It returns a promise. So ideally, it should be awaited. But to make that work, the function passed into useEffect must be async. This will make the function return a promise, and useEffect can't work with that. Instead, the call to fetch can be wrapped in an extra function that is async which can then be called. 




useEffect(()=>{
        const fetchHouses = async () => {
            const response = await fetch("https://localhost:4000/house")
            const houses = await response.json()
            setHouses(houses)
        }
        fetchHouses(); // we are calling the fucntion fetchHouses, before it was just declaring
    })

To do that, JavaScript's fetch API can be used to do a GET request to a REST endpoint on the API that will get the house data. Fetch is an asynchronous operation. It returns a promise. So ideally, it should be awaited. But to make that work, the function passed into useEffect must be async. This will make the function return a promise, and useEffect can't work with that. Instead, the call to fetch can be wrapped in an extra function that is async which can then be called. To get to the response data, we can call the JSON function on the response object. This is also an asynchronous operation that we can await. Now guess what we have to do next? Yes, setHouses has to be called to change the house's state to the retrieved houses. We're now calling into an API, but where is it?

important cours: https://app.pluralsight.com/ilx/video-courses/9a3771fa-626e-4708-8634-c49cc8616922/4b5d269c-f9d9-4c3e-9806-ce1374a69d83/e36f10bb-acb4-4470-ae9e-285eb9031758

The solution to this is to instruct React to only run the useEffect function in certain cases. That's done by specifying a dependency array. In the component on this slide, we use the counter state again. We're using it inside useEffect to set the document.title. Question, do we need the effect to run every time a component rerenders? No, just when the component is initially rendered and when the counter changes. To make that happen, we pass a dependency array as the second parameter to useEffect like this. But in the case of the effect in HouseList, there is no dependency. All we want is that the effect function is executed only once, just when the component initially renders. To make that happen, we can just specify an empty dependency array. 

important cours: https://app.pluralsight.com/ilx/video-courses/9a3771fa-626e-4708-8634-c49cc8616922/4b5d269c-f9d9-4c3e-9806-ce1374a69d83/e36f10bb-acb4-4470-ae9e-285eb9031758
The solution to this is to instruct React to only run the useEffect function in certain cases. That's done by specifying a dependency array. In the component on this slide, we use the counter state again. We're using it inside useEffect to set the document.title. Question, do we need the effect to run every time a component rerenders? No, just when the component is initially rendered and when the counter changes. To make that happen, we pass a dependency array as the second parameter to useEffect like this. But in the case of the effect in HouseList, there is no dependency. All we want is that the effect function is executed only once, just when the component initially renders. To make that happen, we can just specify an empty dependency array. 

Dependency Array

const [counter, setCounter] = useState(0);
useEffect(()=>{
    document.title = counter
},[counter])
In the component on this slide, we use the counter state again. We're using it inside useEffect to set the document.title. Question, do we need the effect to run every time a component rerenders? No, just when the component is initially rendered and when the counter changes. To make that happen, we pass a dependency array as the second parameter to useEffect like this. But in the case of the effect in HouseList, there is no dependency. All we want is that the effect function is executed only once, just when the component initially renders.

House api is add on public directory, i needed to be open with Vscode or in terminal to run the API end. 
To run the API: 
```shell
dotnet run
```
and i have changed https to http to run it easily on the file launchSettings.json

Effect Hooks: Separation of concerns

```javascript
useEffect(()=>{
    document.title = counter;
}, [counter])

useEffect(()=>{
    //fetch from API
},[])
```
What if there are multiple effects in a component that have to be executed? In that case, don't try to squeeze them into one call to useEffect. Multiple calls are supported, and they can each have their own dependency array. And if needed, you can also return a function from the effect to clean things up.

```javascript
useEffect(()=>{
    //subscribe
    return ()=>{
        //unsubscribe
    }
}, [])

```

What if you, for example, are subscribing to an event stream from some API? You will want to unsubscribe when the component is unmounted, that means removed from the UI. You can do that in this function. But be aware that this function is not only called when the component is removed. It is also called every time before the effect function fires again. In this case, that won't happen. But if you have dependencies in the dependency array or no dependency array at all, keep this in mind.


