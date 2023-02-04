import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import './Google.css';

const CreateNote = (props) =>{

    const [expand, setExpand] = useState(false);
    const [note, setNote] = useState(
        {
            title: '',
            content: '',
        }
    );

    const inputEvent = (event) => {
     
    //  const value = event.target.value;
    //  const name = event.target.name;

     const {name, value} = event.target;

        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
           
        });

        console.log(note);
    };

    const addEvent = () =>{ 
        props.passNote(note);
        setNote({
            title: "",
            content: "",
           }); 
    };
//for expand the title of create note bar
    const expandIt = () =>{
        setExpand(true);
    }
       return (
        <>
        <div className='main_note'>
            <form >
                {expand ?
                <input type="text" name='title' value={note.title} onChange={inputEvent} placeholder='title' autoComplete='off'/>
                    : null}
                <textarea  name='content' rows="6" column="70" value={note.content} onChange={inputEvent} onClick={expandIt} placeholder='write a note here'/>
                <Button onClick={addEvent} > 
                    <AddIcon className='plus_sign' />
                </Button>
            </form>
        </div>
        </>
    );
}; 
export default CreateNote;