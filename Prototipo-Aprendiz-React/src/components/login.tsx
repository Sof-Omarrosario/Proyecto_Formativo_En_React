import { useState } from "react";

export default function Login() {
  const [identificacion, setIdentificacion] = useState("");

  const guardarIdentificacion = () => {
    const clave = `identificacion_${identificacion}`;

    localStorage.setItem(clave, identificacion);
  };

  return (
    <div className="screen-login">

      <div className="login-left">

        <div>
          <div className="login-logo">LOGO SENA</div>

          <h1>
            Sistema de Gestión y Evaluación Académica T&T
          </h1>

          <p>
            Consulta y presenta tus pruebas de entrada y simulacros
            tipo ICFES desde un solo lugar.
          </p>
        </div>

        <div className="login-info">
          <h3>¿Por qué presentar estas pruebas?</h3>

          <p>
            La prueba de entrada mide cómo llegas al programa.
            El simulacro de salida evalúa las 5 competencias tipo ICFES
            antes de tu Saber T&T oficial.
          </p>
        </div>

      </div>

      <div className="login-right">

        <div className="login-form">

          <h2>Ingresar como Aprendiz</h2>

          <div className="form-group">

            <label>
              Número de identificación
              (El mismo registrado en SENA Sofia Plus)
            </label>

            <input type="text" placeholder="Escribe tu Identificación" value={identificacion} onChange={(e) => setIdentificacion(e.target.value)} /> 

          </div>

          <button className="btn-login" onClick={guardarIdentificacion} >
            Enviar código de verificación
          </button>

          <div className="login-footer">

            <a href="#"> ¿No puedes ingresar? Contacta a tu instructor </a>

          </div>

        </div>

      </div>

    </div>
  );
}