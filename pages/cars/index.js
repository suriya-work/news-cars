import carsData from "@/data/carsData";
import CarsPage from "@/components/templates/CarsPage";
import Categories from "@/components/module/Categories";
import SearchBar from "@/components/module/SearchBar";
const Detailes = () => {
    return (
        <div>
            <SearchBar />
            <Categories />
            <CarsPage data={carsData} />
        </div>

    );
};

export default Detailes;