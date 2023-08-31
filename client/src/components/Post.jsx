import AutomotiveTag from "./Tags/AutomotiveTag"
//import EducationalTag from "./Tags/EducationalTag"
//import EntertainmentTag from "./Tags/EntertainmentTag"
//import PetsTag from "./Tags/PetsTag"
//import SportsTag from "./Tags/SportsTag"


export default function PostH({
    data
}) {
    console.log('PostH', data);

    return(
        <>
            <div className="homePost">
                <h2>{data.title}</h2> 
                <img src={data.image} />
                <h3>{data.date}</h3>
                <h3>{data.time}</h3>
                <h4>{data.description}</h4>
                <h4>{data.location}</h4>
                <AutomotiveTag/>
            </div>
        </>
    )

}
