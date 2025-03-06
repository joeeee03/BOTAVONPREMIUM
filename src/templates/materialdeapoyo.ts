import { addKeyword, EVENTS } from "@builderbot/bot";
import { folletos } from "./folletos";
import { fdigital } from "./fdigital";
import { menuprincipal } from "./menuprincipal";

const materialdeapoyo = addKeyword(EVENTS.ACTION)
.addAnswer(`Por favor, seleccione una opcion 👇`)
.addAnswer(
    [
        '*a.* Ver folletos\n*b.* Folleto digital AVON\n*c.* Volver al menú',
    ].join('\n'),
    { capture: true },
    async (ctx, { gotoFlow, fallBack }) => {
        if (!["a","b","A","B","c","C","d","D"].includes(ctx.body)) {
            return fallBack('Respuesta no válida, por favor selecciona una de las opciones.');
        }
        switch(ctx.body){
            case "a":
                return gotoFlow(folletos);
                case "A":
                    return gotoFlow(folletos);
                    case "b":
                        return gotoFlow(fdigital);
                        case "B":
                            return gotoFlow(fdigital);
                    case "c":
                        return gotoFlow(menuprincipal);
                        case "C":
                            return gotoFlow(menuprincipal);
    
        }
    },
);

export {materialdeapoyo};