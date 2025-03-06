import { addKeyword, EVENTS } from "@builderbot/bot";
import { menuprincipal } from "./menuprincipal";
import { finalizar } from "./finalizar";

const cambios = addKeyword(EVENTS.ACTION)
.addAnswer(`Te envío el video explicativo sobre cómo *gestionar cambios y devoluciones* 👀👇🏻`)
.addAnswer(` `, {
    media: "https://ik.imagekit.io/eg3f7jpnp/Gestion%20de%20Cambios%20y%20Devoluciones.mp4?updatedAt=1737508734534"
})
.addAnswer(
    [
        '*a.* Volver al menú\n*b.* Finalizar',
    ].join('\n'),
    { capture: true },
    async (ctx, { gotoFlow, fallBack }) => {
        if (!["a","b","A","B"].includes(ctx.body)) {
            return fallBack('Respuesta no válida, por favor selecciona una de las opciones.');
        }
        switch(ctx.body){
            case "a":
                return gotoFlow(menuprincipal);
                case "A":
                    return gotoFlow(menuprincipal);
            case "b":
                return gotoFlow(finalizar);
                case "B":
                    return gotoFlow(finalizar);
    
        }
    },
);

export {cambios};