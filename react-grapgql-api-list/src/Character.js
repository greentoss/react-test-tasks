import {useCharacter} from "./queryHooks/useCharacter";
import {useParams} from "react-router-dom";

function Character() {

    const {id} = useParams()
    const {data, loading, error} = useCharacter(id)

    if (error) {
        return <div>error on client</div>
    }
    if (loading) {
        return <div>spinner...</div>
    }
    return (
        <div>
            Character
            <img src={data.character.image} width={500} height={500}/>
            <div>
                <h1>{data.character.name}</h1>
                <p>{data.character.gender}</p>
            </div>
        </div>
    );
}

export default Character;
