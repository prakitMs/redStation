const TableGas = () => {
  return (
    <table className="text-2xl h-[1vw] m-3">
  <thead>
    <tr>
      <th className="border border-black bg-blue-200 ">Gas</th>
      <th className="border border-black bg-blue-200 w-20"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-black  ">co</td>
      <td className="border border-black ">{0.013}</td>
    </tr>
    <tr>
      <td className="border border-black  ">nh3</td>
      <td className="border border-black  ">{0.044}</td>
    </tr>
    <tr>
      <td className="border border-black  "> no2</td>
      <td className="border border-black  ">{8.83}</td>
    </tr>
    <tr>
      <td className="border border-black  ">so2</td>
      <td className="border border-black  ">{0.194}</td>
    </tr>
  </tbody>
</table>
  )
}

export default TableGas