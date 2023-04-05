import { useRouter } from "next/router";
import carsData from "@/data/carsData";
import CarDetailes from "@/components/templates/CarDetailes";
const CarDetail = () => {
    const router = useRouter();
    const { carId } = router.query;
    const carDetailes = carsData[carId - 1]
    return (

        <CarDetailes {...carDetailes} />
    );
};

export default CarDetail;