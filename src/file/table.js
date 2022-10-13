import * as React from 'react';
import { forwardRef } from 'react';
import MaterialTable from 'material-table';
import Paper from '@mui/material/Paper';

import AddBox from '@material-ui/icons/AddBox';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Check from '@material-ui/icons/Check';
import Clear from '@material-ui/icons/Clear';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} style={{ fontSize: 18 }} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
};


export default function TableForm() {
  const { useState } = React;

  const [columns, setColumns] = useState([
    { title: 'Item', field: 'item' },
    { title: 'Qty', field: 'qty', type: 'numeric' },
    { title: 'Rate', field: 'rate', type: 'numeric' },
    { title: 'Amount', field: 'amount', type: 'numeric' },
  ]);

  const [data, setData] = useState([
   
  ]);

  return (
    <MaterialTable
      title=""
      columns={columns}
      icons={tableIcons}
      data={data}
      components={{
        Container: props => <Paper {...props} elevation={0} />
      }}
      options={{
        paging: false,
        search: false,
        sorting: false,
        headerStyle: {
          backgroundColor: '#6fd5f1',
          color: '#000000'
        },
        rowStyle: {
          fontSize: 14,
        },

      }}
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);

              resolve();
            }, 1000)
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);

              resolve()
            }, 1000)
          }),
      }}
    />
  )
}

