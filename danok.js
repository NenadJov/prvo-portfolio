var plata = prompt('vnesi iznos na plata vo EUR');
plata = parseInt(plata);
function calculateTax(plata) {
    if (typeof plata === 'number' && !isNaN(plata)) {
        if (plata < 1000 ){
            var i = plata * 11 / 100;
            console.log(i);
        } else {
            var i = (1000 * 11 / 100) + ((plata-1000) * 18 / 100);
            console.log(i);
        }
    } else {
        console.log('vnesi iznos na plata vo EUR');
    }   
}

calculateTax(plata);