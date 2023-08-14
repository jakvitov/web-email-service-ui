
const CountryIsoInput = ({setCountry}) => {

    const handleChange = (event) => {
        setCountry(event.target.value);
    }

    return (
        <div className="countryInput">
            <label>Country:</label>
            <input
                type="text"
                onChange={handleChange}
                placeholder="Enter country code (2/3 characters)"
            />
        </div>
    )
}

export default CountryIsoInput