import React from 'react';
import {
    AppBar, 
    Typography, 
    Button, 
    TextField, 
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogTitle,
    Toolbar,
    Fab,
  } from '@material-ui/core';
  import AddIcon from '@material-ui/icons/Add';

export default function PaperAppBar({props}){   
  const style={
    appbar: {width: "50%", marginLeft: "25%", backgroundColor: "lightblue"},
    typography: {flexGrow: 1},
    fab: {color: "lightblue", backgroundColor: "GhostWhite"},
  }
    return(<div>
        <AppBar className="appbar" position="static" style={style.appbar}>
        <Toolbar>  
          <Typography  variant="h6" color='inherit' style={style.typography}>
            List of papers
           </Typography>
           <Fab style={style.fab} size="medium"  onClick={props.handleClickOpen}>
              <AddIcon edge="end" />
              </Fab>
           </Toolbar>
        </AppBar>
    <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title" maxWidth="xl">
          <DialogTitle id="form-dialog-title">New paper</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="New paper title"
              style={{width: "500px"}}
              onChange={(e)=>{
                props.setValue({name:`${e.target.value}`})
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={props.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={props.add} color="primary">
            Add
            </Button>
          </DialogActions>
    </Dialog>
    </div>       
    )
}