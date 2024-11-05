import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const ItemsCards = ({itemsCards}) => {
    console.log(itemsCards);
    
    const navigate = useNavigate();
    const navigateTo = (full) => {
        navigate("/ItemsPage/");
    }

    return <>
        <Card style={{ width: '18rem' }} onClick={() => {navigateTo()}}>
        <Card.Img variant="top" src={"https://ddragon.leagueoflegends.com/cdn/14.21.1/img/item/"+itemsCards.image.full} />
      <Card.Body>
        <Card.Title className='d-flex align-items-center flex-column mb-3'>{itemsCards.name}</Card.Title>
        <Card.Text>
            <div className='title-cards'>{itemsCards.title}</div>
        </Card.Text>
        <Button variant="warning">Voir détails</Button>
      </Card.Body>
    </Card>
    </>;
}

export default ItemsCards;