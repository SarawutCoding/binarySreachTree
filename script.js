
const sreachForm = document.querySelector('#sreachForm');
const sreachText = document.querySelector('#sreachText');

sreachForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const sreachValue = sreachText.value;
    console.log(sreachValue);
})
