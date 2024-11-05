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
        <div className="d-flex flex-column align-items-center gap-3">
            <img
                style={{ width: '60rem' }}
                src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + champions.id + "_0.jpg"}
                alt={"Image du champion"}
            />
            <p>{champions.lore}</p>
            <div>
                <h2>Tips for allies</h2>
                <ul>
                    {champions.allytips && champions.allytips.map((tip) => {
                        return <li key={tip}>{tip}</li>
                    })}
                </ul>

                <h2>Tips for enemies</h2>
                <ul>
                    {champions.enemytips && champions.enemytips.map((tip) => {
                        return <li key={tip}>{tip}</li>
                    })}
                </ul>
            </div>
            {champions.spells && champions.spells.map((spell) => {
                return <>
                    <h3>{spell.name}</h3>
                    <img src={"https://ddragon.leagueoflegends.com/cdn/14.21.1/img/spell/"+spell.image.full} alt=""/>
                    <p>{spell.description}</p>
                </>
            } ) }
        </div>

    </>;
}

export default LorePage;