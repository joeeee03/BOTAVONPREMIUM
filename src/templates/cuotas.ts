import { addKeyword, EVENTS } from "@builderbot/bot";
import { menuprincipal } from "./menuprincipal";
import { finalizar } from "./finalizar";

const cuotas = addKeyword(EVENTS.ACTION)
.addAnswer(`✨ *VENTAS EN CUOTA* ✨\n\nPara acceder a esta opción, necesitas al menos *6 campañas de antigüedad. 🌟*\n\nAsí podrás aprovechar este beneficio y ofrecer más facilidades a tus clientes. 💳😊`)
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

export {cuotas}