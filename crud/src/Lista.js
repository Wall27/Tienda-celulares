import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Lista = () => {
    const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetalle = (id) => {
        navigate("/detalle/" + id);
    }
    const LoadEditar = (id) => {
        navigate("/editar/" + id);
    }
    const Eliminar = (id) => {
        if (window.confirm('Quieres eliminar el registro?')) {
            fetch("https://denny2023.azurewebsites.net/api/celulares?id=" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }




    useEffect(() => {
        fetch("https://denny2023.azurewebsites.net/api/celulares").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Lista de celulares</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="/registro" className="btn btn-success">Agregar (+)</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Marca</td>
                                <td>Modelo</td>
                                <td>Precio</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>

                            {empdata &&
                                empdata.map(item => (
                                    <tr key={item.celularId}>
                                        <td>{item.celularId}</td>
                                        <td>{item.marca}</td>
                                        <td>{item.modelo}</td>
                                        <td>{item.precio}</td>
                                        <td><a onClick={() => { LoadEditar(item.celularId) }} className="btn btn-success">Editar</a>
                                            <a onClick={() => { Eliminar(item.celularId) }} className="btn btn-danger">Eliminar</a>
                                            <a onClick={() => { LoadDetalle(item.celularId) }} className="btn btn-primary">Detalle</a>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default Lista;