import React, { useState, useEffect } from 'react';
import BookCard from '../components/BookCard';
import ReadingCounter from '../components/ReadingCounter';
import type { Book } from '../types';

const Books = () => {
    const [books, setBooks] = useState<Book[]>(() => {
        const saved = localStorage.getItem('books');
        return saved ? JSON.parse(saved) : [];
    });
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [status, setStatus] = useState<'reading' | 'finished'>('reading');
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('books');
        if (saved) {
            setBooks(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books]);

    const handleAddBook = (e: React.FormEvent) => {
        e.preventDefault();

        const newBook: Book = {
            id: books.length + 1,
            title,
            author,
            status,
        };

        setBooks([...books, newBook]);
        setTitle('');
        setAuthor('');
        setStatus('reading');
        setShowForm(false);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">📚 My Books</h1>
            <ReadingCounter />
            <button
                onClick={() => setShowForm(!showForm)}
                className="mt-4 mb-6 bg-blue-500 text-white px-4 py-2 rounded"
            >
                {showForm ? 'Cancel' : '➕ Add Book'}
            </button>

            {showForm && (
                <form onSubmit={handleAddBook} className="space-y-2 mb-8">
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title"
                        className="border p-2 w-full"
                    />
                    <input
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        placeholder="Author"
                        className="border p-2 w-full"
                    />
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value as 'reading' | 'finished')}
                        className="border p-2 w-full"
                    >
                        <option value="reading">Reading</option>
                        <option value="finished">Finished</option>
                    </select>
                    <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                        ✅ Add
                    </button>
                </form>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {books.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default Books;
