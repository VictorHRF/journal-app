import React from 'react'
 import { IconButton, Typography } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectedView } from '../views/NothingSelectedView'
import { NoteView } from '../views/NoteView'
import { AddOutlined } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
 
 export const JournalPage = () => {


  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch( startNewNote() );
  }

   return (
    <JournalLayout>

      {/* <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, odit. Perferendis sunt fuga modi! Atque alias eius iure autem deserunt expedita ex, perferendis doloremque veniam inventore odio hic! Cum, dolorem!</Typography> */}

      {/* NothingSelected */}
      <NothingSelectedView />

      {/* NoteView */}      
      {/* <NoteView/> */}

      <IconButton
        onClick={ onClickNewNote }
        size='large'
        sx={{
          color:'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

    </JournalLayout>
   )
 }
 