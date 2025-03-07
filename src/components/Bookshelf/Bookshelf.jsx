import { useState } from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);
    const [newBook, setNewBook] = useState({
        title: '',
        author: ''
    });

    const handleInputChange = (event) => {
        setNewBook({ ...newBook, [event.target.name]: [event.target.value]});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!newBook.title || !newBook.author) {
        console.log(error);
        }
        setBooks((currentBooks) => [...currentBooks, newBook]);
        setNewBook({title: '', author: '',})
    };

    return (
        <>
            <div className="bookshelfDiv">
                <div className="formDiv">
                    <h3>Add a Book</h3>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="title"
                            placeholder="Book Title"
                            value={newBook.title}
                            onChange={handleInputChange}
                        />

                        <input
                            type="text"
                            name="author"
                            placeholder="Author"
                            value={newBook.author}
                            onChange={handleInputChange}
                        />
                        <button type="submit">Add Book</button>
                    </form>
                </div>
                <div className="bookCardsDiv">
                    <div className="bookCardsDiv">
                        {/* map through current books */}
                        {books.map((book, index) => (
                            <div key={index} className="bookCard">
                                <h4>{book.title}</h4>
                                <p>by {book.author}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
};

export default Bookshelf