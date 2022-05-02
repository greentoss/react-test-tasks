import {useCharacters} from "./queryHooks/useCharacters";
import {Link} from "react-router-dom";

function CharacterList() {

    const {error, loading, data} = useCharacters()
    if (error) {
        console.log('error on client')
        alert('error on client');
    }
    if (loading) {
        console.log('loading');
        return <div>spinner...</div>
    }

    return (
        <>
            <h2>Character List:</h2>
            <div className='characterList'>
                {
                    data.characters.results.map((character) => {
                        return (
                            <Link to={`/${character.id}`} key={character.id} >
                                <img src={character.image} />
                                <h3>{character.name}</h3>
                            </Link>
                        )
                    })
                }
            </div>
        </>
    );
}

export default CharacterList;
