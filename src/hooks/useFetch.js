import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(apiUrl){
    const [data,setData] = useState([]);  // fetch the catgeories data 
    const [loading,setLoading] = useState(true);
    const [error, setError] = useState(null);
    


    const fetchData = async () => {
        try{
            const {data: responseData} = await axios.get(apiUrl)
            setData(responseData);
            setLoading(false);
            //console.log(responseData);


        }
        catch(err){
            setError(err.message);
            setLoading(false);
            
        }
    };

    useEffect(() => {
        fetchData();
    },[apiUrl]);

    return{data, loading, error};

}

export default useFetch;