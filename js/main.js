
document.addEventListener('DOMContentLoaded', function() {

    const btn = document.getElementById('openCloseBtn');
    const sidebar = document.querySelector('.sidebar');

    btn.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });


})