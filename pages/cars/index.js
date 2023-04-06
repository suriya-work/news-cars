import carsData from "@/data/carsData";
import CarsPage from "@/components/templates/CarsPage";
import Categories from "@/components/module/Categories";
const Detailes = () => {
    return (
        <div>
            <Categories />
            <CarsPage data={carsData} />
        </div>

    );
};

export default Detailes;