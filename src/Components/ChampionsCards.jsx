import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const ChampionsCards = ({championsCards}) => {
    console.log(championsCards);
    
    const navigate = useNavigate();
    const navigateTo = (id) => {
        navigate("/LorePage/"+id);
    }

    return <>
        <Card style={{ width: '18rem' }} onClick={() => {navigateTo(championsCards.id)}}>
        <Card.Img variant="top" src={"https://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + championsCards.id + "_0.jpg"} />
      <Card.Body>
        <Card.Title className='d-flex align-items-center flex-column mb-3'>{championsCards.name}</Card.Title>
        <Card.Text>
            <div className='title-cards'>{championsCards.title}</div>
            <ul>
            <li>Attack : {championsCards.info.attack}</li>
            <li>Defense : {championsCards.info.defense}</li>
            <li>Magic : {championsCards.info.magic}</li>
            <li>Difficulty : {championsCards.info.difficulty}</li>
            </ul>
        </Card.Text>
        <Button variant="warning">Voir détails</Button>
      </Card.Body>
    </Card>
    </>;
}

export default ChampionsCards;