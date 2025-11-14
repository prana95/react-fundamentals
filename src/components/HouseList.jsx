import HouseRow from './HouseRow'
import HouseAddRow from './HouseAddRow'
import { use, useEffect, useState } from 'react';

const fetchHouses = fetch("http://localhost:4000/house")
        .then(r => r.json())

const HouseList =() => {
    const houseResult = use(fetchHouses) // here we are using use key word to fetch the houses from the api
    const [houses,setHouses] = useState(houseResult)
    const addHouse = () => {
        setHouses([
            ...houses,
            {
                id: houses.length+1,
                address: "32 Valley Way, New York",
                country: "USA",
                price: 1000000,
            },
        ]);
    };

    return (
        <>
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                Houses currently on the market
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Country</th>
                        <th>Asking Price</th>
                    </tr>
                </thead>
                <tbody>
                    {/*only element directly inside the call need keys*/}
                    {houses.map(h => <HouseRow key={h.id} house={h}/>)} 
                </tbody>
            </table>
            {/* <HouseAddRow houses = {houses} setHouses={setHouses} />  here we are not using this add new row so if you want you can un comment it and comment the button element below adn delete the addHouse function above */}
            <button onClick={addHouse} className="btn btn-primary">
                Add 
            </button>
        </>
    );
};

export default HouseList;