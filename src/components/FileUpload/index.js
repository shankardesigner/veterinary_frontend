import React, {useState} from 'react'
import axios from 'axios'

function FileUpload() {
    const [file, setFile] = useState({});

    function uploadHandler(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', file.displayPicture);
        axios.post("http://localhost:8080/uploadFile", formData).then(res => {
            console.log(res);
            
        }).catch(err => {
            console.log(err);
            
        });
    }

    function onchangeHandler(e) {
        

        setFile({
            displayPicture: e.target.files[0]
        })
    }
    
    return (
        <>
            <div className="col-md-6 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Horizontal Form</h4>
                  <p className="card-description">
                    Horizontal form layout
                  </p>
                  <form className="upload-form" onSubmit={(e) => uploadHandler(e)}>
                    <div className="form-group row">
                      <label htmlFor="exampleInputUsername2" className="col-sm-3 col-form-label">Email</label>
                      <div className="col-sm-9">
                        <input type="file" className="form-control" id="exampleInputUsername2" placeholder="Username" name="displayPicture" onChange={(e) => onchangeHandler(e)} />
                      </div>
                    </div>
                    <button type="submit" className="btn btn-gradient-primary mr-2">Submit</button>
                    <button className="btn btn-light">Cancel</button>
                  </form>
                </div>
              </div>
            </div>
        </>
    )
}

export default FileUpload
