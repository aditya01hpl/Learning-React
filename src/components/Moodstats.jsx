import React from 'react';

const MoodStats = ({ moods }) => {
    const totalMoods = moods.length;
    const streak = moods.length; // Simplistic streak example

    return (
        <div className="stats">
            <h3>Mood Statistics</h3>
            <p>Total Entries: {totalMoods}</p>
            <p>Current Streak: {streak} days</p>
        </div>
    );
};

export default MoodStats;
