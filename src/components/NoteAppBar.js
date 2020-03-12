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
  import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

export default function NoteAppBar({id, props, state}){   
  const style ={
    appBar:{width: "50%", marginLeft: "25%", backgroundColor: "lightblue"},
    fab1: {color: "GhostWhite", backgroundColor: "lightblue", marginRight: "10px"},
    fab2: {color: "lightblue", backgroundColor: "GhostWhite"},
  }
    return(<div>
        <AppBar position="static" style={style.appBar}>
        <Toolbar>
        
        <Fab style={style.fab1} size="medium"  onClick={()=>state()} >
            <KeyboardBackspaceIcon />
         </Fab>
          <Typography  variant="h6" color='inherit' style={{flexGrow: 1}}>
           
           </Typography>
           <Fab style={style.fab2} size="medium"  onClick={props.handleClickOpen}>
              <AddIcon edge="end" />
              </Fab>
           </Toolbar>
        </AppBar>
    <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title" maxWidth="xl">
          <DialogTitle id="form-dialog-title">New Note</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="New paper title"
              style={{width: "500px"}}
              onChange={(e)=>{
                props.setValue({note:`${e.target.value}`})
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