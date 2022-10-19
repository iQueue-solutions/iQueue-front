import QueueMember from "../components/QueueMember";

export const QueueMembers = () => (
 <>
  <QueueMember
   variant="stranger-out"
   number="#1"
   name="Спектров Денис"
   work="ПЗ2"
  />
  <QueueMember
   variant="stranger-in"
   number="#2"
   name="Спектров Денис"
   work="ПЗ2"
  />
  <QueueMember variant="empty" number="#3" />
  <QueueMember variant="me" number="#4" name="Спектров Денис" work="ПЗ2" />
  <QueueMember variant="entry" />
 </>
);
