import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../API/postApi";
import { Loader } from "../Components/UI/Loader";
import { CountryCard } from "../Components/Layout/CountryCard";
import { SearchFilter } from "../Components/UI/SearchFilter";

export const Country = () => {
    const [isPending,startTransiton] = useTransition();
    const [countries,setCountries] = useState([]);

    const [search,setSearch] = useState();
    const [filter,setFilter] = useState("all");

    useEffect(() => {
        startTransiton(async() => {
            const res = await getCountryData();
             setCountries(res.data);
        })
    },[])

    const searchCountry = (country) => {
        if(search){
            return country.name.common.toLowerCase().includes(search.toLowerCase());
        }
        return country;
    }
    
    const filterRegion = (country) => {
        if(filter==="all"){
            return country;
        }
        else{
            return filter===country.region;
        }
    }

    const filterCountries = countries.filter(
        (country) => {
            return searchCountry(country) && filterRegion(country);
        }
    )

    if(isPending) return <h1><Loader /></h1>

    return <section className="country-section">
        <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} countries={countries} setCountries={setCountries} />
        <ul className="grid grid-four-cols">
            {
                filterCountries.map((currCountry,index) => {
                    return <CountryCard country={currCountry} key={index} />
                })
            }
        </ul>
    </section>
}