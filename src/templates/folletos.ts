import { addKeyword, EVENTS } from "@builderbot/bot";
import { menuprincipal } from "./menuprincipal";
import { fhome } from "./fhome";
import { fcosmetica } from "./fcosmetica";

const folletos = addKeyword(EVENTS.ACTION)
.addAnswer(`Seleccione el folleto que deseas ver 👇`)
.addAnswer(
    [
        '*a.* Folleto HOME\n*b.* Folleto CÓSMETICA\n*c.* Volver al menú',
    ].join('\n'),
    { capture: true },
    async (ctx, { gotoFlow, fallBack }) => {
        if (!["a","b","A","B","c","C"].includes(ctx.body)) {
            return fallBack('Respuesta no válida, por favor selecciona una de las opciones.');
        }
        switch(ctx.body){
            case "a":
                return gotoFlow(fhome);
                case "A":
                    return gotoFlow(fhome);
            case "b":
                return gotoFlow(fcosmetica);
                case "B":
                    return gotoFlow(fcosmetica);
                    case "c":
                        return gotoFlow(menuprincipal);
                        case "C":
                            return gotoFlow(menuprincipal);
    
        }
    },
);

export {folletos};