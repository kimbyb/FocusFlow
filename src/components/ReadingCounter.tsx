import { useState } from "react";

const ReadingCounter = () => {
    const [pages, setPages] = useState(0);

    const addPage = () => {
        setPages(pages + 1);
    }

    const removePage = () => {
        setPages(pages > 0 ? pages - 1 : 0);
    }

    const resetPages = () => {
        setPages(0);
    }

    return (
        <div className="border rounded p-4 shadow w-full max-w-sm">
            <h2 className="text-lg font-semibold mb-2">📖 Pages Read Today</h2>
            <p className="text-2xl font-bold mb-4">Pages read: {pages}</p>
            <div className="flex space-x-3 ">
                <button onClick={addPage}>➕</button>
                <button onClick={removePage}>➖</button>
                <button onClick={resetPages}>♻️</button>
            </div>
        </div>
    )
}

export default ReadingCounter;