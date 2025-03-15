import React,{useEffect, useReducer,useState} from 'react';
import BookingForm from '../Component/BookingForm'

// const date = new Date();
// const initializeTimes = fetchAPI(date);
const initializeTimes = () => {

  return [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM'
  ];
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // For now, return the same times regardless of the date
      return initializeTimes();
    default:
      return state;
  }
};

function BookingPage() {
  const [initTime, setInitime]= useState();

  useEffect(()=>{
    const fetchData= async()=>{
      try{
        const res = await fetch("https://raw.githubusercontent.com/courseraap/capstone/main/api.js");
        const data = await res.json(); // Assuming the API returns JSON data
        setInitime(data);
      }catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();

  },[])
  
  const [availableTimes,dispatch]=useReducer(updateTimes,initTime);//initializeTimes
  return (
    <div>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
    </div>
  )
}

export default BookingPage;