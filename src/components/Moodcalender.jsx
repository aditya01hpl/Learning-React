import React from 'react';

const Moodcalendar = ({ moods }) => {
    return (
        <div className="calendar">
            {moods.map((entry, index) => (
                <div key={index} className="calendar-day">
                    <p>{entry.date}</p>
                    <p>{entry.mood}</p>
                    <p>{entry.desc}</p>
                </div>
            ))}
        </div>
    );
};

export default Moodcalendar;
