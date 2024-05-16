import React from "react";
import { api, services, BASE_URL } from "../utils/constants";

interface TableProps {
  selectedApi: string;
}

function Table({ selectedApi }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border">
        <thead>
          <tr className="text-left">
            <th className="border p-2">API</th>
            <th className="border p-2">DESCRIPTION</th>
            <th className="border p-2">METHOD</th>
            <th className="border p-2">PARAMS</th>
            <th className="border p-2">ENDPOINT</th>
          </tr>
        </thead>
        <tbody>
          {services[selectedApi].map((item) => (
            <tr key={item.name}>
              <td className="border p-2">{item.name}</td>
              <td className="border p-2">{item.description}</td>
              <td className="border p-2">{item.method}</td>
              <td className="border p-2">
                <ul className="list-disc list-inside">
                  {Object.keys(item.parameters).map((key) => (
                    <li key={key}>{key}</li>
                  ))}
                </ul>
              </td>
              <td className="border p-2">
                <a href={BASE_URL + item.url} className="text-red-400">
                  {item.endpoint}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
