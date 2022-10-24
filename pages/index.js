import { Heading } from "../components/Heading";
import { Input } from "../components/Input";
import { PageSwitcher } from "../components/PageSwitcher";
import { Queue } from "../components/Queue";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-10/12 md:w-1/2">
      <Heading>Мої черги</Heading>
      <Input placeholder={"Пошук"} />
      <Queue name={"ПарП ПЗПІ-20-2"} creatorName={"Олійник О. В."} isMy={false} />
      <Queue name={"АВПЗ ПЗПІ-20-2"} creatorName={"Топорков О. В."} isMy={true} />
      <Queue name={"ПарП ПЗПІ-20-2"} creatorName={"Олійник О. В."} isMy={false} />
      <PageSwitcher />
      </div>
    </div>
  );
}
