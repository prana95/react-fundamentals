import { useState, useEffect } from 'react';

const HouseAddRow = ({ houses, setHouses }) => {
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');
    const [price, setPrice] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    // Auto-hide messages after 3 seconds
    useEffect(() => {
        if (message || error) {
            setShowAlert(true);
            const timer = setTimeout(() => {
                setShowAlert(false);
                setMessage('');
                setError('');
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [message, error]);

    const addHouse = async () => {
        if (!address || !country || !price) {
            setError('❌ Please fill in all fields.');
            return;
        }

        const newHouse = {
            address,
            country,
            price: parseFloat(price),
        };

        setLoading(true);
        setMessage('');
        setError('');

        try {
            const response = await fetch('http://localhost:4000/house', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newHouse),
            });

            if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
            }

            const savedHouse = await response.json();
            setHouses([...houses, savedHouse]);
            setMessage('✅ House added successfully!');
            setAddress('');
            setCountry('');
            setPrice('');
        } catch (err) {
            setError('❌ Failed to add house. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mt-3">
            <h6>Add a New House</h6>
            <div className="form-group mb-2">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </div>
            <div className="form-group mb-2">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                />
            </div>
            <div className="form-group mb-2">
                <input
                    type="number"
                    className="form-control"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <button onClick={addHouse} className="btn btn-primary" disabled={loading}>
                {loading ? (
                    <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Adding...
                    </>
                ) : (
                    'Add House'
                )}
            </button>

            {showAlert && message && (
                <div className="alert alert-success fade show mt-3" role="alert">
                    {message}
                </div>
            )}
            {showAlert && error && (
                <div className="alert alert-danger fade show mt-3" role="alert">
                    {error}
                </div>
            )}
        </div>
    );
};

export default HouseAddRow;