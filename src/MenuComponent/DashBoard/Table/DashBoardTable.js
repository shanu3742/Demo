import React from 'react'
import { Table } from 'rsuite';

const { Column, HeaderCell, Cell } = Table;

function DashBoardTable() {
    const fakeLargeData =[
        {Name : 'chary' , product : 'hello' , type : 'simple'}
    ]
          

    return (
        
            <div className = 'dbTable'>
              <Table
                virtualized
                width = {600}
                height={400}
                data={fakeLargeData}
                onRowClick={data => {
                  console.log(data);
                }}
              >
                <Column width={70} align="center" fixed>
                  <HeaderCell>Id</HeaderCell>
                  <Cell dataKey="id" />
                </Column>
      
                <Column width={130}>
                  <HeaderCell>First Name</HeaderCell>
                  <Cell dataKey="firstName" />
                </Column>
      
                <Column width={130}>
                  <HeaderCell>Last Name</HeaderCell>
                  <Cell dataKey="lastName" />
                </Column>
      
                <Column width={90}>
                  <HeaderCell>City</HeaderCell>
                  <Cell dataKey="city" />
                </Column>
      
                <Column width={90}>
                  <HeaderCell>Street</HeaderCell>
                  <Cell dataKey="street" />
                </Column>
      
                <Column width={90}>
                  <HeaderCell>Company Name</HeaderCell>
                  <Cell dataKey="companyName" />
                </Column>
              </Table>
            </div>
          );
    
}

export default DashBoardTable;
