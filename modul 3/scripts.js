/* /mnt/data/script.js */
document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const bookList = document.getElementById('book-list');

    // Contoh data buku
    const books = [
        { title: 'Bumi', author: 'Tere Liye', description: 'Novel Fiksi' },
        { title: 'Bulsn', author: 'Tere Liye', description: 'Novel Fiksi' },
        { title: 'Bintang', author: 'Tere Liye', description: 'Novel Fiksi' },
        
        // Tambahkan buku lainnya di sini
    ];

    searchButton.addEventListener('click', function() {
        const query = searchInput.value.toLowerCase();
        const filteredBooks = books.filter(book => 
            book.title.toLowerCase().includes(query) || 
            book.author.toLowerCase().includes(query)
        );
        displayBooks(filteredBooks);
    });

    function displayBooks(books) {
        bookList.innerHTML = '';
        if (books.length === 0) {
            bookList.innerHTML = '<p>Tidak ada buku ditemukan.</p>';
        } else {
            books.forEach(book => {
                const bookItem = document.createElement('div');
                bookItem.className = 'book-item';
                bookItem.innerHTML = `
                    <h3>${book.title}</h3>
                    <p><strong>Penulis:</strong> ${book.author}</p>
                    <p>${book.description}</p>
                `;
                bookList.appendChild(bookItem);
            });
        }
    }

    // Tampilkan semua buku saat pertama kali halaman dimuat
    displayBooks(books);
});
