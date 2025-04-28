import React from 'react'

const TransplantTable = () => {
  return (
    <table className="w-full border-separate border-spacing-y-2">
    <thead>
      <tr className="bg-[#A18A42] text-[#F5F1E9] sticky top-0">
        <th className="p-4 text-left rounded-tl-lg">Technique</th>
        <th className="p-4 text-left">Scarring</th>
        <th className="p-4 text-left">Graft Survival</th>
        <th className="p-4 text-left">Session Size</th>
        <th className="p-4 text-left rounded-tr-lg">Recovery Time</th>
      </tr>
    </thead>
    <tbody>
      {hairTransplantTechniques.map((tech) => (
        <tr 
          key={tech.id}
          className="transition-all duration-200 hover:bg-[#C9D3C0] hover:text-[#2F4F3A] hover:shadow-lg hover:rounded-lg"
          style={{
            color: '#2F4F3A',
          }}
        >
          <td className="p-4 font-semibold border-l-4 border-transparent hover:border-[#5B7C78] first:rounded-l-lg">{tech.name}</td>
          <td className="p-4">Tiny dots</td>
          <td className="p-4">85-90%</td>
          <td className="p-4">1,500-3,000</td>
          <td className="p-4 last:rounded-r-lg">5-10 days</td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default TransplantTable