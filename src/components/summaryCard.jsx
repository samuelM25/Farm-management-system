function Summarycard({title,value}){
    return(
        
        <div className="col-md-4">
            <div className="card shadow-sm border-0 rounded-4">
                <div className="card-body">
                    <h6 className="text-muted">
                        {title}
                    </h6>
                    <h3>
                        UGX {value}
                    </h3>
                </div>
            </div>
        </div>


    )
}
export default Summarycard;