import axios from 'axios'
import {useState, useEffect} from 'react'

const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get( "https://jsonplaceholder.typicode.com/posts");
        setData(response.data);
      }
      catch(error){
        console.error("Error fetching data:", error);
      }
    }; // fetchData

    fetchData();
  }, [])

  return (
    <div>
      <h1>Data from JSONPlaceholder</h1>
      <ul>{ data.map((item) => (<li key={item.id}>{item.title}</li>)) }</ul>
    </div>
  )
}
export default MyComponent;
