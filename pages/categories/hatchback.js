import CarsList from "@/components/templates/CarsList";
import carsData from "@/data/carsData";
const Hatchback = (props) => {
    const hatchbackCars = carsData.filter((car) => car.category === 'hatchback')

    return <CarsList data ={hatchbackCars} />
};

export default Hatchback;