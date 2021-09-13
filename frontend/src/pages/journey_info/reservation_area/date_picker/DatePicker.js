import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import moment from 'moment'
function DatePicker(props) {
  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }
  return (
    <>
      <div className="d-flex justify-content-center Sample">
        <Calendar onChange={changeDate} showWeekNumbers value={dateState} />
      </div>
      <p className="text-center td-mt-25 fw-bold text-title-size24">
        你選擇的日期是
        <b>{moment(dateState).format('YYYY-MM-DD')}</b>
      </p>
    </>
  )
}

export default DatePicker
