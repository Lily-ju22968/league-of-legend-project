import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ChampionsServices from "../Services/ChampionsServices";

const LorePage = () => {
    const { id } = useParams();
    const [champions, setChampions] = useState({})

    const fetchChampionsById = async () => {
        try {
            const response = await ChampionsServices.getAllChampionsById(id);
            console.log(response.data.data);
            setChampions(Object.entries(response.data.data)[0][1]);

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        fetchChampionsById()
    }, []);

    return <>
        <h1 className="d-flex flex-column align-items-center"> Lore of {id}</h1>
        <div className="d-flex flex-column align-items-center">
            <img 
                style={{ width: '60rem' }}
                src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + champions.id + "_0.jpg"}
                alt={"Image du champion"}
            />
        </div>


        <p>{champions.blurb}</p>
    </>;
}

export default LorePage;