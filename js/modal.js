import modalTexts from './data/modalTexts.js';

export function openModal(title) {
    const text = modalTexts[title];
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalText').innerText = text;
    const modal = document.getElementById('myModal');
    modal.classList.remove('hide');
    modal.classList.add('show');
    modal.style.display = 'flex';
}

export function closeModal() {
    const modal = document.getElementById('myModal');
    modal.classList.remove('show');
    modal.classList.add('hide');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 200);
}

window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        closeModal();
    }
};
