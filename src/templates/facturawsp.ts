import { addKeyword, EVENTS } from "@builderbot/bot";
import { menuprincipal } from "./menuprincipal";
import { finalizar } from "./finalizar";

const facturawsp = addKeyword(EVENTS.ACTION)
.addAnswer(`Aquí abajo te enseño como *obtener la factura por whatsapp* facilmente 👀👇🏻`)
.addAnswer(` `, {
    media: "https://i.postimg.cc/prsw3yyB/upscalemedia-transformed-4.png"
})
.addAnswer(`Enlace directo a "Bela" 👇🏻\n\nhttps://wa.me/5511974223520`)
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

export {facturawsp};