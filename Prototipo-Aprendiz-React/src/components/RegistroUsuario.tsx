import React, { useState } from "react";
import { useUsuario } from "../context/UsuarioContext";

export const RegistroUsuario: React.FC = () => {

    const { guardarUsuario } = useUsuario();

    const [nombreCompleto, setNombreCompleto] = useState("");
    const [tipoDocumento, setTipoDocumento] = useState("");
    const [numeroDocumento, setNumeroDocumento] = useState("");
    const [correoPersonal, setCorreoPersonal] = useState("");
    const [programa, setPrograma] = useState("");
    const [numeroFicha, setNumeroFicha] = useState("");
    const [trimestreActual, setTrimestreActual] = useState("");
    const [aceptaPoliticaDatos, setAceptaPoliticaDatos] = useState(false);

    const manejarEnvio = (e: React.FormEvent) => {
        e.preventDefault();

        guardarUsuario({
            nombreCompleto,
            tipoDocumento,
            numeroDocumento,
            correoPersonal,
            programa,
            numeroFicha,
            trimestreActual,
            aceptaPoliticaDatos
        });
    };

    return (
        <form onSubmit={manejarEnvio}>

            <h1>Registro de Aprendiz</h1>

            <label>Nombre Completo</label>

            <input
                placeholder="Ej: Omar Rosario"
                type="text"
                value={nombreCompleto}
                onChange={(e) => setNombreCompleto(e.target.value)}
            />

            <label>Tipo de Documento</label>

            <select
                value={tipoDocumento}
                onChange={(e) => setTipoDocumento(e.target.value)}
            >
                <option value="">Seleccione una opción</option>
                <option value="CC">Cédula de ciudadanía</option>
                <option value="TI">Tarjeta de identidad</option>
                <option value="CE">Cédula de extranjería</option>
            </select>

            <label>Número de Documento</label>

            <input
                placeholder="Ej: 123454535"
                type="text"
                value={numeroDocumento}
                onChange={(e) => setNumeroDocumento(e.target.value)}
            />

            <label>Correo Personal</label>

            <input
                placeholder="Ej: Ejemplo@gmail.com"
                type="email"
                value={correoPersonal}
                onChange={(e) => setCorreoPersonal(e.target.value)}
            />

            <label>Programa</label>

            <select
                value={programa}
                onChange={(e) => setPrograma(e.target.value)}
            >
                <option value="">Seleccione un programa</option>
                <option value="ADSO">
                    Análisis y Desarrollo de Software
                </option>
                <option value="Diseño">
                    Diseño De Moda
                </option>
            </select>

            <label>Número de Ficha</label>

            <input
                type="text"
                value={numeroFicha}
                onChange={(e) => setNumeroFicha(e.target.value)}
            />

            <label>Trimestre Actual</label>

            <select
                value={trimestreActual}
                onChange={(e) => setTrimestreActual(e.target.value)}
            >
                <option value="">Seleccione un trimestre</option>
                <option value="1">I trimestre</option>
                <option value="5">V trimestre</option>
                <option value="6">VI trimestre</option>
            </select>

            <label>
                <input
                    type="checkbox"
                    checked={aceptaPoliticaDatos}
                    onChange={(e) => setAceptaPoliticaDatos(e.target.checked)}
                />

                Acepto la política de tratamiento de datos
            </label>

            <button type="submit">
                Ingresar al Sistema
            </button>

        </form>
    );
};