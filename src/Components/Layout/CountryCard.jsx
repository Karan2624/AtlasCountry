export const CountryCard = ({country}) => {
    const {flags,name,population,region,capital} = country;
    return <li className="country-card card">
    <div className="container-card bg-white-box">
        <img src={flags.svg} alt={flags.alt} />
        <div className="class-info">
            <p className="card-title">
                {name.common.length>10?name.common.slice(0,10) + "..." : name.common}
            </p>
            <p>
                <span className="card-description">Population:</span>
                {population.toLocaleString()}
            </p>
            <p>
                <span className="card-description">Region:</span>
                {region}
            </p>
            <p>
                <span className="card-description">Captial:</span>
                {capital[0]}
            </p>
        </div>
    </div>
</li>
}