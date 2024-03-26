import React,{useState,useEffect} from 'react';
import { FaSearch, FaTimes } from "react-icons/fa";
import Coin from './Coin';
import './App.css';

const url="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
function App() {
 const[data, setData]=useState([])
 const[search, setSearch]=useState('')

  const getData = async()=>{
    const response = await fetch(url)
    const data = await response.json()
    setData(data)
    console.log(data)
  }
  
  useEffect(()=>{
    getData()
  },[])

const handleDelete=()=>{
  setSearch('')
  
}

  return (
    <div className="coin-pp">
      
      <div className="coin-search">
        <h1>Cryptocurrency Prices from coin Gecko API</h1>
        <form>
          <div className="form-input">
            <input type="text" placeholder='Coin name...' className='coin-input' value={search} onChange={(e)=>setSearch(e.target.value)}/>
            {search===''?<FaSearch className='icon'/>:<FaTimes className='icon' onClick={handleDelete}/>}
          </div>
        </form>
      </div>
      <Coin data={data} search={search}/>
    </div>
  );
}

export default App;
