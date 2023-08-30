import Navbar from "./Navbar"
import PostH from "./PostH"

export default function HomePage() {

    return(
        <>
            <Navbar/>
            <h1>Home</h1>
            <div className="homePostBox">
                <PostH/>
            </div>
        </>
    )

}