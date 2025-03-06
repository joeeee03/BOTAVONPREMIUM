import { addKeyword, EVENTS } from "@builderbot/bot";
import { menuprincipal } from "./menuprincipal";
import { finalizar } from "./finalizar";

const datospersonales = addKeyword(EVENTS.ACTION)   
.addAnswer(`Te dejo unas imagenes para que puedas *actualizar tus datos personales* 👀👇🏻`)
.addAnswer(` `, {
    media: "https://i.postimg.cc/59hy9Vg3/Whats-App-Image-2025-01-25-at-11-13-28.jpg"
})
.addAnswer(` `, {
    media: "https://i.postimg.cc/Jny7m6Bv/Whats-App-Image-2025-01-25-at-11-13-30.jpg"
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

export {datospersonales};