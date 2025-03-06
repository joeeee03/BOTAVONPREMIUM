import { addKeyword, EVENTS } from "@builderbot/bot";
import { menuprincipal } from "./menuprincipal";
import { pasarpedidocelular } from "./pasarpedidocelular";
import { pasarpedidocomputadora } from "./pasarpedidocomputadora";

const pasarpedido = addKeyword(EVENTS.ACTION)
.addAnswer(`Por favor, seleccioná el dispositivo con el que quieres pasar el pedido 👇`)
.addAnswer(
    [
        '*a.* Celular\n*b.* Computadora\n*c.* Volver al menú',
    ].join('\n'),
    { capture: true },
    async (ctx, { gotoFlow, fallBack }) => {
        if (!["a","b","A","B","c","C"].includes(ctx.body)) {
            return fallBack('Respuesta no válida, por favor selecciona una de las opciones.');
        }
        switch(ctx.body){
            case "a":
                return gotoFlow(pasarpedidocelular);
                case "A":
                    return gotoFlow(pasarpedidocelular);
            case "b":
                return gotoFlow(pasarpedidocomputadora);
                case "B":
                    return gotoFlow(pasarpedidocomputadora);
                    case "c":
                        return gotoFlow(menuprincipal);
                        case "C":
                            return gotoFlow(menuprincipal);
    
        }
    },
);

export {pasarpedido}