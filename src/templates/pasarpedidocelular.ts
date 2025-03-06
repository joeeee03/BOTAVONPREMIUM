import { addKeyword, EVENTS } from "@builderbot/bot";
import { menuprincipal } from "./menuprincipal";
import { finalizar } from "./finalizar";

const pasarpedidocelular = addKeyword(EVENTS.ACTION)
.addAnswer(`Aca abajo te dejo un video para *pasar el pedido desde tu celular* 👀👇🏻`)
.addAnswer(` `, {
    media: "https://ik.imagekit.io/eg3f7jpnp/AQON6cc45cw-NTK76GrcRWZyMibzRptWgeQrACn2vxgeVP_0C5KX6N5-i4rog7niVDw9F-34a-sVWmZ1JekAO_wh.mp4?updatedAt=1737506675140"
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

export {pasarpedidocelular}