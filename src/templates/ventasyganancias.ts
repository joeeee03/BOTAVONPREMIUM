import { addKeyword, EVENTS } from "@builderbot/bot";
import { menuprincipal } from "./menuprincipal";
import { importes } from "./importes";
import { ganancias } from "./ganancias";
import { cuotas } from "./cuotas";

const ventasyganancias = addKeyword(EVENTS.ACTION)
.addAnswer(`Por favor, seleccione una opcion 👇`)
.addAnswer(
    [
        '*a.* Importes por ventas\n*b.* Ganancias\n*c.* Ventas en cuotas\n*d.* Volver al menú',
    ].join('\n'),
    { capture: true },
    async (ctx, { gotoFlow, fallBack }) => {
        if (!["a","b","A","B","c","C","d","D"].includes(ctx.body)) {
            return fallBack('Respuesta no válida, por favor selecciona una de las opciones.');
        }
        switch(ctx.body){
            case "a":
                return gotoFlow(importes);
                case "A":
                    return gotoFlow(importes);
                    case "b":
                        return gotoFlow(ganancias);
                        case "B":
                            return gotoFlow(ganancias);
                    case "c":
                        return gotoFlow(cuotas);
                        case "C":
                            return gotoFlow(cuotas);
                            case "d":
                        return gotoFlow(menuprincipal);
                        case "D":
                            return gotoFlow(menuprincipal);
    
        }
    },
);

export {ventasyganancias}