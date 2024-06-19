import { createContext, useState } from "react"

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
    
    const [id, setId] = useState(null);
    const [cantidad, setCantidad] = useState(null);

    return (
        <ProductContext.Provider value={{
            id,
            cantidad,
            setId,
            setCantidad,

        }}>
            {children}
        </ProductContext.Provider>

    )

}