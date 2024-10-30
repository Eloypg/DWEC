let colores = ["Naranja", "Lima", "Turquesa", "Rosa", "Rojo"];
let codigos = ["#F39C12", "#C0F312", "#12F3E5", "#F312AF", "#F31212"];

// Recorremos los arrays y mostramos cada color con su código
for (let i = 0; i < colores.length; i++) {
    let color = colores[i];
    let codigoColor = codigos[i];
    document.write(`<p style="color: ${codigoColor}">${color}: ${codigoColor}</p>`);
}