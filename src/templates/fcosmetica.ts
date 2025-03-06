import { addKeyword, EVENTS } from "@builderbot/bot";
import { menuprincipal } from "./menuprincipal";
import { finalizar } from "./finalizar";

const fcosmetica = addKeyword(EVENTS.ACTION)
.addAnswer(`Te comparto el *Folleto COSMÉTICA* en PDF para que lo veas fácilmente 👀👇🏻`)
.addAnswer(` `, {
    media: "https://ik.imagekit.io/sfoxlr1gr/Cosmetica_C0225-1_compressed.pdf?updatedAt=1737600307724"
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

export {fcosmetica}
