import Navbar from "./Navbar"
import PostH from "./Post"

export default function HomePage() {

    return(
        <>
            <Navbar/>
            <div className="homePostBox">
                <PostH/>
            </div>
        </>
    )

}