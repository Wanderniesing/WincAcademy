function assignGrade(score) {
    if (score > 90) {
        return 'A';

    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else {

    }
    return 'D';

}

for (var i = 70; i <= 100; i++) {
    console.log('For' + i + ', you got a' + assignGrade(i));
}
