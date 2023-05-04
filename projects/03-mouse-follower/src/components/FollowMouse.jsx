import React, { useEffect, useState } from "react";

function FollowMouse() {
    const [ enabled, setEnabled ] = useState(false);
    const [ position, setPosition ] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMove = (event) => {
            const { clientX, clientY } = event;
            setPosition({ x: clientX, y: clientY });
        };

        if (enabled) {
            window.addEventListener("pointermove", handleMove);
        }

        /** cleanup method
         *  -> Cuando el componente se desmonta
         *  -> Cuando cambian las dependencias, antes de ejecutar el effect de nuevo
         */
        return () => {
            window.removeEventListener("pointermove", handleMove);
        };
    }, [enabled]);

    /** useEffect (array de dependencias)
     * []           -> solo se ejecuta una vez cuando se monta el componente
     * [enabled]    -> se ejecuta cuando cambia enabled y cuando se monta el componente
     * []           -> se ejecuta cada vez que se renderiza el componente
     */

    return (
        <>
            <div style={{
                position: 'absolute',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                border: '1px solid #fff',
                borderRadius: '50%',
                opacity: 0.8,
                pointerEvents: 'none',
                left: -25,
                top: -25,
                width: 50,
                height: 50,
                transform: `translate(${position.x}px, ${position.y}px)` 
            }}/>
            <button onClick={() => setEnabled(!enabled)}>
                { enabled ? "Desactivar" : "Activar"} seguir puntero
            </button>
        </>
    );
}

export default FollowMouse;