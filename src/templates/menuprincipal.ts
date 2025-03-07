import { addKeyword } from "@builderbot/bot";
import { inicio } from "./inicio";
import { ventasyganancias } from "./ventasyganancias";
import { materialdeapoyo } from "./materialdeapoyo";
import { pedidosyfacturacion } from "./pedidosyfacturacion";
import { campañasypromociones } from "./campañasypromociones";
import { cambios } from "./cambios";
import { acceso } from "./acceso";
import { otraduda } from "./otraduda";
import { espejovirtual } from "./espejovirtual";

const menuprincipal = addKeyword(["Hola", "Menu", "Menú"])
    .addAnswer(`¿En qué puedo ayudarte? Responde con la letra de la opción que necesitas.`)
    .addAnswer(
        [
            '*a.* 🚀 Inicio y acompañamiento\n*b.* 💰 Ventas y ganancias\n*c.* 📚 Material de apoyo\n*d.* 🛒 Pedidos y facturación\n*e.* 🎯 Campañas y promociones\n*f.* 🔄 Cambios y devoluciones\n*g.* 🌐 Acceso página de Avon\n*h.* 🪞 Espejo virtual Avon\n*i.* ❓ Otra consulta',
        ].join('\n'),
        { capture: true },
        async (ctx, { gotoFlow, fallBack }) => {
            try {
            if (!["a","b","c","d","e","f","g","h","A","B","C","D","E","F","G","H","i","I"].includes(ctx.body)) {
                return fallBack('Respuesta no válida, por favor selecciona una de las opciones.');
            }
            switch(ctx.body){
                case "a":
                    return gotoFlow(inicio);
                    case "A":
                        return gotoFlow(inicio);
                case "b":
                    return gotoFlow(ventasyganancias);
                    case "B":
                        return gotoFlow(ventasyganancias);
                case "c":
                    return gotoFlow(materialdeapoyo);
                    case "C":
                        return gotoFlow(materialdeapoyo);
                case "d":
                    return gotoFlow(pedidosyfacturacion);
                    case "D":
                            return gotoFlow(pedidosyfacturacion);
                case "e":
                    return gotoFlow(campañasypromociones);
                    case "E":
                        return gotoFlow(campañasypromociones);
                case "f":
                    return gotoFlow(cambios);
                    case "F":
                        return gotoFlow(cambios);
                case "g":
                    return gotoFlow(acceso);
                    case "G":
                        return gotoFlow(acceso);
                        case "h":
                            return gotoFlow(espejovirtual);
                        case "H":
                            return gotoFlow(espejovirtual);
                case "i":
                        return gotoFlow(otraduda);
                    case "I":
                        return gotoFlow(otraduda);
            }
        } catch (error) {
            console.error('Error en el menú principal:', error)
            return fallBack('Ocurrió un error. Por favor, intenta de nuevo.')
        }
        },
    );

    export {menuprincipal};