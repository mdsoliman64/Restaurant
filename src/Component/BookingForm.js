import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";


export default function BookingForm({availableTimes,dispatch}) {
  const [data,setData]=useState({
    date:" ",
    time:[],
    guest:" ",
    occasion:" ",
  });

  function changeHandle(e){
    const {name,value}=e.target;
    setData((prev)=>({
        ...prev,[name]:value
    }));
    if(name === "date"){
        dispatch({type:'UPDATE_TIMES', date:value})
    }
  }
 const confirmed= useNavigate("/confirmed")
    return (
    <>
        <form aria-labelledby='headerform' id="form" onSubmit={confirmed}>
            <h3 id="headerform">Reserve a Table</h3>
            <div>
                <label htmlFor="date">
                        Date:
                </label><br/>
                <input 
                type="date" 
                id="date" 
                name="date"
                value={data.date}
                onChange={changeHandle}
                aria-required="true"

                />
            </div>

            <div>
                <label htmlFor="time">
                        Time:
                </label><br/>
                <select
          id="time"
          name="time"
          value={data.time}
          onChange={changeHandle}
          aria-required="true"
        >
          <option value="">Select a time</option>
          {Array.isArray(availableTimes) && availableTimes.map((time) => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
            </div>


            <div>
                <label htmlFor="guest">
                       Guest:
                </label><br/>
                <input 
                type="number" 
                id="guest" 
                name="guest"
                value={data.guest}
                onChange={changeHandle}
                aria-required="true"
                min="1"
                max="10"
                placeholder='1'

                />
            </div>
            <div>
                <label htmlFor="occasion">
                      Occasion:
                </label><br/>
               <select id="occasion">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Other</option>
               </select>
            </div>
            <input data-testid="Book Now" type="submit" value="Make Your Reservation"/>
        </form>
    </>
  )
}
