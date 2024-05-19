import React from "react";
import { api, services, BASE_URL } from "../utils/constants";

interface TableProps {
  selectedApi: string;
}

function Table({ selectedApi }: TableProps) {
  return (
    <div className="lg:text-lg text-sm  text-neutral-200">
      <table className="w-full border-collapse  border-neutral-200 border">
        <thead>
          <tr className="text-left">
            <th className="border p-2  border-neutral-200 ">API</th>
            <th className="border p-2  border-neutral-200 ">DESCRIPTION</th>
            <th className="border p-2  border-neutral-200 ">METHOD</th>
            <th className="border p-2  border-neutral-200 ">PARAMS</th>
            <th className="border p-2  border-neutral-200 ">ENDPOINT</th>
          </tr>
        </thead>
        <tbody>
          {services[selectedApi].map((item) => (
            <tr key={item.name}>
              <td className="border p-2  border-neutral-200 ">{item.name}</td>
              <td className="border p-2  border-neutral-200 ">
                {item.description}
              </td>
              <td className="border p-2  border-neutral-200 ">{item.method}</td>
              <td className="border p-2  border-neutral-200 ">
                <ul className="list-disc w-max list-inside">
                  {Object.keys(item.parameters).map((key) => (
                    <li key={key}>
                      {key} : {item.parameters[key]}
                    </li>
                  ))}
                </ul>
              </td>
              <td className="border p-2  border-neutral-200 ">
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href={BASE_URL + item.url}
                  className="text-red-400"
                >
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
