function generate(){
    var books = {
        "Flowers For Algernon By Deniel Keyes" : '"Flowers for Algernon: Winner of both the Hugo and Nebula Awards, the powerful, classic story about a man who receives an operation that turns him into a genius...and introduces him to heartache. Charlie Gordon is about to embark upon an unprecedented journey. Born with an unusually low IQ, he has been chosen as the perfect subject for an experimental surgery that researchers hope will increase his intelligence-a procedure that has already been highly successful when tested..."',
        "The Hobbit By J.R.R. Tolkien" : '"The Hobbit: A glorious account of a magnificent adventure, filled with suspense and seasoned with a quiet humor that is irresistible... All those, young or old, who love a fine adventurous tale, beautifully told, will take The Hobbit to their hearts."',
        "The Hitchhikers Guide to the Galaxy By Douglas Adams" : '"The Hitchhikers Guide to the Galaxy is a comedy science fiction franchise created by Douglas Adams. Originally a 1978 radio comedy broadcast on BBC Radio 4, it was later adapted to other formats, including novels, stage shows, comic books, a 1981 TV series, a 1984 text adventure game, and 2005 feature film."',
        "The Last Wish By Andrzej Sapkowski" : '"Geralt the Witcher—revered and hated—is a man whose magic powers, enhanced by long training and a mysterious elixir, have made him a brilliant fighter and a merciless assassin. Yet he is no ordinary murderer: his targets are the multifarious monsters and vile fiends that ravage the land and attack the innocent.But not everything monstrous-looking is evil and not everything fair is good... and in every fairy tale there is a grain of truth."',
        "Crime and Punishment By Fyodor Dostoyevski" : '"Raskolnikov, a destitute and desperate former student, wanders through the slums of St Petersburg and commits a random murder without remorse or regret. He imagines himself to be a great man, a Napoleon: acting for a higher purpose beyond conventional moral law. But as he embarks on a dangerous game of cat and mouse with a suspicious police investigator, Raskolnikov is pursued by the growing voice of his conscience and finds the noose of his own guilt tightening around his neck. Only Sonya, a downtrodden sex worker, can offer the chance of redemption."',
        "Madame Bovary By Gustave Flaubert" : '"Madame Bovary tells the bleak story of a marriage that ends in tragedy. Charles Bovary, a good-hearted but dull and unambitious doctor with a meagre practice, marries Emma, a beautiful farm girl raised in a convent."',

    }
    var authors = Object.keys(books);

    var author = authors[Math.floor(Math.random()*authors.length)];

    var book = books[author];

    document.getElementById("book").innerHTML = book;
    document.getElementById("author").innerHTML = author;
}

