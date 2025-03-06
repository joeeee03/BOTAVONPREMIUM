import { addKeyword, EVENTS } from "@builderbot/bot";
import { menuprincipal } from "./menuprincipal";
import { empezar } from "./empezar";
import { regalo } from "./regalo";

const inicio = addKeyword(EVENTS.ACTION)
.addAnswer(`Por favor, seleccione una opcion 👇`)
.addAnswer(
    [
        '*a.* Cómo empezar\n*b.* Acompañamiento\n*c.* Volver al menú',
    ].join('\n'),
    { capture: true },
    async (ctx, { gotoFlow, fallBack }) => {
        if (!["a","b","A","B","c","C","d","D"].includes(ctx.body)) {
            return fallBack('Respuesta no válida, por favor selecciona una de las opciones.');
        }
        switch(ctx.body){
            case "a":
                return gotoFlow(empezar);
                case "A":
                    return gotoFlow(empezar);
                    case "b":
                        return gotoFlow(regalo);
                        case "B":
                            return gotoFlow(regalo);
                    case "c":
                        return gotoFlow(menuprincipal);
                        case "C":
                            return gotoFlow(menuprincipal);
    
        }
    },
);

export {inicio};