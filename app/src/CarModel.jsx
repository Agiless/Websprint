import React, {useState} from 'react'

function CarModel() {
    const [car,setCar] = useState(["Ford"]);
    function addCar(){
        const newCar = document.getElementById('addCar').value
        document.getElementById('addCar').value = "";
        setCar(c => [...c,newCar])
    }
    function removeCar(index){
        setCar(car.filter((_,i) => index!=i ))
    }
    return(
        <>
            <div>
                <h1>Add Car List</h1>
                <ul>
                    {
                        car.map((c,index) => 
                        <li key={index} onClick={()=>removeCar(index)}>
                            {c} 
                        </li>)
                    }
                </ul>
                <input type="text" placeholder='Enter Car Name' id='addCar' />
                <button onClick={addCar}>Submit</button>
            </div>
        </>
    );
}

export default CarModel;