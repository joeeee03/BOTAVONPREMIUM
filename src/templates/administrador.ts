import { addKeyword, EVENTS } from "@builderbot/bot";

const administrador = addKeyword("adminirma")
.addAnswer(`Este es el panel de administrador, que desea hacer? 👇🏻`)
.addAnswer(
    [
        '*a.* Agregar a la blacklist\n*b.* Eliminar de la blacklist',
    ].join('\n'),
    { capture: true },
    async (ctx, { gotoFlow, fallBack }) => {
        if (!["a","b","A","B"].includes(ctx.body)) {
            return fallBack('Respuesta no válida, por favor selecciona una de las opciones.');
        }
        switch(ctx.body){
            case "a":
                return gotoFlow(agregarbl);
                case "A":
                    return gotoFlow(agregarbl);
            case "b":
                return gotoFlow(eliminarbl);
                case "B":
                    return gotoFlow(eliminarbl);
        }
    },
);

const agregarbl = addKeyword(EVENTS.ACTION)
.addAnswer(
  `Indíqueme el número de teléfono de la persona`,
  { capture: true } // Habilita la captura de respuestas
)
.addAction(async (ctx, { blacklist, flowDynamic }) => { // Agregar async aquí
    try {
    // Agregar el número limpio a la blacklist
    blacklist.add(ctx.body.replace(/\D/g, ""));
    console.log(`${ctx.body.replace(/\D/g, "")} añadido a la blacklist.`);

    // Enviar un mensaje confirmando que el número se añadió a la blacklist
    await flowDynamic(`${ctx.body.replace(/\D/g, "")} ha sido añadido a la blacklist.`); // Usar await
} catch (error) {
    console.error(`Error al agregar a la blacklist:`, error);
    await flowDynamic(`Hubo un error al agregar el número a la blacklist. Por favor, intente nuevamente.`);
}
});


const eliminarbl = addKeyword(EVENTS.ACTION)
.addAnswer(
  `Indíqueme el número de teléfono de la persona`,
  { capture: true } // Habilita la captura de respuestas
)
.addAction(async (ctx, { blacklist, flowDynamic }) => { // Añadir async aquí
  try {
    // Eliminar el número limpio de la blacklist
    blacklist.remove(ctx.body.replace(/\D/g, ""));
    console.log(`${ctx.body.replace(/\D/g, "")} removido de la blacklist.`);

    // Enviar un mensaje confirmando que el número fue removido
    await flowDynamic(`${ctx.body.replace(/\D/g, "")} ha sido removido de la blacklist.`); // Usar await
  } catch (err) {
    console.error(`Error al eliminar de la blacklist: ${err.message}`);
  }
});

export {administrador, agregarbl, eliminarbl}