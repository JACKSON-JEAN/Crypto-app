import React from 'react'

const Coin = ({data, search}) => {
  return (
    <div className="table">
      <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Coin</th>
              
              <th>symbol</th>
              <th>price</th>
              <th>24 hr</th>
              <th>volume</th>
            </tr>
          </thead>
          <tbody>
            {
              data.filter(item=>item.name.toLowerCase().includes(search.toLowerCase())).map((item)=>{
                const{id,market_cap_rank,symbol,name,image,current_price,price_change_24h, total_volume}=item
                return <tr key={id}>
                  
                  <td>{market_cap_rank}</td>
                  <td><img src={image} alt={name} />{name}</td>
                  
                  <td>{symbol}</td>
                  <td>$ {current_price.toLocaleString()}</td>
                  {price_change_24h<0?<td className='red'>{price_change_24h.toFixed(2)}</td>:<td className='green'>{price_change_24h.toFixed(2)}</td>}
                  
                  <td>$ {total_volume.toLocaleString()}</td>
                </tr>
              })
            }
          </tbody>
        </table>
        </div>
  )
}

export default Coin
