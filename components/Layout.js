import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout =({children})=>{
    return(
        <div>
            <Header/>
            {children}
            
         <br />
         <br />
         <br />   
        <br />
        <br />
        <Footer/>
        </div>
    )
}