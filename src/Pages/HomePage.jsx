import { useEffect, useState } from "react";
import ChampionsServices from "../Services/ChampionsServices";
import { Container, Form } from "react-bootstrap";
import ChampionsCards from "../Components/ChampionsCards";
import Pagination from "react-bootstrap/Pagination";


const HomePage = () => {

    const [champions, setChampions] = useState([]);
    const [filteredChampions, setFilteredChampions] = useState([]);
    const [searchChampionsValue, setSearchChampionsValue] = useState("");

    const handleChampionsChange = (e) => {
        setSearchChampionsValue(e.currentTarget.value);
    }
    const fetchChampions = async () => {
        try {
            const response = await ChampionsServices.getAllChampions();
            setChampions(response.data.data);
            setFilteredChampions(response.data.data);

        } catch (error) {
            console.error(error);
        }
    }
    
    useEffect(() => {
        fetchChampions();
    }, []);

    useEffect(() => {
        /* setFilteredItems (items.filter ((item) =>{
            return item[1].name.includes(searchValues); 
}))*/
        if (searchChampionsValue) {
            const filtered = Object.entries(champions).filter(([key, champion]) => champion.name.toLowerCase().includes(searchChampionsValue.toLowerCase()));
            setFilteredChampions(Object.fromEntries(filtered));
        } else {
            setFilteredChampions(champions);
        }
    }, [searchChampionsValue, champions]);

    return <Container className="d-flex flex-column align-items-center" >
    <h1 className="h1">All Champions</h1>
    <div>
    <Form className="col-12">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                <Form.Label>Recherche ton champion</Form.Label>
                <Form.Control type="text" placeholder="Exemple : Jax" value={searchChampionsValue} onChange={handleChampionsChange}/>
            </Form.Group>
        </Form>
    </div>
    <div className="d-flex justify-content-center flex-wrap gap-5">
      {Object.entries(filteredChampions).map(([key, champion]) => {
           return <ChampionsCards championsCards={champion} key={champion.id} />
        })}
    </div>
    
    
    </Container>;
}
 
export default HomePage;