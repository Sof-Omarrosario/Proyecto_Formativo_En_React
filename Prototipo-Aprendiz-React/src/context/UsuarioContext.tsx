import { createContext, useContext, useState } from "react";

interface Usuario {
    nombreCompleto: string;
    tipoDocumento: string;
    numeroDocumento: string;
    correoPersonal: string;
    programa: string;
    numeroFicha: string;
    trimestreActual: string;
    aceptaPoliticaDatos: boolean;
}

interface UsuarioContextType {
    usuario: Usuario;
    guardarUsuario: (datos: Usuario) => void;
}

const UsuarioContext = createContext<UsuarioContextType | null>(null);

export const UsuarioProvider = ({ children }: { children: React.ReactNode }) => {

    const [usuario, setUsuario] = useState<Usuario>({
        nombreCompleto: "",
        tipoDocumento: "",
        numeroDocumento: "",
        correoPersonal: "",
        programa: "",
        numeroFicha: "",
        trimestreActual: "",
        aceptaPoliticaDatos: false
    });

    const guardarUsuario = (datos: Usuario) => {
        setUsuario(datos);
    };

    return (
        <UsuarioContext.Provider value={{ usuario, guardarUsuario }}>
            {children}
        </UsuarioContext.Provider>
    );
};

export const useUsuario = () => {
    const context = useContext(UsuarioContext);

    if (!context) {
        throw new Error("useUsuario debe utilizarse dentro de UsuarioProvider");
    }

    return context;
};