import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";


const ItemsDetailsPage = () => {

    const location = useLocation();
    console.log(location);

    const currentItem = location.state.item;

    return <Container className="d-flex flex-column align-items-center" >
    <h1 className="h1">{currentItem.name}</h1>
    <div className="d-flex justify-content-center flex-wrap gap-5">

    </div>
    
    </Container>;
}
 
export default ItemsDetailsPage;