import { useEffect, useState } from "react";
import ChampionsServices from "../Services/ChampionsServices";
import { Container } from "react-bootstrap";
import ChampionsCards from "../Components/ChampionsCards";
import Pagination from "react-bootstrap/Pagination";


const HomePage = () => {

    const [champions, setChampions] = useState([]);
    const fetchChampions = async () => {
        try {
            const response = await ChampionsServices.getAllChampions();
            console.log(response.data.data);
            setChampions(response.data.data);

        } catch (error) {
            console.error(error);
        }
    }
    
    useEffect(() => {
        fetchChampions();
    }, []);

    return <Container className="d-flex flex-column align-items-center" >
    <h1 className="h1">All Champions</h1>
    <div className="d-flex justify-content-center flex-wrap gap-5">
      {Object.entries(champions).map((champion) => {
           return <ChampionsCards championsCards={champion[1]} key={champion[1].id} />
        })}
    </div>
    
    
    </Container>;
}
 
export default HomePage;