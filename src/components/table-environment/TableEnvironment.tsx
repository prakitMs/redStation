
const TableEnviroment = () => {
  return (
    <table className="text-2xl h-[1vw] m-3">
  <thead>
    <tr>
      <th className="border border-black bg-blue-200 ">Environment</th>
      <th className="border border-black bg-blue-200 w-20 "></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-black  ">altitude</td>
      <td className="border border-black ">{68.0}</td>
    </tr>
    <tr>
      <td className="border border-black  ">humidity</td>
      <td className="border border-black  ">{18.2}</td>
    </tr>
    <tr>
      <td className="border border-black  "> pressure</td>
      <td className="border border-black  ">{990.8}</td>
    </tr>
    <tr>
      <td className="border border-black  ">temperature</td>
      <td className="border border-black  ">{2.0}</td>
    </tr>
    <tr>
      <td className="border border-black  ">uv</td>
      <td className="border border-black  ">{137.4}</td>
    </tr>
  </tbody>
</table>
  )
}

export default TableEnviroment