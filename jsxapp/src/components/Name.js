import React from "react";
import Products from "./Products";

const Name = () => {
    return(
        <div>
            <h1 className="nom">{Products[0].nom}</h1>
        </div>
    )
}

export default Name;