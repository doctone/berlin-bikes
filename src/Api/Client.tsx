import { resourceLimits } from "worker_threads";
import { BikeCard } from "../Components/Bike/BikeCard";

export interface Bike {
    date_stolen : string;
    description: string;
    frame_colours: string[];
    frame_model: string;
    stolen_coordinates: number[];
    id: number;
    large_img: string;
    location_found: string;
    manufacturer_name: string;
    stolen: boolean;
    status: string;
    stolen_location: string;
    thumb: string;
    title: string;
    url: string;
    year: number;
}

export async function getBikes(): Promise<Array<Bike>> {
    const results = await fetch(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=berlin&distance=10&stolenness=proximity
    `);
    const bikes = await results.json();
    if (!results.ok) {
        throw new Error(await results.json());
      }
    return bikes.bikes.sort((a:Bike,b:Bike) => +a.date_stolen - +b.date_stolen);
}

export async function getBikeById(id: string): Promise<Bike> {
    const results = await fetch(`https://bikeindex.org:443/api/v3/bikes/${id}`);
    const data = await results.json();
    if (!results.ok) {
        throw new Error(await results.json());
      }
    return data.bike;
}