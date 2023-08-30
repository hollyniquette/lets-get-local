import Navbar from "./Navbar"
import PostH from "./PostH"
import FilterDropdown from "./FilterDropdown"

export default function HomePage() {

    return(
        <>
            <Navbar/>
            <h1>Home</h1>
            <FilterDropdown/>
            <div className="homePostBox">
                <PostH/>
            </div>
        </>
    )

}