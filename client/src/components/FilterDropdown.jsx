export default function FilterDropdown({ updateFilterValue }) {
  function handleChange(e) {
    updateFilterValue(e.target[e.target.selectedIndex].value);
  }
  return (
    <>
      <form action="">
        <label htmlFor="filterOptions">Filter Events: </label>
        <select
          name="filterOptions"
          id="filterOptions"
          //onChange={handleChange(this.options[this.selectedIndex].value)}
          onChange={handleChange}
        >
          <option selected value="ALL">
            All
          </option>
          <option value="AUTOMOTIVE">Automotive</option>
          <option value="ENTERTAINMENT">Entertainment</option>
          <option value="EDUCATION">Educational</option>
          <option value="PETS">Pets</option>
          <option value="SPORTS">Sports</option>
          <option value="OTHER">Other</option>
        </select>
      </form>
    </>
  );
}
