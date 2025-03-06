import { addKeyword, EVENTS } from "@builderbot/bot";
import { menuprincipal } from "./menuprincipal";
import { finalizar } from "./finalizar";

const importes = addKeyword(EVENTS.ACTION)
.addAnswer(`🌟 Para quienes recién inician:\nEl mínimo de venta es de *$50000* y el máximo es de *$70000.*\n\n🔸 ¿Qué significa esto?\nPueden vender todo lo que deseen, ¡sin límite! 🙌\n
Si se exceden del máximo, deben adelantar el pago de la mercancía extra durante las primeras *6 campañas.*\n\n✅ Después de la *7ª campaña*, y según el cumplimiento, podrán acceder a más crédito.`)
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

export {importes};