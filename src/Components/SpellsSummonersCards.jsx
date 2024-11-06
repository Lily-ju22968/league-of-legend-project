import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const SpellsSummonersCards = ({ summoner }) => {
    console.log(summoner);

    const navigate = useNavigate();
    const navigateTo = (id) => {
        navigate("/SpellsSummonersPage/" + id);
    }

    return <>
        <Card style={{ width: '18rem' }} onClick={() => navigateTo(summoner.id)}>
            <Card.Img variant="top" src={"https://ddragon.leagueoflegends.com/cdn/14.22.1/img/spell/"+summoner.image.full} />
            <Card.Body>
                <Card.Title className='d-flex align-items-center flex-column mb-3'>{summoner.name}</Card.Title>
                <Card.Text>
                    <div className='title-cards'></div>
                </Card.Text>
                <Button variant="warning">Voir détails</Button>
            </Card.Body>
        </Card>
    </>;
}

export default SpellsSummonersCards;