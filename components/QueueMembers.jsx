import QueueMember from "../components/QueueMember";
import {ConfirmQueueMember} from "./ConfirmQueueMember";
import {useState} from "react";

export const QueueMembers = () => {
  const TakePlace = (id, placeNumber) => {
    setIsConfirmActive(true)
    setConfirmTitle(confirmTitle = `Зайняти місце ${placeNumber} ?`)
  }

  const SwapPlaces = (id, name) => {
    setIsConfirmActive(true)
    setConfirmTitle(confirmTitle = `Помінятись місцями з ${name} ?`)
  }

  const FreePlace = (id) => {
    setIsConfirmActive(true)
    setConfirmTitle(confirmTitle = "Залишити чергу?")
  }

  const Confirm = () => {
    setConfirmTitle("Okay")
  }

  const Cancel = () => {
    setIsConfirmActive(false)
  }

  let [isConfirmActive, setIsConfirmActive] = useState(false);
  let [confirmTitle, setConfirmTitle] = useState("");

  let members = [{
    id: 0, variant: "stranger-out", number: "#1", name: "Спектров Денис", work: "ПЗ2",
  }, {
    id: 1, variant: "stranger-in", number: "#2", name: "Спектров Денис", work: "ПЗ2", callback: SwapPlaces
  }, {
    id: 2, variant: "empty", number: "#3", callback: TakePlace
  }, {
    id: 3, variant: "me", number: "#4", name: "Спектров Денис", work: "ПЗ2", callback: FreePlace
  }]

  let membersComp = members.map(({
                                   id,
                                   variant,
                                   number,
                                   name,
                                   work,
                                   callback
                                 }) => (// eslint-disable-next-line react/jsx-key
    <QueueMember id={id} variant={variant} number={number} name={name} work={work} callback={callback}/>))

  if (!isConfirmActive) {
    return <>
      {membersComp}
    </>
  }

  return <>
    {membersComp}
    <ConfirmQueueMember confirmCallback={Confirm} cancelCallback={Cancel} title={confirmTitle}/>
  </>
};
