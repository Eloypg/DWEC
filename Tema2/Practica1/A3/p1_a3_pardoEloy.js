function recalculateSalary()
{
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var salary = parseFloat(document.getElementById("salary").value);
    var age = parseInt(document.getElementById("age").value);

    if (salary >= 1000 && salary <= 2000) {
        if (age > 45) {
            salary *= 1.03;
        } else {
            salary *= 1.10;
        }
    } else if (salary < 1000) {
        if (age < 30) {
            salary = 1100;
        } else if (age >= 30 && age <= 45) {
            salary *= 1.03;
        } else {
            salary *= 1.15;
        }
    }

    //Mostramos el resultado en el div del resultado
    document.getElementById("result").innerHTML =
        "<br>" + "Nombre: " + name + " " + surname + "<br>" +
        "Edad: " + age + "<br>" + 
        "Salario: " + salary.toFixed(2) + "€"
    ;
}