import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css';

function App() {
  const [date, setDate] = useState(new Date());
  const [contactDays, setContactDays] = useState([])

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
                onClickDay={ date => setContactDays([...contactDays, date.toDateString()])
                } 
                // titleClassName={}
              />
            </div>
            <p className='text-center my-4'>
              <span className='bold'>Selected Date:</span> {date.toDateString()}
            </p>
            <p className="text-center">{contactDays.length}</p>
            <ul>
              {contactDays.map(day => <li>{day}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
