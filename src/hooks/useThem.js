import { useContext } from "react";
import { ThemContext } from "../context/ThemContext";
export const useThem = ()=>{
       const context = useContext(ThemContext)
    if (context === undefined) {
        throw new Error("useThem() must use inside ThemProvider")
    }
    return context
}