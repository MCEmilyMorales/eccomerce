import host from "@/services/apiBack";

const Logout = async () => {
  try {
    //Espero la respuesta del servidor back
    const answer = await host.post("/auth/logout", { withCredentials: true });

    return answer.data;
  } catch (error: unknown) {
    console.error("Error al cerrar sesion", error);
    throw error;
  }
};
export default Logout;
