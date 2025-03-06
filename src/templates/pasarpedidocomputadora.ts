import { addKeyword, EVENTS } from "@builderbot/bot";
import { menuprincipal } from "./menuprincipal";
import { finalizar } from "./finalizar";

const pasarpedidocomputadora = addKeyword(EVENTS.ACTION)
.addAnswer(`Ya te mando el video para *pasar tu pedido desde la computadora* 👀👇🏻`)
.addAnswer(` `, {
    media: "https://ik.imagekit.io/eg3f7jpnp/C%C3%B3mo%20Cargar%20Pedido%20desde%20Computadora.mp4?updatedAt=1737507460347"
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

export {pasarpedidocomputadora};