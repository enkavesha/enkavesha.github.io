$(document).ready(function () {
    function getAge(birth, exp) {
        var cur = new Date(),
            birth = new Date(birth),
            base = Math.pow(10, exp);
        age = Math.floor(((cur.getTime() - birth.getTime()) / (365.25 * 24 * 60 * 60 * 1000)) * base) / base;

        return age;
    }
    $('#age').text(getAge(new Date('1993/7/2'), 0));
    $('#exp').text(getAge(new Date('2017/12/1'), 1) + 'Y');
});
