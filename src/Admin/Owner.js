import React, { useState, useEffect } from 'react';
import CsvDownloader from 'react-csv-downloader';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import { Url} from '../constants/Global';


import { TableFooter } from '@mui/material';
const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});




function Owner() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [rows, setRows] = useState([]);
  const classes = useStyles();
  const[datas,setDatas]=useState([]);
const [page, setPage] = React.useState(10);
const [totalpage, setTotalpage] = React.useState(1);
const [rowsPerPage, setRowsPerPage] = React.useState(10);
const[UUID]=useState();
const handleChangePage = (event, newPage) => {
  console.log(newPage,page)
  setPage(newPage);
  
  console.log(newPage,page,rowsPerPage)
  console.log(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  dataload(newPage,UUID,rowsPerPage);
};

const handleChangeRowsPerPage = event => {
  setRowsPerPage(parseInt(event.target.value,10));
  
};

const emptyRows =
  rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
console.log(emptyRows,rowsPerPage, rows.length ,page)

    
    useEffect(() => {

      const UUID = JSON.parse(localStorage.getItem('UUID'));
      if (UUID) {

         console.log(UUID);
       
      }

        dataload(page,UUID,rowsPerPage);
   
    }, [])
    function dataload(new_Page,_UUID,_rowsPerPage){
  
      fetch(Url+"/v2/owners/"+new_Page+"?size="+_rowsPerPage+"&userId&sort=desc",{
        method:'get',        
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json',
           'x-auth': _UUID
        }
      })
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            console.log(result.payload);
            setRows(result.payload.list);
            setTotalpage(result.payload.total_page)
            console.log(result.payload.total_page);
            setDatas(result.payload.list);
            
          },
        
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
      console.log("dataload",new_Page)
    }
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
       
        <div>
          
        <TableContainer component={Paper}>
         <Table className={classes.table} aria-label="simple table">
           <TableHead>
           <TableRow>  
             <TableCell>User ID</TableCell>
             <TableCell>Name</TableCell>
             <TableCell>Email</TableCell>
             <TableCell>Phone Number</TableCell>
             </TableRow>  
           </TableHead>
           {rows
           .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
           .map((row, index) => (
           <TableBody>
             <TableRow>
             <TableCell>{row.userId}</TableCell>
             <TableCell>{row.firstName}</TableCell>
             <TableCell>{row.emails[0].email}</TableCell>
             <TableCell>{row.phone}</TableCell>
        </TableRow>

        {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
           
           ))}
         </Table>
         <Table>
  <TableBody /> 
  <TableFooter>
    <TableRow>
      <TablePagination
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[10, 50,100,200]}
        labelRowsPerPage={<span>Rows:</span>}
        labelDisplayedRows={({ page }) => {
          return `Page: ${page}`;
        }}
        backIconButtonProps={{
          color: "primary"
        }}
        nextIconButtonProps={{ color: "primary" }}
        SelectProps={{
          inputProps: {
            "aria-label": "page number"
          }
        }}
        showFirstButton={true}
        showLastButton={true}
     
      />

    </TableRow>
   
  </TableFooter>
</Table>
          
<CsvDownloader
        filename="owner"
        extension=".csv"
        datas={datas}
        text="DOWNLOAD FILE" />
      
         </TableContainer>
         </div>
      
      );
    }
  }
  
  export default Owner;