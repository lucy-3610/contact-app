
   
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css';

function App() {
  const [date, setDate] = useState(new Date());
  let arr = []

  return (
    <div className='app'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-6'>
      <h1 className='text-center mt-5 mb-4'>React Calendar</h1>
      <div className='calendar-container d-flex justify-content-center'>
      <Calendar 
        onChange={setDate} 
        value={date} 
        onClickDay={
          // (day, value, event) => {
          //   console.log("date", date)
          //   arr.map(date => new Date(date))
          //   console.log(day, value.target, this)
          //   console.log(arr)
          // }
          ({ activeStartDate, date, view }) => view === 'month' && date.getDay() === 3 ? 'wednesday' : console.log('not wed', activeStartDate)

        } 
        // titleClassName={
        // }
        />
      </div>
      <p className='text-center my-4'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
      </div>
      </div>
    </div>
    </div>
  );
}

export default App;
