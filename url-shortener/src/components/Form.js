import React, {useState} from "react";
import Swal from "sweetalert2";

function isValidUrl(string) {
  try {
    new URL(string);
  } catch (_) {
    return false;  
  }

  return true;
}

function Form(props) {

  const [ url, setUrl ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isValidUrl(url), "<<<< is Valid");
    if (!isValidUrl(url)) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please insert a valid url',
      })
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Url Shortened'
      })

      props.getUrlInput(url);
      setUrl("");
    }
  }

  const handleUrlInput = (e) => {
    setUrl(e.target.value);
  }

  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-10">
            <input type="url" className="form-control" placeholder="your url here" value={url} onChange={handleUrlInput} required />
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-danger">
              Shorten
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
