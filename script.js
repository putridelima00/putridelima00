document.addEventListener("DOMContentLoaded", function() {
    const books = [
        { title: "Judul Buku 1", description: "Deskripsi singkat buku 1.", image: "book1.jpg", link: "https://drive.google.com/file/d/1exampleLink1/view" },
        { title: "Judul Buku 2", description: "Deskripsi singkat buku 2.", image: "book2.jpg", link: "https://drive.google.com/file/d/2exampleLink2/view" },
        { title: "Judul Buku 3", description: "Deskripsi singkat buku 3.", image: "book3.jpg", link: "https://drive.google.com/file/d/3exampleLink3/view" },
        { title: "Judul Buku 4", description: "Deskripsi singkat buku 4.", image: "book4.jpg", link: "https://drive.google.com/file/d/4exampleLink4/view" },
        { title: "Judul Buku 5", description: "Deskripsi singkat buku 5.", image: "book5.jpg", link: "https://drive.google.com/file/d/5exampleLink5/view" },
        { title: "Judul Buku 6", description: "Deskripsi singkat buku 6.", image: "book6.jpg", link: "https://drive.google.com/file/d/6exampleLink6/view" },
        { title: "Judul Buku 7", description: "Deskripsi singkat buku 7.", image: "book7.jpg", link: "https://drive.google.com/file/d/7exampleLink7/view" },
        { title: "Judul Buku 8", description: "Deskripsi singkat buku 8.", image: "book8.jpg", link: "https://drive.google.com/file/d/8exampleLink8/view" }
    ];

    const gallery = document.querySelector('.gallery');

    books.forEach(book => {
        const bookExhibit = document.createElement('div');
        bookExhibit.classList.add('book-exhibit');
        bookExhibit.addEventListener('click', () => {
            window.open(book.link, '_blank');
        });

        const img = document.createElement('img');
        img.src = book.image;
        img.alt = book.title;

        const title = document.createElement('h2');
        title.textContent = book.title;

        const description = document.createElement('p');
        description.textContent = book.description;

        bookExhibit.appendChild(img);
        bookExhibit.appendChild(title);
        bookExhibit.appendChild(description);
        gallery.appendChild(bookExhibit);
    });
});
