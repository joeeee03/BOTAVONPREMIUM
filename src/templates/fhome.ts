import { addKeyword, EVENTS } from "@builderbot/bot";
import { menuprincipal } from "./menuprincipal";
import { finalizar } from "./finalizar";

const fhome = addKeyword(EVENTS.ACTION)
.addAnswer(`Te comparto el *Folleto HOME* en PDF para que lo veas fácilmente 👀👇🏻`)
.addAnswer(` `, {
    media: "https://ik.imagekit.io/sfoxlr1gr/FashionNHome_C0225-1.pdf?updatedAt=1737600085827"
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

export {fhome};