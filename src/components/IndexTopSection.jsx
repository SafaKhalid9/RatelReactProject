import { useState } from 'react';
import axios from 'axios';
import '../styles/IndexTopSection.css';

export default function IndexTopSection({
    title,
    addLabel,
    onAddClick,
    endpoint,
    contextHook,
}) {
    const [searchTerm, setSearchTerm] = useState('');
    const { setData } = contextHook();

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.get(endpoint, {
                params: searchTerm ? { q: searchTerm } : {},
            });
            setData(res.data);
        } catch (err) {
            console.error('خطأ أثناء الجلب:', err);
        }
    };

    return (
        <>
            <h2>{title}</h2>
            <form className="filters-container mb-4" onSubmit={handleSearch}>
                <div className="add-btn-container">
                    <button
                        type="button"
                        className="add-btn"
                        onClick={onAddClick}
                    >
                        ➕ {addLabel}
                    </button>
                </div>

                <div>
                    <input
                        type="text"
                        className="form-control searchInput"
                        placeholder="بحث..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </form>
        </>
    );
}
