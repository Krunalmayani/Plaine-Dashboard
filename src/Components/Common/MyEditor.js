import React, { useState } from 'react';
import "quill/dist/quill.snow.css";
import { useQuill } from 'react-quilljs';


// You can choose a different theme if you prefer

const MyEditor = ({ meet, name ,id,placeholder }) => {
    console.log('meet L', meet);

    const { quill, quillRef } = useQuill();

    // Customize Quill's toolbar and options here (if needed)
    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ],
    };

    if (quill) {
        quill.setContents([]); // Set initial content if needed

        // Handle Quill changes
        quill.on('text-change', (delta, oldDelta, source) => {
            if (source === 'user') {
                // Handle changes made by the user
            }
        });
    }

    return (
        <div>
            <div style={{ height: 150 }} ref={quillRef}
                name={name}
                id={id}
                placeholder={placeholder}
            />
        </div>
    );
};

export default MyEditor;