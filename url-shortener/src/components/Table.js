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
                  <td>{element.origin}</td>
                  <td>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={`${props.baseUrl}/${element.shortcode}`}
                    >
                      {props.baseUrl}/{element.shortcode}
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
