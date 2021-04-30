import React, {useState} from 'react';
import { DataGrid, GridColDef, GridDataContainer, GridValueGetterParams } from '@material-ui/data-grid';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button,Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle} from '@material-ui/core';
import { CharacterForm } from '../../components/CharacterForm';



const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'name', headerName: 'Character Name', width: 175 },
    { field: 'description', headerName: 'Description', width: 300 },
    { field: 'comics_appeared_in', headerName: 'Comics Appeared In', width: 300 },
    { field: 'super_power', headerName: 'Super Power', width: 300 },
  ];



interface gridData{
  data:{
    id?:string;
  }
}


export const DataTable = () => {
    
    let { characterData, getData } = useGetData();
    
    console.log(characterData)
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<gridData>({data:{}})

    // These handles relate to the dialog box we create below
    let handleOpen = () =>{
      setOpen(true)
    }

    let handleClose = () =>{
      setOpen(false)
    }

    let deleteData = () =>{
      server_calls.delete(gridData.data.id!)
      getData()
    }

    console.log(gridData.data.id)
      return (
        <div style={{ height:400, width: '100%'}}>
            <h2>Characters in Inventory</h2>
            {/* pageSize={5} is the number of rows of data displayed (it shows 5 rows out of 9 and can page over to next 4 rows) */}
            <DataGrid rows = {characterData} columns = {columns} pageSize={5} checkboxSelection onRowSelected = { setData } />
            <Button onClick={handleOpen}>Update</Button>
            <Button variant="contained" color="secondary" startIcon={<DeleteIcon/>} onClick={deleteData}>Delete</Button>

            {/* Dialog Pop Up Begin */}
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">Update Character</DialogTitle>
              <DialogContent>
                <DialogContentText>Update Character</DialogContentText>
                  <CharacterForm id={gridData.data.id!}/>
              </DialogContent>
              <DialogActions>
                <Button onClick = {handleClose} color="primary">Cancel</Button>
                <Button onClick = {handleClose} color="primary">Done</Button>
              </DialogActions>
            </Dialog>


        </div>
      )
  }