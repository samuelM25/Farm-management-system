function  Adddata(){
    return(
        <div className="formdata border rounded mb-4">
            <div className="card shadow-sm">
                <div className="card-header bg-success text-white">
                    <i className="bi bi-feather"></i>
                    Bird Registration
                </div>
                <div className="card-body">

                    <label>Bird Type</label>
                    <select className="mb-3 form-select">
                        <option>layers</option>
                        <option>Broilers</option>
                    </select>

                    <label>Bird Company</label>
                    <input type="text"
                    className="form-control mb-3"
                    placeholder="Enter Bird company"/>

                    <label> Number of birds </label>
                    <input type="text"
                    className="form-control mb-3"
                    placeholder="Enter number of birds" />

                    <button className="btn btn-success">Save Birds</button>
                </div>
            </div>


            <div className="card shadow-sm mt-4">
                <div className="card-header bg-success text-white">
                    <i className="bi bi-egg-fill"></i>
                    Egg Production
                </div>
                <div className="card-body">

                    <label>Collection Date</label>
                    <input type="text"
                    className="form-control mb-3"
                    placeholder="Enter collection date"/>

                    <label> Eggs Collected</label>
                    <input type="text"
                    className="form-control mb-3"
                    placeholder="Enter number of Eggs collectes" />

                    <label > Broken Eggs</label>
                    <input type="text" 
                    className="form-control mb-3"
                    placeholder="Enter number of broken eggs"/>

                    <label>Trays Produced</label>
                    <input type="text"
                    className="form-control mb-3"
                    placeholder="Enter number of trays" />

                    <label >Remarks</label>
                    <textarea 
                     className=" form-control mb-3"
                     name="production remarks" id=""
                     placeholder="Add production Remarks">
                     </textarea>

                    <button className="btn btn-success">Save Eggs</button>
                </div>
            </div>

            <div className="card shadow-sm mt-4">
                <div className="card-header bg-success text-white">
                    <i className="bi bi-heart me-2 fill"></i>
                    Health Records
                </div>
                <div className="card-body">

                    <label>Activity Type</label>
                    <select className="form-control mb-3"> 
                        <option value="">Vaccination</option>
                        <option value="">Treatment</option>
                        <option value="">routine Checkup</option>
                        <option value="">Disease Breakout</option>
                    </select>

                    <label> Disease /condition</label>
                    <input type="text"
                    className="form-control mb-3"
                    placeholder="Enter condition" />

                    <label > Medicine/ Vaccine Used</label>
                    <input type="text" 
                    className="form-control mb-3"
                    placeholder="Enter Medication used"/>

                    <label>Number of Birds Affected</label>
                    <input type="text"
                    className="form-control mb-3"
                    placeholder="Enter number of birdsd affected" />

                    <label >Remarks</label>
                    <textarea 
                     className=" form-control mb-3"
                     name="production remarks" id=""
                     placeholder="Add production Remarks">
                     </textarea>

                     <label > Morality if any</label>
                     <input type="text"
                     className="form-control mb-3"
                     placeholder="" />

                     <label >Record Date</label>
                     <input type="text"
                     className="form-control mb-3"
                     placeholder="" />
 

                     <label > Medical Notes</label>
                     <textarea name="" id="" className="form-control mb-4"
                     placeholder="Additional Medical Notes"></textarea>

                    <button className="btn btn-success">Save Health Records</button>
                </div>
            </div>



         
        </div>


   


       

        
  
    )
}
export default Adddata;