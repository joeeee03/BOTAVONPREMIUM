import { createFlow } from "@builderbot/bot";
import { saludo } from "./saludo";
import { menuprincipal } from "./menuprincipal";
import { inicio } from "./inicio";
import { empezar } from "./empezar";
import { regalo } from "./regalo";
import { finalizar } from "./finalizar";
import { importes } from "./importes";
import { ventasyganancias } from "./ventasyganancias";
import { ganancias } from "./ganancias";
import { cuotas } from "./cuotas";
import { materialdeapoyo } from "./materialdeapoyo";
import { folletos } from "./folletos";
import { fhome } from "./fhome";
import { fcosmetica } from "./fcosmetica";
import { fdigital } from "./fdigital";
import { pedidosyfacturacion } from "./pedidosyfacturacion";
import { pasarpedido } from "./pasarpedido";
import { pasarpedidocelular } from "./pasarpedidocelular";
import { pasarpedidocomputadora } from "./pasarpedidocomputadora";
import { factura } from "./factura";
import { campañasypromociones } from "./campañasypromociones";
import { link } from "./link";
import { fechas } from "./fechas";
import { cambios } from "./cambios";
import { acceso } from "./acceso";
import { datospersonales } from "./datospersonales";
import { dudarecibida, otraduda } from "./otraduda";
import { administrador, agregarbl, eliminarbl } from "./administrador";
import { compraf } from "./compraf";
import { espejovirtual } from "./espejovirtual";

export default createFlow([
saludo, menuprincipal, inicio, empezar, regalo, finalizar, ventasyganancias, importes, ganancias, cuotas, materialdeapoyo, folletos, fhome, fcosmetica, fdigital, pedidosyfacturacion, pasarpedido, pasarpedidocelular, pasarpedidocomputadora, factura, campañasypromociones, link, fechas, cambios, acceso, datospersonales, otraduda, dudarecibida, compraf, espejovirtual,

administrador, agregarbl, eliminarbl
]);