// hide toc for single chapter book
$(".block_book_toc .content ul > li:only-child strong:only-child").parents(".block_book_toc").hide();

// add single-chapter-book class to screen and print to hide toc and title
$(".block_book_toc .content ul > li:only-child, #page-mod-book-print .book_toc_numbered ul li:only-child").parents("#page-content").addClass("single-chapter-book");
