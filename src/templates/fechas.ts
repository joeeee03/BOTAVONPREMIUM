import { addKeyword, EVENTS } from "@builderbot/bot";
import { menuprincipal } from "./menuprincipal";
import { finalizar } from "./finalizar";

const fechas = addKeyword(EVENTS.ACTION)
.addAnswer("Las *fechas de las campañas activas* se muestran directamente en el ícono de cada grupo, dependiendo de la campaña en la que estés.\n\n✅ Así podrás ver al instante:\n\n- *Estado* de la campaña.\n- *Duración* de la campaña.")
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

export {fechas};