import { addKeyword, EVENTS } from "@builderbot/bot";
import { menuprincipal } from "./menuprincipal";
import { finalizar } from "./finalizar";

const factura = addKeyword(EVENTS.ACTION)
.addAnswer(`Te envío el video donde te explicamos cómo *descargar y pagar la factura* 👀👇🏻`)
.addAnswer(` `, {
    media: "https://ik.imagekit.io/eg3f7jpnp/Tu%20Factura%20Avon.%20_D%C3%B3nde%20encontrarla%20y%20c%C3%B3mo%20pagarla_.mp4?updatedAt=1737508393594"
})
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

export {factura};