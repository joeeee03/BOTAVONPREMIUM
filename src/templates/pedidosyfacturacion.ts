import { addKeyword, EVENTS } from "@builderbot/bot";
import { menuprincipal } from "./menuprincipal";
import { pasarpedido } from "./pasarpedido";
import { factura } from "./factura";
import { compraf } from "./compraf";
import { facturas } from "./facturas";

const pedidosyfacturacion = addKeyword(EVENTS.ACTION)
.addAnswer(`Por favor, seleccione una opcion 👇`)
.addAnswer(
    [
        '*a.* Pasar mi pedido\n*b.* Factura de revendedora\n*c.* Compra en folleto digital\n*d.* Volver al menú',
    ].join('\n'),
    { capture: true },
    async (ctx, { gotoFlow, fallBack }) => {
        if (!["a","b","A","B","c","C","d","D"].includes(ctx.body)) {
            return fallBack('Respuesta no válida, por favor selecciona una de las opciones.');
        }
        switch(ctx.body){
            case "a":
                return gotoFlow(pasarpedido);
                case "A":
                    return gotoFlow(pasarpedido);
                    case "b":
                        return gotoFlow(facturas);
                        case "B":
                            return gotoFlow(facturas);
                            case "c":
                                return gotoFlow(compraf);
                                case "C":
                                    return gotoFlow(compraf);
                    case "d":
                        return gotoFlow(menuprincipal);
                        case "D":
                            return gotoFlow(menuprincipal);
    
        }
    },
);

export {pedidosyfacturacion}