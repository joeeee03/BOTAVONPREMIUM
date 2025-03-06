import { addKeyword, EVENTS } from "@builderbot/bot";
import { menuprincipal } from "./menuprincipal";
import { finalizar } from "./finalizar";

const empezar = addKeyword(EVENTS.ACTION)   
.addAnswer(`¡Aquí tienes el video con toda la información *para empezar!* 👀👇🏻`)
.addAnswer(` `, {
    media: "https://ik.imagekit.io/sfoxlr1gr/VID-20250121-WA0030.mp4?updatedAt=1737599247842"
})
.addAnswer(` `, {
    media: "https://i.postimg.cc/fV3yS1FG/Whats-App-Image-2025-02-28-at-21-03-52.jpg"
})
.addAnswer(` `, {
    media: "https://i.postimg.cc/hXHjLpRf/Whats-App-Image-2025-02-28-at-21-03-53.jpg"
})
.addAnswer(
    [
        '*a.* Volver al menú\n*b.* Finalizar',
    ].join('\n'),
    { capture: true },
    async (ctx, { gotoFlow, fallBack }) => {
        try {
           
        if (!["a","b"].includes(ctx.body.trim().toLowerCase())) {
            return fallBack('Respuesta no válida, por favor selecciona una de las opciones.');
        }
        switch(ctx.body.trim().toLowerCase()){
            case "a":
                return gotoFlow(menuprincipal);
            case "b":
                return gotoFlow(finalizar);
    
        }
    } catch (error) {
        console.error('Error en el flujo empezar:', error);
        return fallBack('Ocurrió un error. Por favor, intenta nuevamente.');
    }
    },
);

export {empezar};