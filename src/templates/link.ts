import { addKeyword, EVENTS } from "@builderbot/bot";
import { finalizar } from "./finalizar";
import { menuprincipal } from "./menuprincipal";

const link = addKeyword(EVENTS.ACTION)
.addAnswer(`Ya mismo te comparto el video para crear tu *link personalizado* 👀👇🏻`)
.addAnswer(` `, {
    media: "https://ik.imagekit.io/sfoxlr1gr/Tu%20Link%20Personal.mp4?updatedAt=1737599231516"
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

export {link};