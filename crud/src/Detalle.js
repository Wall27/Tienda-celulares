import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const Detalle = () => {
    const { empid } = useParams();

    const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("https://denny2023.azurewebsites.net/api/celulares/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>
            {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

               <div className="container">
                
            <div className="card row" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h2>Registro Celular</h2>
                </div>
                <div className="card-body"></div>

                {empdata &&
                    <div>
                        <h2>Marca del celular : <b>{empdata.marca}</b> </h2>
                        <h3>Linea telefonica: <b>{empdata.operadora}</b></h3>
                        <h3>El Modelo : <b>{empdata.modelo}</b></h3>
                        <h3>Precio : <b>{empdata.precio}</b></h3>
                        <Link className="btn btn-danger" to="/">Regresar</Link>
                    </div>
                }
            </div>
            </div>
            {/* </div>
            </div> */}
        </div >
    );
}

export default Detalle;