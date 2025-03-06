import { addKeyword, EVENTS } from "@builderbot/bot";

const finalizar = addKeyword(EVENTS.ACTION)
.addAnswer(`¡Gracias por contactarme! Si tienes más dudas o necesitas más información, solo escribe "Hola" 👋🏻`)

export {finalizar};