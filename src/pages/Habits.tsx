import React, { useEffect, useState } from "react";
import HabitsCard from "../components/HabitsCard";
import type { Habit } from '../types';

const Habits = () => {
    const [habits, setHabits] = useState<Habit[]>(() => {
        const saved = localStorage.getItem('habits');
        return saved ? JSON.parse(saved) : [];
    });
    const [name, setName] = useState('');
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('habits');
        if (saved) {
            setHabits(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('habits', JSON.stringify(habits));
    }, [habits]);


    return (
        <div>
            <h1 className="text-2xl font-bold">📚 My Habits</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {habits.map((habits) => (
                    <HabitsCard key={habits.id} habit={{
                        id: 0,
                        name: 'undefined',
                        completed: false
                    }} />
                ))}
            </div>
        </div>
    );
}

export default Habits;