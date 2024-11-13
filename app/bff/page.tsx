'use client';
import {useState} from "react";

const BffPage = () => {

    const [data, setData] = useState([]);

    const fetchBffData = async () => {
        const response = await fetch('/oauth2/api/v1/users');
        const data = await response.json();
        setData(data);
        console.log(data);
    }


    return (
        <div>
            <button onClick={fetchBffData}>Fetch Bff Data</button>
        <h1>Bff Page {data}</h1>
        </div>
    );
}

export default BffPage;