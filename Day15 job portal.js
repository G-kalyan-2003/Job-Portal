document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Fetch job listings based on search criteria
    const keyword = document.getElementById('keywordInput').value;
    const location = document.getElementById('locationInput').value;
    const category = document.getElementById('categorySelect').value;

    // You can make an AJAX request here to fetch job listings from the backend
    // and then dynamically populate the #jobListings section with the results
    // For simplicity, let's just log the search criteria for now
    console.log('Keyword:', keyword);
    console.log('Location:', location);
    console.log('Category:', category);
});


