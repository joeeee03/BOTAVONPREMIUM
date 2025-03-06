import { addKeyword, EVENTS } from "@builderbot/bot";

const otraduda = addKeyword(EVENTS.ACTION)
    .addAnswer(
        `Déjame en el siguiente mensaje tu duda, en breve te responderemos`,
        { capture: true } // Habilita la captura de respuestas
    )
    .addAction(async (ctx, { blacklist, gotoFlow }) => {  // Cambié a async
        try {
            // Agregar el usuario a la blacklist
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
        return gotoFlow(dudarecibida);  // Usamos await aquí
    });


    const dudarecibida = addKeyword(EVENTS.ACTION)
    .addAnswer(`¡Gracias por dejarnos tu consulta! En breves recibiras respuestas`)

    export {otraduda, dudarecibida}