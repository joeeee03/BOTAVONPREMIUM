import { addKeyword, EVENTS } from "@builderbot/bot";
import { menuprincipal } from "./menuprincipal";
import { finalizar } from "./finalizar";

const compraf = addKeyword(EVENTS.ACTION)
.addAnswer(`Te explico como hacer una compra desde el *Folleto digital* fácilmente 👀👇🏻`)
.addAnswer(` `, {
    media: "https://ik.imagekit.io/eg3f7jpnp/WhatsApp%20Video%202025-02-28%20at%2021.19.25.mp4?updatedAt=1741304552178"
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

export {compraf};