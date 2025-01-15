import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Productskeleton from "../other/Productskeleton";
import Productcmp from "./Productcmp";

function Productpage() {
    const { id } = useParams();
    const productId = id;
    const [Product, setProduct] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [Error, setError] = useState(false);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(response => response.json())
            .then(result => {
                setProduct(result);
                setLoading(false);
            })
            .catch(error => {
                console.log(`Fetch Falied: ${error}`);
                setError(true);
            });


        window.scrollTo(0, 0);
    }, [productId]);

    if (Loading) return <Productskeleton />;

    return (
        <Productcmp product={Product}/>
    );
}

export default Productpage;
