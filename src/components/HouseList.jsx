import HouseRow from './HouseRow';
import HouseAddRow from './HouseAddRow';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';


//tried to use tanstack for better use of the fetching data for houses but it is not working, maybe i should try with another URL other than "http://localhost:4000/house"

const fetchHouses = async () => {
  console.log("Fetching houses...");
  const response = await fetch("http://localhost:4000/house");
  if (!response.ok) throw new Error("Failed to fetch houses");
  return response.json();
};
const HouseList = () => {
    const [houses, setHouses] = useState([]);

    const { data, isLoading, isError } = useQuery({
        queryKey: ['houses'],
        queryFn: fetchHouses,
        onSuccess: (data) => setHouses(data),
    });

    const addHouse = () => {
        setHouses([
            ...houses,
            {
                id: houses.length + 1,
                address: "32 Valley Way, New York",
                country: "USA",
                price: 1000000,
            },
        ]);
    };

    if (isLoading) return <div>Loading houses...</div>;
    if (isError) return <div>Error loading houses.</div>;

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
                    {houses.map(h => <HouseRow key={h.id} house={h} />)}
                </tbody>
            </table>
            {/* <HouseAddRow houses={houses} setHouses={setHouses} /> */}
            <button onClick={addHouse} className="btn btn-primary">
                Add
            </button>
        </>
    );
};

export default HouseList;