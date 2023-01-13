import { Children } from "react";

export default function MainButton({href,Children}){
    return( 
    <a href={href} className="btn main-btn">
        {Children}
    </a>
         )
        
}