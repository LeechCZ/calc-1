import React, { useState } from 'react';
import styled from 'styled-components';

const CalendarWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  background-color: #f9f9f9;
  padding: 10px;
`;

const DayCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? 'lightblue' : 'transparent')};

  &:hover {
    background-color: ${({ isSelected }) => (isSelected ? 'lightblue' : '#e1e1e1')};
  }
`;

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const renderCalendar = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const startingDay = firstDayOfMonth.getDay();

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const calendar = [];

    for (let i = 0; i < startingDay; i++) {
      calendar.push(<DayCell key={`empty-${i}`} />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = selectedDate && selectedDate.getDate() === day;
      const date = new Date(year, month, day);

      calendar.push(
        <DayCell
          key={day}
          onClick={() => handleDateClick(date)}
          isSelected={isSelected}
        >
          {day}
        </DayCell>
      );
    }

    return calendar;
  };

  return <CalendarWrapper>{renderCalendar()}</CalendarWrapper>;
};

export default Calendar;
