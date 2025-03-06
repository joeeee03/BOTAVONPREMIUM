import { addKeyword, EVENTS } from "@builderbot/bot";
import { menuprincipal } from "./menuprincipal";
import { finalizar } from "./finalizar";

const regalo = addKeyword(EVENTS.ACTION)   
.addAnswer(`¡Mira como te *acompañamos* en cada paso de tu camino! 👀👇🏻`)
.addAnswer(` `, {
    media: "https://i.postimg.cc/fkn6G5xc/Whats-App-Image-2025-01-25-at-11-10-32.png"
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

export {regalo}