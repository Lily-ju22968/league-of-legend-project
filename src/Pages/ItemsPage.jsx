import { Container, Form } from "react-bootstrap";
import ItemsCards from "../Components/ItemsCards";
import ItemsServices from "../Services/ItemsServices";
import { useEffect, useState } from "react";


const ItemsPage = () => {

    const [items, setItems] = useState([]);
    const [searchValue, setSearchValue] = useState(null);
    /*const [filteredItems, setFilteredItems] = useState ([]);*/


    const handleChange = (e) => {
        setSearchValue(e.currentTarget.value);
    }
    const fetchItems = async () => {
        try {
            const response = await ItemsServices.getAllItems();

            const res = Object.entries(response.data.data);
            res.sort((a, b) => {
                return a[1].name.localeCompare(b[1].name);
            })
            setItems(res);
            /*setFilteredItems(res);*/

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchItems();
    }, []);

    useEffect(() => {
        /* setFilteredItems (items.filter ((item) =>{
            return item[1].name.includes(searchValues); 
}))*/
        if (searchValue) {
            const filteredItems = items.filter(item => item[1].name.toLowerCase().includes(searchValue.toLowerCase()));
            setItems(filteredItems);
        } else {
            fetchItems();
        }
    }, [searchValue]);



    return <Container className="d-flex flex-column align-items-center" >
        <h1 className="h1">All Items</h1>
        <Form className="col-12">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Recherche ton item</Form.Label>
                <Form.Control type="text" placeholder="Exemple : Charme Féérique" value={searchValue} onChange={handleChange} />
            </Form.Group>
        </Form>
        <div className="d-flex justify-content-center flex-wrap gap-5">
            {items.map((item) => {
                return <ItemsCards itemsCards={item[1]} key={item[0]} />
            })}
        </div>


    </Container>;
}

export default ItemsPage;