const botonRegalo =
    document.getElementById("botonRegalo");

const pantallaInicial =
    document.getElementById("pantallaInicial");

const escena =
    document.getElementById("escena");


/* ================================= */
/* BOTÓN DEL REGALO */
/* ================================= */

botonRegalo.addEventListener(
    "click",
    () => {

        /*
        Primero desaparece
        la pantalla inicial.
        */

        pantallaInicial.classList.add(
            "ocultar"
        );


        /*
        Después de 700 ms
        aparece la escena.
        */

        setTimeout(() => {

            escena.classList.add(
                "mostrar"
            );

        }, 700);

    }
);