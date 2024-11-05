import { Container } from "react-bootstrap";
import ItemsCards from "../Components/ItemsCards";
import ItemsServices from "../Services/ItemsServices";
import { useEffect, useState } from "react";


const ItemsPage = () => {

    const [items, setItems] = useState({});
    const fetchItems = async () => {
        try {
            const response = await ItemsServices.getAllItems();
            console.log(response.data.data);
            setItems(response.data.data);

        } catch (error) {
            console.error(error);
        }
    }
    
    useEffect(() => {
        fetchItems();
    }, []);


    return <Container className="d-flex flex-column align-items-center" >
    <h1 className="h1">All Items</h1>
    <div className="d-flex justify-content-center flex-wrap gap-5">
      {Object.entries(items).map((item) => {
           return <ItemsCards itemsCards={item[1]} key={item[1].id} />
        })}
    </div>
    
    
    </Container>;
}
 
export default ItemsPage;