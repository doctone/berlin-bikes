import { Bike } from '../../Api/Client';
import { BikeCard } from '../Bike/BikeCard';
import "./BikeList.css";

export function BikeList({bikes}:{bikes:Bike[]}):JSX.Element {

    if (bikes === undefined) {
        return <div>loading...</div>
    }
    return (
        <>
        <ul className='bike-list'>
            {bikes.map((b,i) => (
                <BikeCard bike={b} key={i} />
            ))}
        </ul>
        </>
    )
}