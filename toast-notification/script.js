const btn = document.getElementById('btn');
const container = document.getElementById('container');

btn.addEventListener('click', () => {
    createNotification();
});

function createNotification(){
    const notification = document.createElement('div');
    notification.classList.add('toast');

    notification.innerText = 'This is CRAZY!!';

    container.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}