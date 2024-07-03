
function Tours({tours}){
    return(
        <div>
            <div>
                <h2>Plan with Momi</h2>
            </div>
            <div>
                {
                    tours.map( (tour) => {
                        return <card></card>
                    } )
                }
            </div>      

            

        </div>
    );

}

export default Tours;