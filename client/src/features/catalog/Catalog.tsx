import { useState, useEffect } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Product } from "../../app/models/product"
import ProducList from "./ProductList";


export default function Catalog(){

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    // Si no colocamos el [] el efecto se ejecutara cada vez que el componente se ejecute
    // hay que colocarlo, para que no se vuelva a ejecutar en un loop eterno
    useEffect(() => {
      agent.Catalog.list()
        .then(products => setProducts(products))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, [])

    if (loading) return <LoadingComponent message="Loading Products"/>
  
    return(
        <>
            <ProducList products={products}/>
            {/* <>{console.log('hello')}</> */}
        </>
    )
}