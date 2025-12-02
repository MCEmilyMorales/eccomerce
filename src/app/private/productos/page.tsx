import dynamic from "next/dynamic";

const Productos = dynamic(() => import("./ProductosClientPage"));

export default Productos;
