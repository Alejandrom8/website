import React, {useState} from 'react';
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack';

export default function CV(props) {
    const [numPages, setNumPages] =  useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({numPages}) => {
        setNumPages(numPages);
    }

    return (
        <div>
            <Document
                file={props.url}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
        </div>
    )
}