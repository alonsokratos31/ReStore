import { useState, useEffect } from "react";
import { Product } from "../../app/models/product"
import ProducList from "./ProductList";


export default function Catalog(){

    const [products, setProducts] = useState<Product[]>([]);

    // Si no colocamos el [] el efecto se ejecutara cada vez que el componente se ejecute
    // hay que colocarlo, para que no se vuelva a ejecutar en un loop eterno
    useEffect(() => {
      fetch('http://localhost:5000/api/Products')
        .then(response => response.json())
        .then(data => setProducts(data))
    }, []);
  
    return(
        <>
            <ProducList products={products}/>
            {/* <>{console.log('hello')}</> */}
        </>
    )
}