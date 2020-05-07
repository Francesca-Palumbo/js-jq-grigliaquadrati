// Creare in HTML una griglia di 5x5 quadrati vuoti.
// Con jQuery, scrivere un numero random tra 0 e 10 dentro ognuno.
// BONUS 1: generare la griglia con jQuery
// BONUS 2: se il numero da inserire è pari scriverlo in rosso, se è dispari in nero, se è 0 in verde

$('.quadrato').each(function(){
    var numero_random = genera_random(1, 10);

    if (numero_random % 2 == 0) {
        $(this).addClass('rosso');
    } else if ((numero_random==0)) {
        $(this).addClass('verde');
    }else {
        $(this).addClass('nero');
    }
});




function genera_random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
