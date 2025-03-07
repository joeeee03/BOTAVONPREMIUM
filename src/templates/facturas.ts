import { addKeyword, EVENTS } from "@builderbot/bot";
import { menuprincipal } from "./menuprincipal";
import { link } from "./link";
import { fechas } from "./fechas";
import { factura } from "./factura";
import { facturawsp } from "./facturawsp";

const facturas = addKeyword(EVENTS.ACTION)
.addAnswer(`Por favor, seleccione una opcion 👇`)
.addAnswer(
    [
        '*a.* Factura por pagina\n*b.* Factura por whatsapp\n*c.* Volver al menú',
    ].join('\n'),
    { capture: true },
    async (ctx, { gotoFlow, fallBack }) => {
        if (!["a","b","A","B","c","C","d","D"].includes(ctx.body)) {
            return fallBack('Respuesta no válida, por favor selecciona una de las opciones.');
        }
        switch(ctx.body){
            case "a":
                return gotoFlow(factura);
                case "A":
                    return gotoFlow(factura);
                    case "b":
                        return gotoFlow(facturawsp);
                        case "B":
                            return gotoFlow(facturawsp);
                    case "c":
                        return gotoFlow(menuprincipal);
                        case "C":
                            return gotoFlow(menuprincipal);
    
        }
    },
);

export {facturas};