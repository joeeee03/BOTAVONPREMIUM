import { addKeyword, EVENTS } from "@builderbot/bot";
import { menuprincipal } from "./menuprincipal";
import { finalizar } from "./finalizar";

const fdigital = addKeyword(EVENTS.ACTION)
.addAnswer(`¡Aquí tienes un video explicativo sobre los *folletos digitales de AVON!* 👀👇🏻`)
.addAnswer(` `, {
    media: "https://ik.imagekit.io/sfoxlr1gr/Descubr%C3%AD%20el%20Folleto%20Digital%20Avon.mp4?updatedAt=1737599237532"
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

export {fdigital};