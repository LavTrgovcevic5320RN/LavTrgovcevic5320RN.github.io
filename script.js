// window.onscroll = function() {scrollFunction()};
//
// function scrollFunction() {
//     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//         document.getElementById("navbar").style.padding = "30px 10px";
//         document.getElementById("logo").style.fontSize = "25px";
//     } else {
//         console.log("USAO");
//         document.getElementById("navbar").style.padding = "80px 10px";
//         document.getElementById("logo").style.fontSize = "35px";
//     }
// }


const searchInput = document.querySelector('.search-container input[type="text"]');
const searchResults = document.querySelector('.search-container .search-results');

searchInput.addEventListener('input', function() {
    const searchTerm = this.value.trim().toLowerCase();

    // Call the search function with the search term
    search(searchTerm);
});

function search(searchTerm) {
    // Perform the search and update the search results
    // Here's an example of how to do this using an array of items
    const items = [
        'Apple',
        'Banana',
        'Cherry',
        'Grape',
        'Kiwi',
        'Lemon',
        'Mango',
        'Orange',
        'Pineapple',
        'Strawberry'
    ];

    const filteredItems = items.filter(function(item) {
        return item.toLowerCase().indexOf(searchTerm) !== -1;
    });

    // Clear the search results
    searchResults.innerHTML = '';

    // Add the filtered items to the search results
    filteredItems.forEach(function(item) {
        const li = document.createElement('li');
        li.textContent = item;
        searchResults.appendChild(li);
    });

    // Show the search results
    if (filteredItems.length > 0) {
        searchResults.style.display = 'block';
    } else {
        searchResults.style.display = 'none';
    }
}
