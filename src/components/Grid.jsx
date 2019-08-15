import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {
          headerName: "Make",
          field: "make",
          sortable: true
        },
        {
          headerName: "Model",
          field: "model"
        },
        {
          headerName: "Price",
          field: "price"
        }
      ],
      rowData: [
        {
          make: "鉴于上述违规",
          model: "Celica",
          price: 35000
        },
        {
          make: "张家鉴于上述",
          model: "Mondeo",
          price: 32000
        },
        {
          make: "对你董事长",
          model: "Boxter",
          price: 72000
        },
        {
          make: "啊哈",
          model: "Boxter",
          price: 72000
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <div
          className="ag-theme-balham"
          style={{
            height: "500px",
            width: "600px"
          }}
        >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
            accentedSort={true}
          />
        </div>
      </div>
    );
  }
}

export default Grid;
