import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const ChampionsCards = ({championsCards}) => {
    console.log(championsCards);
    
    const navigate = useNavigate();

    return <>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={"https://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + championsCards.id + "_0.jpg"} />
      <Card.Body>
        <Card.Title className='d-flex align-items-center flex-column mb-3'>{championsCards.name}</Card.Title>
        <Card.Text>
            <ul>
            <li>Attaque : {championsCards.info.attack}</li>
            <li>Défense : {championsCards.info.defense}</li>
            <li>Magie : {championsCards.info.magic}</li>
            <li>Difficulté : {championsCards.info.difficulty}</li>
            </ul>
        </Card.Text>
        <Button variant="warning">Voir détails</Button>
      </Card.Body>
    </Card>
    </>;
}

export default ChampionsCards;