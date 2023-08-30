export default function FilterDropdown() {

    return(
        <>
            <form action="">
                <label htmlFor="filterOptions">Filter Events: </label>
                <select name="filterOptions" id="filterOptions">
                    <option selected value="All">All</option>
                    <option value="Automotive">Automotive</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Educational">Educational</option>
                    <option value="Pets">Pets</option>
                    <option value="Sports">Sports</option>
                    <option value="Other">Other</option>
                </select>
            </form>
        </>
    )
}