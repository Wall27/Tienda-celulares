import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


const Editar = () => {
    const { empid } = useParams();
    

    
    
    
    //const [empdata, empdatachange] = useState({});

    const[celularId,celularIdchange]=useState(empid);
    const[marca,marcachange]=useState("");
    const[modelo,modelochange]=useState("");
    const[color,colorchange]=useState("");
    const[precio,preciochange]=useState("");
    const[descripcion,descripcionchange]=useState("");
    const[operadora,operadorachange]=useState("");


    const[validation,valchange]=useState(false);

    

    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      
      const empdata={celularId,marca,modelo,color,precio,descripcion,operadora};
      

      console.log (empdata)
      fetch("https://denny2023.azurewebsites.net/api/celulares",{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
      }).then((res)=>{
        alert('Modified successfully.')
        navigate('/');
      }).catch((err)=>{
        console.log(err.message)
      })

    }

    
    return ( 
        <div>

        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>

                    <div className="card" style={{"textAlign":"left"}}>
                        <div className="card-title">
                            <h2>Editar</h2>
                        </div>
                        <div className="card-body">

                            <div className="row">

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>ID</label>
                                        <input value={celularId} disabled="disabled" className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Marca</label>
                                        <input required value={marca} onMouseDown={e=>valchange(true)} onChange={e=>marcachange(e.target.value)} className="form-control"></input>
                                    {marca.length==0 && validation && <span className="text-danger">Ingrese la marca</span>}
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Modelo</label>
                                        <input value={modelo} onChange={e=>modelochange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>color</label>
                                        <input required value={color} onMouseDown={e=>valchange(true)} onChange={e=>colorchange(e.target.value)} className="form-control"></input>
                                    {color.length==0 && validation && <span className="text-danger">Ingrese la color</span>}
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Precio</label>
                                        <input value={precio} onChange={e=>preciochange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Descripcion</label>
                                        <input required value={descripcion} onMouseDown={e=>valchange(true)} onChange={e=>descripcionchange(e.target.value)} className="form-control"></input>
                                    {marca.length==0 && validation && <span className="text-danger">Ingrese la marca</span>}
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Operadora</label>
                                        <input required value={operadora} onMouseDown={e=>valchange(true)} onChange={e=>operadorachange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                            <div class="p-4">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                       <button className="btn btn-success" type="submit">Guardar</button>
                                       <Link to="/" className="btn btn-danger">Regresar</Link>
                                    </div>
                                </div>
                            </div>
                            </div>

                        </div>

                    </div>

                </form>

            </div>
        </div>
    </div>
     );
}
 
export default Editar;