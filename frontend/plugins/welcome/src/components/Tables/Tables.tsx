import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { DefaultApi } from '../../api/apis';

import { EntRoom } from '../../api/models/EntRoom';
 
const useStyles = makeStyles({
 table: {
   minWidth: 650,
 },
});
 
export default function ComponentsTable() {
 const classes = useStyles();
 const http = new DefaultApi();
 const [Room, setRoom] = useState<EntRoom[]>([]);
 const [loading, setLoading] = useState(true);
 
 useEffect(() => {
   const getRoom = async () => {
     const res = await http.listRoom({ limit: 100, offset: 0 });
     setLoading(false);
     setRoom(res);
     console.log(res);
   };
   getRoom();
 }, [loading]);
 
 
 return (
   <TableContainer component={Paper}>
     <Table className={classes.table} aria-label="ห้องพัก">
       <TableHead>
         <TableRow>
           <TableCell align="center">หมายเลขห้อง</TableCell>
           <TableCell align="center">สถานะห้อง</TableCell>
           <TableCell align="center">ประเภทห้อง</TableCell>
           <TableCell align="center">ราคาห้อง</TableCell>
           <TableCell align="center">ข้อมูลตัวห้อง</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {Room.map(item => (
           <TableRow key={item.id}>
             <TableCell align="center">{item.id}</TableCell>
             <TableCell align="center">{item.edges?.roomstatus?.roomStatus}</TableCell>
             <TableCell align="center">{item.edges?.roomtype?.roomType}</TableCell>
            <TableCell align = "center">{item.edges?.roomtype?.cost}</TableCell>
             <TableCell align="center">{item.edges?.roominfo?.info}</TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>
 );
}
 
