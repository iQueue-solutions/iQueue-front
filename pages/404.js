import { AddToQueue } from "../components/Confirm/AddToQueue";
import {Heading} from "../components/Heading";

export default function Custom404() {
  return (<>
    <Heading>404</Heading>
    <AddToQueue />
    <p className="text-center text-3xl font-semibold">Такої сторінки не існує</p>
  </>);
}
