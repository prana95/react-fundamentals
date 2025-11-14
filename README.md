# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


Some important take away:
### useEffect 
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