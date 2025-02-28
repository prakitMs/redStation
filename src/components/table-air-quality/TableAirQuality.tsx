
const TableAirQuality = () => {
  return (
    <table className="text-2xl h-[1vw] m-3">
  <thead>
    <tr>
      <th className="border border-black bg-blue-200 ">Air Qualitry</th>
      <th className="border border-black bg-blue-200 w-[3vw]"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-black  ">co2</td>
      <td className="border border-black ">{20.9}</td>
    </tr>
    <tr>
      <td className="border border-black  ">o2</td>
      <td className="border border-black  ">{423.0}</td>
    </tr>
    <tr>
      <td className="border border-black  ">pm1</td>
      <td className="border border-black  ">{5.3}</td>
    </tr>
    <tr>
      <td className="border border-black  ">pm10</td>
      <td className="border border-black  ">{46.0}</td>
    </tr>
    <tr>
      <td className="border border-black  ">pm25</td>
      <td className="border border-black  ">{12.0}</td>
    </tr>
    <tr>
      <td className="border border-black  ">pm100</td>
      <td className="border border-black  ">{71.3}</td>
    </tr>
    <tr>
      <td className="border border-black  ">sound</td>
      <td className="border border-black  ">{73.8}</td>
    </tr>
  </tbody>
</table>
  )
}

export default TableAirQuality