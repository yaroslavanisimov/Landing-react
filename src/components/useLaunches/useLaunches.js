import { useEffect, useState } from "react";
import FetchData from '../../serice/FetchData';
const fetchData = new FetchData();

const useLaunches =()=> {
    const [data, setData] = useState([]);
    
        useEffect(()=> {
            fetchData.getLaunches ()
                .then((launches) => setData(state => [...launches]))
        }, []);

        const getLaunch = id => data.find(item => item.id === id)
        return {data, getLaunche}
}; 

export default useLaunches;
