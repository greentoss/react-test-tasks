import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

// https://randomuser.me/api

function App() {
  const [counter, setCounter] = useState(0);
  const [randomUserData, setRandomUserData] = useState('');
  const [nextPageNumber, setNextPageNumber] = useState(1);
  const [userInfoArray, setUserInfoArray] = useState([]);

  const fetchNextUser = () => {
        getApiData(nextPageNumber)
            .then((randomData) => {
                setRandomUserData(JSON.stringify(randomData, null, 2) || 'No user data found');
                if (randomData === undefined) {
                    return;
                }
                const newUserInfoArray = [
                    ...userInfoArray,
                    ...randomData.results,
                ]
                setUserInfoArray(newUserInfoArray)
                setNextPageNumber(randomData.info.page + 1)
        })
  }

  useEffect(() => {
      fetchNextUser();
  }, []);

  const getApiData = (pageNumber = 1) => {
      // ?page2
      return axios.get(`https://randomuser.me/api?page=${pageNumber}`)
          .then(({data}) => {
              // console.log(data);
              return data;
          })
          .catch((error) => {
              console.log(error)
          })
  };



  const getFullUserName = (userInfo) => {
      // console.log(`${userInfo.name.title} ${userInfo.name.first} ${userInfo.name.last}`)
      // return `${userInfo.name.title} ${userInfo.name.first} ${userInfo.name.last}`
      const {name: {first, last}} = userInfo;
      // console.log(`${first} ${last}`);
      return `${first} ${last}`;
  }

  const getImg = (userInfo) => {
      return userInfo.picture.thumbnail;
  }

    const increaseCounter = () => {
        let newCounter = counter;
        newCounter ++;
        setCounter(newCounter)
    };

    return (
        <div className="App">
            <h1>Hi HI</h1>
            <div><span>counter: </span>{counter}</div>
            <p>api data from : <span>https://randomuser.me/api</span></p>
            <button onClick={increaseCounter}>Click to ++ the counter</button>
            <button onClick={fetchNextUser}>Click to get api data</button>
            <p>{randomUserData}</p>
            <hr/>
            {
                userInfoArray.map((elem, index) => (
                      <div key={index}>
                          <p>{getFullUserName(elem)}</p>
                          <img src={getImg(elem)}/>
                      </div>
                ))
            }
        </div>
    );
}


export default App;
