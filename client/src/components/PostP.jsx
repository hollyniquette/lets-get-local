import AutomotiveTag from "./Tags/AutomotiveTag"

export default function PostH() {

    return(
        <>
            <div className="homePost">
                <h2>Bike Night</h2>
                <img src="public/images/auto_720.jpg" />
                <p>This is for all the cool bike owners who want to meet other cool bike owners.</p>
                <AutomotiveTag/>
                <p>Event is on 11/16/2023 @ 5:00pm</p>
                <p>Location: 1234 main street, City, State, ZIP</p>
                <div>
                    <button>EDIT</button>
                    <button>DELETE</button>
                </div>
            </div>
        </>
    )
}