
const CityInput = ({setCity}) => {

    const handleInputChange = (event) => {
        setCity(event.target.value)
    }

    return (
        <div className="cityInput">
            <label>City:</label>
            <input
                type="text"
                onChange={handleInputChange}
                placeholder="Enter city"
            />
        </div>
    )
}

export default CityInput