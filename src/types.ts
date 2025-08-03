export type Book = {
    id: number;
    title: string;
    author: string;
    status: 'reading' | 'finished';
};

export type Habit = {
    id: number;
    name: string;
    completed: boolean;
}