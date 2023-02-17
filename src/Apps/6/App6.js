import cars from "./cars";

const [aulto , eco] = cars;

const {speedState : {topSpeed: aultoTopSpeed}} = aulto;

const {speedState : {topSpeed: ecoTopSpeed}} = eco;

const {color : [aultoTopColor]} = aulto;

const {color : [ecoTopColor]} = eco;

function App6(){
    return (
        <div>
            <table>
                <tr>
                    <th>Brand</th>
                    <th>Top Speed</th>
                    <th>Top color</th>
                </tr>
                <tr>
                    <td>{aulto.model}</td> 
                    <td>{aultoTopSpeed}</td> 
                    <td>{aultoTopColor}</td> 
                </tr>
                <tr>
                    <td>{eco.model}</td> 
                    <td>{ecoTopSpeed}</td> 
                    <td>{ecoTopColor}</td> 
                </tr>


            </table>
        </div>
    );
}

export default App6;