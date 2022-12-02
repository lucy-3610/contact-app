import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css';

function App() {
  const [date, setDate] = useState(new Date());
  const [contactDays, setContactDays] = useState([])
  // const savedDays = JSON.parse(localStorage.getItem("contactDays"))

  // useEffect(() => {
  //   localStorage.setItem("contactDays", JSON.stringify(contactDays))
  // })

  return (
    <div className='app'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-6'>
            <h1 className='text-center mt-5 mb-4'>Contact Calendar</h1>
            <div className='calendar-container d-flex justify-content-center'>
              <Calendar 
                calendarType='US'
                onChange={setDate} 
                value={date} 
                onClickDay={ date => contactDays.includes(date.toDateString()) ? setContactDays(contactDays.filter(day => day !== date.toDateString())) : setContactDays([...contactDays, date.toDateString()]) } 
                tileClassName={({ date, view }) => view === 'month' && contactDays.includes(date.toDateString()) ? 'selected' : null}
              />
            </div>
            <p className='text-center my-4'>
              <span className='bold'>Selected Date:</span> {date.toDateString()}
            </p>
            <p className="text-center">{contactDays.length}</p>
            <ul>
              {contactDays.map(day => <li key={day}>{day}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
