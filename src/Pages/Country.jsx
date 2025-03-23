import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../API/postApi";
import { Loader } from "../Components/UI/Loader";
import { CountryCard } from "../Components/Layout/CountryCard";

export const Country = () => {
    const [isPending,startTransiton] = useTransition();
    const [countries,setCountries] = useState([]);
    useEffect(() => {
        startTransiton(async() => {
            const res = await getCountryData();
             setCountries(res.data);
        })
    },[])

    if(isPending) return <h1><Loader /></h1>

    return <section className="country-section">
        <ul className="grid grid-four-cols">
            {
                countries.map((currCountry,index) => {
                    return <CountryCard country={currCountry} key={index} />
                })
            }
        </ul>
    </section>
}