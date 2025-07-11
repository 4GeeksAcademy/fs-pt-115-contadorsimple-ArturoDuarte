
export const Contador = ({digitoUno}) => {
    return (
        <div className="container text-center shadow-sm d-flex justify-content-center align-items-center rounded-1 mt-4 contenedores" style={{height: "400px"}}>
            <div className="row align-items-center">
                <div className="col-md-1 tamañoDelNumero">{digitoUno}
                </div>
            </div>
        </div>
    )
}