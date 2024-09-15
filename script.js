document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.list-group-item');
    items.forEach((item, index) => {
        item.style.opacity = 0;
        setTimeout(() => {
            item.style.transition = 'opacity 1s';
            item.style.opacity = 1;
        }, index * 200);
    });
});
