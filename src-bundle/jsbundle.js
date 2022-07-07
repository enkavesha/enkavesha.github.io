function getAge(birth, exp) {
    let cur = new Date(),
        birthday = new Date(birth),
        base = Math.pow(10, exp);
    return Math.floor(((cur.getTime() - birthday.getTime()) / (365.25 * 24 * 60 * 60 * 1000)) * base) / base;
}

document.querySelector('#age').innerText = getAge(new Date('1993/7/2'), 0);
document.querySelector('#exp').innerText = getAge(new Date('2017/12/1'), 1) + 'Y';

function checkOrientation() {
    var isPortrait;

    if (window.innerWidth > window.innerHeight) {
        document.body.classList.remove('portrait');
        document.body.classList.add('landscape');
        isPortrait = false;
    } else {
        document.body.classList.add('portrait');
        document.body.classList.remove('landscape');
        isPortrait = true;
    }

    if ((isPortrait && (window.innerWidth / window.innerHeight) > 0.67) || (!isPortrait && (window.innerWidth / window.innerHeight) < 1.5)) {
        document.body.classList.add('tablet');
    } else {
        document.body.classList.remove('tablet');
    }
}

window.addEventListener('resize', function () {
    checkOrientation();
});
window.dispatchEvent(new Event('resize'));

