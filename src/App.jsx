import {useState} from "react"
import {v4 as uuidv4} from 'uuid';

function App(){
  const [listItems, setListItems] = useState(
    JSON.parse (localStorage.getItem("listItems")) || []
  );
  const funcion = async () =>{

    const {value} = await Swal.fire({
      title:"New Question",
      html:`<input
             type="text"
             id="Pregunta"
             name="Pregunta"
             class="swal2-input"
             placeholder="pregunta"
             />
             <input
             type="text"
             id="Respuesta"
             name="Respuesta"
             class="swal2-input"
             placeholder="Respuesta"
             />
             <input
             type="text"
             id="Respuesta2"
             name="Respuesta2"
             class="swal2-input"
             placeholder="Respuesta2"
             />
             <input
             type="text"
             id="Respuesta3"
             name="Respuesta3"
             class="swal2-input"
             placeholder="Respuesta3"
             />`,

             confirmButtonText:"Add Question",
             showCloseButton: true,
             showCancelButton: true,
             focusConfirm: false,
             cancelButtonText: "Dismiss",
             preConfirm: () =>{
              const Pregunta=Swal.getPopup().querySelector('#Pregunta').value;
              const Respuesta=Swal.getPopup().querySelector('#Respuesta').value;
              const Respuesta2=Swal.getPopup().querySelector('#Respuesta2').value;
              const Respuesta3=Swal.getPopup().querySelector('#Respuesta3').value;

              if (!Pregunta|| !Respuesta || !Respuesta2 || !Respuesta3) {
                Swal.showValidationMessage('please enter the item full information');
              }
              return{Pregunta, Respuesta, Respuesta2, Respuesta3}
             }
    })
    if(!value.Pregunta || !value.Respuesta || !value.Respuesta2 || !value.Respuesta3) return

    const newList=[
      ...listItems,
      {id:uuidv4(), ...value, checked:false},
    ]
    localStorage.setItem("listItems", JSON.stringify(newList));

    setListItems(newList);

    
  }


  return(
    <div className='container text-center'>
      <div className='row'>
        <div className='col'>
          <h3>Pregunta </h3>
          <button
          type='button'className="btn btn-success"
          onClick={funcion}
          >Agregar
          </button>
        </div>
      <hr />
      {
        listItems.map((Item) =>(
          <ul>
            <li>{Item.Pregunta}</li>
            <li>{Item.Respuesta}</li>
            <li>{Item.Respuesta2}</li>
            <li>{Item.Respuesta3}</li>
          </ul>
        ))
      }
      </div>
      <div className='container text-center'></div>
      <div className='row'></div>
      <div className="col">
        <h3>Quiz Game</h3>
        <button
      type="button" className="btn btn seccess"
      >Play
      </button>
      </div>
    </div>
  )
}

export default App
