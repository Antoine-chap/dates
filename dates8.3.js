let futur = (number) => {
    let numbers = number.target.value;
    let today = new Date();
    let hour = 1000 * 60 * 60;
    const inputNumber = Math.floor(numbers);

    const calculed = new Date((today.getTime() + (inputNumber * hour)

    ));
const end = calculed.toLocaleString("fr-BE", { timeZone: "Europe/Brussels"});
const selectP = document.querySelector('p');
selectP.textContent = end;
}

const input = document.getElementById('hours');
input.addEventListener('keyup',futur);