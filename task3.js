var x = prompt('Enter the mark');

if (x < 50) {
    document.write(' FAIL');
}
else if (x > 50 && x < 59) {
    document.write('mark will be D');
}
else if (x >= 60 && x < 69) {
    document.write('mark will be C');
}
else if (x >= 70 && x < 79) {
    document.write('mark will be B');
}
else if (x >= 80 && x < 89) {
    document.write('mark will be A');
}
else if (x >= 90 && x < 100) {
    document.write('mark will be A+');
}