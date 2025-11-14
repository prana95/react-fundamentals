import Banner from "./components/Banner"
import "./App.css"
import HouseList from "./components/HouseList"
import { Suspense } from "react"

const App= ()=> {
  
  return (
    <>
      <Banner headerText='Providing houses all over the worlds'/>
      {/* It takes a fallback prop, which is JSX, that will be rendered as long as the child components are in the suspended state. So with this, we have a nice loading indicator and code that is much cleaner */}
      <Suspense fallback={<h3>Loading...</h3>}> 
        <HouseList/>
      </Suspense>
    </>  
  )
}

export default App
