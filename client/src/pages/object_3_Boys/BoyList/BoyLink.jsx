import { Link } from "react-router-dom"

export default function BoyLink(props) {
   
    return (
        <>
            <Link to={`/boy/${props._id}`}>
                <p>{props.name}</p>
            </Link>
        </>
    )
}