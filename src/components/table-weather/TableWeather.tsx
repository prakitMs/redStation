


const TableWeather = () => {
  return (
    <table className="text-2xl h-[1vw] m-3">
  <thead>
    <tr>
      <th className="border border-black bg-blue-200 ">Weather</th>
      <th className="border border-black bg-blue-200 w-20"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-black  ">direct</td>
      <td className="border border-black ">{37.3}</td>
    </tr>
    <tr>
      <td className="border border-black  ">rain</td>
      <td className="border border-black  ">{65}</td>
    </tr>
    <tr>
      <td className="border border-black  ">speed</td>
      <td className="border border-black  ">{17.1}</td>
    </tr>
    
  </tbody>
</table>
  )
}

export default TableWeather