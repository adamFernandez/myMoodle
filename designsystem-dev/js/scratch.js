// hide toc for single chapter book
$(".block_book_toc .content ul > li:only-child strong:only-child").parents(".block_book_toc").hide();

// hide toc for single chapter book in print
$("#page-mod-book-print .book_toc_numbered ul
li:only-child").parents("#page-content").addClass("single-chapter-book");
