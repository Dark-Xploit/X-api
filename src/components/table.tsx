import React from "react";
import { api, services, BASE_URL } from "../utils/constants";

interface TableProps {
  selectedApi: string;
}

function Table({ selectedApi }: TableProps) {
  return (
    <table className="w-full">
      <thead className="w-full">
        <tr className="w-full justify-between flex border-x border-t pt-2">
          <th className="w-full flex flex-col border-r justify-center">
            <div className="w-full border-b p-2">API</div>
            {services[selectedApi].map((item) => (
              <div key={item.name} className="w-full border-b p-2 flex justify-center">
                {item.name}
              </div>
            ))}
          </th>
          <th className="w-full flex flex-col border-r justify-center">
            <div className="w-full border-b p-2">DESCRIPTION</div>
            {services[selectedApi].map((item) => (
              <div key={item.name} className="w-full border-b p-2 flex justify-center">
                {item.description}
              </div>
            ))}
          </th>
          <th className="w-full flex flex-col border-r justify-center">
            <div className="w-full border-b p-2">METHOD</div>
            {services[selectedApi].map((item) => (
              <div key={item.name} className="w-full border-b p-2 flex justify-center">
                {item.method}
              </div>
            ))}
          </th>
          <th className="w-full flex border-r flex-col justify-center">
            <div className="w-full border-b p-2">PARAMS</div>
            {services[selectedApi].map((item) => (
              <div key={item.name} className="flex border-b">
                {Object.keys(item.parameters).map((key) => (
                  <div key={key} className="w-full p-2 justify-center">
                    {key}
                  </div>
                ))}
              </div>
            ))}
          </th>
          <th className="w-full flex flex-col justify-center">
            <div className="w-full border-b p-2">ENDPOINT</div>
            {services[selectedApi].map((item) => (
              <a
                key={item.name}
                href={BASE_URL + item.url}
                className="w-full font-mono text-red-400 border-b p-2 flex justify-center"
              >
                {item.endpoint}
              </a>
            ))}
          </th>
        </tr>
      </thead>
    </table>
  );
}

export default Table;