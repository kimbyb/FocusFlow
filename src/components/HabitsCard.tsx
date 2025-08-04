import type { Habit } from "types";


type Props = {
    habit: Habit;
    onToggleComplete: (id: number) => void;
};

const HabitsCard = ({ habit, onToggleComplete }: Props) => {
    return (
        <div className="border p-4 rounded shadow flex justify-between items-center">
            <label className="flex items-center space-x-2">
                <input
                    type="checkbox"
                    checked={habit.completed}
                    onChange={() => onToggleComplete(habit.id)}
                    className="accent-blue-500 w-5 h-5"
                />

                <span>{habit.name}</span>
            </label>

        </div>
    );
};

export default HabitsCard;
