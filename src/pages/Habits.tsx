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
    const [showForm, setShowForm] = useState(false);


    useEffect(() => {
        const saved = localStorage.getItem('habits');
        if (saved) {
            setHabits(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('habits', JSON.stringify(habits));
    }, [habits]);

    const handleAddHabit = (e: React.FormEvent) => {
        e.preventDefault();

        const newHabit: Habit = {
            id: habits.length + 1,
            name,
            completed
        };

        setHabits([...habits, newHabit]);
        setName('');
        setCompleted(false);
        setShowForm(false);
    };

    return (
        <div>
            <h1 className="text-2xl font-bold">📚 My Habits</h1>
            <button
                onClick={() => setShowForm(!showForm)}
                className="mt-4 mb-6 bg-blue-500 text-white px-4 py-2 rounded">
                {showForm ? 'Cancel' : 'Add Habit'}
            </button>

            {showForm && (
                <form onSubmit={handleAddHabit} className="space-y-2 mb-8">
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        className="border p-2 w-full"
                    />
                    <input
                        type="checkbox"
                        checked={completed}
                        onChange={() => setCompleted(!completed)}
                    />
                    <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                        ✅ Add
                    </button>
                </form>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {habits.map((habits) => (
                    <HabitsCard key={habits.id} habit={habits}
                    />
                ))}
            </div>
        </div>
    );
}

export default Habits;