
let timePassed = () => {
    const today = new Date();
    const MyDayOfBirth = new Date('1991-10-23');

    console.log(Math.floor((today.getTime() - MyDayOfBirth.getTime()) / (1000 * 60 * 60 * 24)) + ` days since I was born.`);
};

timePassed();