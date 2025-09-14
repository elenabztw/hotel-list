import { useState } from "react";
import { data } from "./data";
import './App.css';


function App() {
  const [hotels, setHotel] = useState(data);
  const [showText, setShowText] = useState(false);

  const removeHotel = (id) => {
    const newHotels = hotels.filter(hotel => hotel.id !== id);
    setHotel(newHotels)
  }

  const showTextClick = (element) => {
    element.showMore = !element.showMore
    setShowText(!showText)
  }
  
  return(
    <div className="hotels-wrapper">
      <div className="container">
        <h1>Top <span className="highlight">{hotels.length}</span> Hotels in NY</h1>
      </div>

      {hotels.map((element => {
        const {id, hotelName, description, image, source, showMore} = element;

        return(
          <div key={id}>
            <div className="container">
              <h2>{id} - {hotelName}</h2>
            </div>

            <div className="container card-content">
              <p>{showMore ? description : description.substring(0, 160) + " ..."}
                <button className="btnShow" onClick={() => showTextClick(element)}>{showMore ? "Show less" : "Show more"}</button>
              </p>
            </div>

            <div className="container">
              <img src={image} alt="hotel" width="400px"/>
            </div>

            <div className="container">
              <p>source: {source}</p>
            </div>

            <div className="container">
              <button onClick={() => removeHotel(id)} 
                className="btn">Remove</button>
            </div>
          </div>
        )
      }))}
      <div className="container">
        <button onClick={() => setHotel([])} 
          className="btn">delete all</button>
      </div>
    </div>
  )
}

export default App;
