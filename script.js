document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        alert("🔥 Thanks for supporting ASHURA-INFX!");
    });
});

document.querySelectorAll('#gaming-corner article h3').forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling;
        content.style.display =
            content.style.display === 'none' ? 'block' : 'none';
    });
});