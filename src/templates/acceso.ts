import { addKeyword, EVENTS } from "@builderbot/bot";
import { menuprincipal } from "./menuprincipal";
import { finalizar } from "./finalizar";

const acceso = addKeyword(EVENTS.ACTION)
.addAnswer(`Puedes acceder a la página de Avon mediante el siguiente enlace 👀👇🏻\n\nhttps://www.ar.avon.com/REPSuite/loginMain.page 🌐\n\n¡Ahí encontrarás todo lo que necesitas!`)
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

export {acceso};