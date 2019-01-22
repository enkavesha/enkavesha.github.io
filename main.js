function getAge(birth, exp) {
    let cur = new Date(),
        birthday = new Date(birth),
        base = Math.pow(10, exp);
    return Math.floor(((cur.getTime() - birthday.getTime()) / (365.25 * 24 * 60 * 60 * 1000)) * base) / base;
}

document.querySelector('#age').innerText = getAge(new Date('1993/7/2'), 0);
document.querySelector('#exp').innerText = getAge(new Date('2017/12/1'), 1) + 'Y';

