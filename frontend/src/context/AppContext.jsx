import { createContext } from "react";
import { doctors } from "../components/TopDoctors";

export const AppContext=createContext()

const AppContextProvider=()=>{
    const value={
        doctors
    }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider