/*Tady bych si představoval něco jako jestli je lichý nebo sudý týden, co je dnes za den.
Možná kdo má svátek, eventualně státní svátky a prázdniny. Zkuste něco vymyslet já už nemůžu je mi fakt na nic.*/

//react component that will show the current day and week, if the week is even or odd, whose name day it is, and if there are any holidays according to the Czech calendar using material-ui

import React from 'react';
import styled from 'styled-components';

const DaysAndWeeksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    background-color: #333;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 3px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

    .day {
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
        margin-bottom: 10px;
    }

    .week {
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
        margin-bottom: 10px;
    }

    .nameDay {
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
        margin-bottom: 10px;
    }

    .holiday {
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
        margin-bottom: 10px;
    }
`;
//function for the coponent below that will gather neccesary data to display in the component

const DaysAndWeeks = () => {
    return (
        <DaysAndWeeksWrapper>
            <div className="day">Dnes je: </div>
            <div className="week">Dnes je: </div>
            <div className="nameDay">Dnes má svátek: </div>
            <div className="holiday">Dnes je: </div>
        </DaysAndWeeksWrapper>
    );
}

export default DaysAndWeeks;
