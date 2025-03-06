import { addKeyword, EVENTS } from "@builderbot/bot";
const contadorsaludo = {}

const saludo = addKeyword(EVENTS.WELCOME)   
  .addAction(async (ctx, { flowDynamic, blacklist }) => {
    // Asegurar que contadorsaludo[ctx.from] tenga un valor inicial
    if (contadorsaludo[ctx.from] === undefined) {
      contadorsaludo[ctx.from] = 0;
    }

    if (contadorsaludo[ctx.from] === 0) {  // Corregido: comparación en lugar de asignación
      await flowDynamic(`¡Hola! Soy el asistente de Avon.\n\nEscribe "MENU" y estaré encantado de guiarte con las dudas que tengas. 😊`);
      contadorsaludo[ctx.from] = 1;  // Mantener el contador
    } else if (contadorsaludo[ctx.from] === 1) {  // Corregido
      await flowDynamic(`No encontré "MENU" en tu respuesta. Escríbelo cuando quieras y con gusto te ayudo. 💗`);
      contadorsaludo[ctx.from] = 2;
    }
      else {

        contadorsaludo[ctx.from] = 0;
       
        try{
        blacklist.add(ctx.from);
        console.log(`${ctx.from} añadido a la blacklist.`);

        // Configurar el temporizador para eliminar al usuario de la blacklist después de 1 minuto
        setTimeout(() => {
            try {
                blacklist.remove(ctx.from);
                console.log(`${ctx.from} eliminado de la blacklist después de 1 minuto.`);
            } catch (err) {
                console.error(`Error al eliminar de la blacklist: ${err.message}`);
            }
        }, 3 * 60 * 60 * 1000); // 3 horas en milisegundos
    } catch (err) {
        console.error(`Error al agregar a la blacklist: ${err.message}`);
    }
    }
  });

  export {saludo};