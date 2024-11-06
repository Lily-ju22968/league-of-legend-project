import { Container } from "react-bootstrap";
import SpellsSummonersCards from "../Components/SpellsSummonersCards";
import SpellsSummonersServices from "../Services/SpellsSummonersServices";
import { useEffect, useState } from "react";


const SpellsSummonersPage = () => {
    const [summoners, setSummoners] = useState([]);

    const fetchSummoners = async () => {
        try {
            const response = await SpellsSummonersServices.getAllSummoners();
            console.log(response.data.data);
            setSummoners(response.data.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchSummoners()
    }, []);


    return <Container className="d-flex flex-column align-items-center" >
        <h1 className="h1">All Summoners</h1>
        <div className="d-flex justify-content-center flex-wrap gap-5">
            {Object.entries(summoners).map((summoner) => {
                return <SpellsSummonersCards summoner={summoner[1]} key={summoner[0]} />
            })}
        </div>


    </Container>;
}

export default SpellsSummonersPage;