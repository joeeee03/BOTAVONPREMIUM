import { addKeyword, EVENTS } from "@builderbot/bot";
import { menuprincipal } from "./menuprincipal";
import { link } from "./link";
import { fechas } from "./fechas";

const campañasypromociones = addKeyword(EVENTS.ACTION)
.addAnswer(`Por favor, seleccione una opcion 👇`)
.addAnswer(
    [
        '*a.* Link personal campaña\n*b.* Duración de la campaña\n*c.* Volver al menú',
    ].join('\n'),
    { capture: true },
    async (ctx, { gotoFlow, fallBack }) => {
        if (!["a","b","A","B","c","C","d","D"].includes(ctx.body)) {
            return fallBack('Respuesta no válida, por favor selecciona una de las opciones.');
        }
        switch(ctx.body){
            case "a":
                return gotoFlow(link);
                case "A":
                    return gotoFlow(link);
                    case "b":
                        return gotoFlow(fechas);
                        case "B":
                            return gotoFlow(fechas);
                    case "c":
                        return gotoFlow(menuprincipal);
                        case "C":
                            return gotoFlow(menuprincipal);
    
        }
    },
);

export {campañasypromociones};