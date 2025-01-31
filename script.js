// Smooth scrolling for anchor links (if needed)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic content loading (optional)
// Example: Load content dynamically for a single-page app feel
// Uncomment and modify as needed
/*
document.addEventListener('DOMContentLoaded', function () {
    const loadContent = async (url) => {
        const response = await fetch(url);
        const data = await response.text();
        document.querySelector('main').innerHTML = data;
    };

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const page = this.getAttribute('href');
            history.pushState(null, null, page);
            loadContent(page);
        });
    });

    window.addEventListener('popstate', function () {
        loadContent(location.pathname);
    });
});
*/

// Back to Home button functionality
document.querySelectorAll('.back-home').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = 'index.html';
    });
});



// document.getElementById('contact-form').addEventListener('submit', function(e) {
//     e.preventDefault();
//     const form = this;
    
//     // Show loading state
//     const submitBtn = form.querySelector('.submit-btn');
//     submitBtn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
    
//     // Submit form
//     fetch(form.action, {
//         method: 'POST',
//         body: new FormData(form)
//     })
//     .then(response => {
//         if (response.ok) {
//             // Show success message
//             document.getElementById('success-message').style.display = 'block';
//             form.reset();
//         }
//     })
//     .catch(error => {
//         alert('Error sending message. Please try again.');
//     })
//     .finally(() => {
//         submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
//     });
// });