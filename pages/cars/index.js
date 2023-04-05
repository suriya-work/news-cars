import carsData from "@/data/carsData";
import CarsPage from "@/components/templates/CarsPage";
const Detailes = () => {
    return (
        <div>
           <CarsPage data={carsData}/>
        </div>

    );
};

export default Detailes;