import React, { useState, useEffect, useRef } from "react"

const CompFuncCicloVida = () => {
    const miVariable = useRef<boolean | undefined>()
    // 1 - Componente se monta
    // 2 - Componente se actualiza
    // 3 - Componente se va a desmontar
    useEffect(() => {
        console.log("Se ha ejecutado")
        return () => {
            console.log("Se va a desmontar")
        }
    }, [])
    useEffect(() => {
        if (typeof miVariable === "undefined") return
        console.log("miVariable ha cambiado")
    }, [miVariable])

    const updateVar = () => {
        miVariable.current =
            typeof miVariable.current === "undefined"
                ? true
                : !miVariable.current
    }

    return (
        <div>
            <button onClick={updateVar}>Actualiza</button>
        </div>
    )
}

export default CompFuncCicloVida
