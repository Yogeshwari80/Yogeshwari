import React, { Children, useState } from "react";
import FavouriteContext from "./favouriteContext";

const FavouriteContextProvider = ({children}) => {
    const [favouriteId,setFavouriteId] = useState([]);
    return(
        <FavouriteContextProvider value={{favouriteId,setFavouriteId}}>
            {children}
        </FavouriteContextProvider>
    )
}

export default FavouriteContextProvider