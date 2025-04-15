import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import  Cardtype  from './components/Apicomp';
   

function App() {

  const [data,setDate] = useState([])

  useEffect(() => {

      axios.get('https://rickandmortyapi.com/api/character')
      .then(function (response) {
          // handle success
          console.log(response.data.results);
          setDate(response.data.results)
        })
        .catch(function (error) {
          // handle error
          console.log("Hello");
          
          console.log(error);
        })

  }, [])

  return(
    <>
      <div className='main-sec text-bg-dark'>
        <div className='container'>
          <div className='row'>
            {
              data.map((item) => {
                return (
                    <>
                      <div className='col-lg-6 col-md-12'>
                        <Cardtype data={item} />
                      </div>
                    </>
                )
              }) 
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
