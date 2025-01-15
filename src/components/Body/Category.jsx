import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Productcard from "./Productcard";
import Skeleton from "../other/Skeleton";

function Category() {
    const { category } = useParams();
    const processedCategory = category.replace(/-/g, ' ').toLowerCase();
    const [Products, setProducts] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ignore = false;
        setLoading(true);
        setError(null);
        fetch(`https://fakestoreapi.com/products/category/${processedCategory}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(result => {
                if (!ignore) {
                    setProducts(result);
                    setLoading(false);
                }
            })
            .catch(error => {
                if (!ignore) {
                    console.error('Error fetching data:', error);
                    setError('Failed to load products.');
                    setProducts([]);
                }
            })
            .finally(() => {
                if (!ignore) {
                    setLoading(false);
                }
            });

        return () => {
            ignore = true;
        };
    }, [processedCategory]);

    if (Loading) return (
        <div className="flex justify-center items-center mt-5">
            <div>
                <Skeleton />
            </div>
        </div>
    );

    if (error) return (
        <div className="flex justify-center items-center mt-5">
            <div className="text-red-500">{error}</div>
        </div>
    );

    return (
        <div className="flex justify-center items-center mt-5 m-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Products.map((product) => {
                    return <Productcard key={product.id} id={product.id} name={product.title} description={product.description} price={product.price} imageUrl={product.image} />;
                })}
            </div>
        </div>
    );
}

export default Category;
