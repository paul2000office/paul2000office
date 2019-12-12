var money = 5;
var price = 1;
var chocolates = 0;

while (money > 0)   {
    money -= price;
    chocolates++;
}

document.write("Am cumparat " + chocolates + " cioicolate");
document.write("</br>");
document.write("Am " + money + " lei")