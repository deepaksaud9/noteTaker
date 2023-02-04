import React, { useState } from "react";
import Header from "./GoogleKeep/Header";
import Footer from "./GoogleKeep/Footer";
import CreateNote from "./GoogleKeep/CreateNote";
import Note from "./GoogleKeep/Note";

const App = () =>{

    const[addItem, setAddItem] = useState([]);

    const addNote = (note) =>{
        // alert("I am clicked");
            setAddItem((prevData) => {
                return [...prevData, note];
            } );
        console.log(note);
    };
        const onDelete = (id) =>
        {
            setAddItem((olddata) => 
            olddata.filter((currdata,index) => {
                return  index !== id;
            }
            )
            )

        };


    return(
        <div className="main">
        <Header />
        <CreateNote  passNote={addNote} />
        {addItem.map((val,index) =>{
            return (<Note 
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
            />);
        } )}
        <Footer />
        
        </div>
    );
};

export default App;