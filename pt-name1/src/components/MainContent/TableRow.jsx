import { SlPencil } from "react-icons/sl";
import { RiDeleteBin4Line } from "react-icons/ri";
export default function TableRow({ index, title, words }) {
  return (
    <tr>
      <td>{index}</td>
      <td>{title}</td>
      <td>{words}</td>
      <td style={{ whiteSpace: "nowrap" }}>
        <button
          className="btn btn-sm btn-outline-primary me-2"
          onClick={() => console.log(index)}
        >
          <SlPencil />
        </button>
        <button className="btn btn-sm btn-outline-danger me-2">
          <RiDeleteBin4Line />
        </button>
      </td>
    </tr>
  );
}
