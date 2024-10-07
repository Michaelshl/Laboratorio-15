let carrito = [];
let total = 0;

function agregarAlCarrito(producto, precio) {
    carrito.push({ producto, precio });
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoContenido = document.getElementById('carrito-contenido');
    carritoContenido.innerHTML = '';
    carrito.forEach(item => {
        carritoContenido.innerHTML += `<p>${item.producto} - $${item.precio.toFixed(2)}</p>`;
    });
    document.getElementById('total').textContent = total.toFixed(2);
}

function validarRegistro(event) {
    event.preventDefault();
    const identificacion = document.getElementById('identificacion').value;
    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const correo = document.getElementById('correo').value;
    
    if (!identificacion || !nombres || !apellidos || !correo) {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
    }

    if (!/\S+@\S+\.\S+/.test(correo)) {
        alert('Ingrese un correo electrónico válido.');
        return;
    }

    alert('Registro completado con éxito.');
}
