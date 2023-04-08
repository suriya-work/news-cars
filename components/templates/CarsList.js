import { useRouter } from 'next/router';
import styles from './CarsList.module.css';
import Back from '../icons/Back';
import Card from '../module/Card';
const CarsList = ({ data }) => {
    const router = useRouter()
    const backHandelr = () => {
        router.back()
    }
    return (

        <div className={styles.container} onClick={backHandelr}>
            <div className={styles.back}>
                <Back />
                <p>back</p>
            </div>
            <div className={styles.cards}>
                {data.map((item) => (
                    <Card  key={item.id} {...item}/>
                ))}

            </div>

        </div>
    );
};

export default CarsList;