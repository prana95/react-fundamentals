import Banner from "./components/Banner"
import "./App.css"
import HouseList from "./components/HouseList"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App= ()=> {
  
  return (
    <>
      <Banner headerText='Providing houses all over the worlds'/>
      <QueryClientProvider client={queryClient}>
        <HouseList />
      </QueryClientProvider>


    </>  
  )
}

export default App
