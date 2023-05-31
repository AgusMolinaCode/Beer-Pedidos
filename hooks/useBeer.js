import { useContext } from "react";
import { BeerContext } from "@/context/BeerProvider";

const useBeer = () => {
    return useContext(BeerContext);
};

export default useBeer;