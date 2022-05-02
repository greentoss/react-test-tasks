Task:

api: // https://rickandmortyapi.com/graphql

use GraphQL
use Apollo/client
make list of data and display it
on click of each element make component with detailed info

### instruction:

- npm install @apollo/client graphql

- make imports of apolloClient, Provider, InMemoyCache,
make variable client and 
put it into <AppoloProvider client={}> :
```javascript
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

//https://rickandmortyapi.com/graphql

const client = new ApolloClient( {
    uri: 'https://rickandmortyapi.com/graphql',
    cache: InMemoryCache();
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
  </React.StrictMode>

);
```
- make component List, where u will render data
- make query like:
```javascript
const GET_CHARACTERS = gql`
    query {
            characters {
               results {
                   id
                   name
                   image
               } 
            }
          }
`
```
using `gql` - another imported thing
- make inside CharacterList the `useQuery()` hook that will display either 
error, or spinner while loading is true, or render :
```javascript
const {error, loading, data} = useQuery(GET_CHARACTERS)

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
            <h3>Character List:</h3>
            {
                data.characters.results.map((character) => {
                    return <div>
                        <img src={character.image} />
                        <h2>{character.name}</h2>
                    </div>
                })
            }
        </>
    );
```  
---
- make custom hook **useCharacters**: it just fetches query vs characters and
  returns object vs loading, errors and data ``{error,
  data,
  loading}``. it is stored in **hooks** directory
- then use it in CharacterList component: 
````javascript
import {useCharacters} from "./queryHooks/useCharacters";
// import {useQuery, gql} from "@apollo/client";
//
// const GET_CHARACTERS = gql`
//     query {
//             characters {
//                results {
//                    id
//                    name
//                    image
//                }
//             }
//           }
// ` //remove this

function CharacterList() {

    // const {error, loading, data} = useQuery(GET_CHARACTERS)  //remove this
    const {error, loading, data} = useCharacters()
    if (error) {
        console.log('error on client')
        alert('error on client');
    }
````
---
- make routes: ``npm i react-router-dom`` 
- wrap browser router in **index.js**
```javascript
  <React.StrictMode>
    <BrowserRouter>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
```
- make routes where u want it to be **App.js**
```javascript
<Routes>
  <Route exact path = '/' element = {<CharacterList/>} />
  <Route path = '/:id' element = {<Character/>} />
</Routes>
```
- make another query hook useCharacter, in which query will be :
```javascript
    const GET_CHARACTER = gql`
    query GetCharacter($id: ID!) {
            character(id: $id) {
               name
               id
               image
               episode {
                   name
                   episode
               }
            }
    }
`;
```

id is id vs type of ID, ! is for necessarity

inside afrer query there is a **options** object that has variable : { id } 
````javascript
export const useCharacter = (id) => {
    const { error, data, loading } = useQuery(GET_CHARACTER, {
        variables: {
            id,
        },
    });
    return {
        error,
        data,
        loading
    }
}
````
- then render the character
````javascript
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
````
- and make Links - transform items in characterList into Link :
````javascript
<Link to={`/${character.id}`} key={character.id} >
    <img src={character.image} />
    <h3>{character.name}</h3>
</Link>
````
- finally make dinamic id in Character, usinf **useParams** hook
````javascript
function Character() {

    const {id} = useParams()
    const {data, loading, error} = useCharacter(id)

    if (error) {
````