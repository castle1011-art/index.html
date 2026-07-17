// ==========================================
// app.js
// ==========================================

import "./firebase.js";
import "./auth.js";
import "./utilidades.js";
import "./cloudinary.js";
import "./archivos.js";
import "./medicinas.js";
import "./agenda.js";
import "./chat.js";

document.addEventListener("DOMContentLoaded", () => {

    console.log("✅ VitalFlow iniciado");

    // Buscador universal
    const buscador = document.getElementById("universalSearch");

    if (buscador) {

        buscador.addEventListener("keydown", (e) => {

            if (e.key === "Enter") {

                Buscar.enWeb();

            }

        });

    }

    // Chat
    const entradaChat = document.getElementById("msgChatInput");

    if (entradaChat) {

        entradaChat.addEventListener("keydown", (e) => {

            if (e.key === "Enter" && !e.shiftKey) {

                e.preventDefault();

                Chat.enviarMensaje();

            }

        });

    }

    // Cargar datos al iniciar sesión
    if (typeof cargarDatos === "function" && usuarioActual) {

        cargarDatos();

    }

});
