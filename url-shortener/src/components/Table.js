import React from "react";

function Table(props) {
  return (
    <div className="mt-5">
      <table className="table">
        <thead>
          <tr>
            <th className="text-muted" scope="col">
              Original
            </th>
            <th className="text-muted" scope="col">
              Shortened
            </th>
          </tr>
        </thead>
        {props.urls.length > 0 ? (
          <tbody>
            {props.urls.map((element, i) => {
              return (
                <tr key={i}>
                  <td>{props.url}</td>
                  <td>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={`${props.APIUrl}/${element}`}
                    >
                      {props.APIUrl}/{element}
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        ) : null}
      </table>
    </div>
  );
}

export default Table;
