type Habit = {
    id: number;
    name: String;
    completed: boolean;
}

type Props = {
    habit: Habit;
}

const HabitsCard = ({ habit }: Props) => {
    return (
        <div className="border p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{habit.name}</h2>
            <p> {habit.completed} </p>
        </div>
    )
}

export default HabitsCard;