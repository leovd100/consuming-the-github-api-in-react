import logo from './logo.svg';
import './App.css';
import GithubImage from './github.jpg';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState('');
  const [userDate, setUserData] = useState();
  const handleSubmit = (event) => {    
    event.preventDefault();

    fetch(`https://api.github.com/users/${search}`)
        .then(reponse => reponse.json())
        .then(userResponse => setUserData(userResponse))


  }




  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  return (
    <div className="container text-center"> 
      <h1 className="py-5 text-uppercase"> Github profile</h1>

      <form onSubmit={handleSubmit}> 
        <div className="form-group">
          <div className="input-group">
            <input type="text" className="form-control" 
                                required 
                                value={search}
                                onChange={handleChange}/>
            <span className="input-group-btn">
              <button type="submit" className="btn btn-success">Search</button>
            </span>
          </div>
        </div>
      </form>
    <div className="py-5">
      
    {!userDate && (<img src={GithubImage} className="responsive rounded-circle" alt="" height="200px" />)}


    {userDate &&(
      <div>
          <img src={userDate.avatar_url} className="responsive rounded-circle" alt="" height="200px" />
          <h1 className="pt-5">
            <a href="https://github.com/leovd100" target="_new">{userDate.name}</a>
          </h1>
          <h3>Local {userDate.location}</h3>
          {userDate.blog &&(  
          <p>
              <a href={userDate.blog} target="_new" className="text-info" >{userDate.blog}</a>
          </p>
          )}
          
      </div>
    )}
    </div>





    </div>
  );
}

export default App;
