import TableRow from "./TableRow";

export default function TableFile() {
  return (
    <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th width="1">#</th>
          <th>Name</th>
          <th>Description</th>
          <th width="1">Actions</th>
        </tr>
      </thead>
      <tbody>
        <TableRow index={1} title={"ym bichuih"} words={"tailbar"} />
        <TableRow index={2} title={"Sed-Erdene"} words={"tailbar"} />
        <TableRow index={3} title={"Dulguun"} words={"tailbar"} />
        <TableRow index={4} title={"Zarnaaaa"} words={"tailbar"} />
      </tbody>
    </table>
  );
}
