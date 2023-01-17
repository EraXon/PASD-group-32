import React, { ChangeEvent } from "react";

interface PaginationProps {
    setOffset : React.Dispatch<React.SetStateAction<number>>;
    setLimit : React.Dispatch<React.SetStateAction<number>>;
    limit : number;
    offset : number;
}

function Pagination ({setOffset, setLimit, limit, offset} : PaginationProps) {
    function handleNext() : void {
        setOffset((currentOffset) => currentOffset + limit);
    }

    function handlePrevious() : void {
        setOffset((currentOffset) => currentOffset - limit);
    }


    function handleResultsChange(event : ChangeEvent<HTMLSelectElement>) : void {
        const newValue = parseInt(event.target.value);
        setLimit(newValue);
        setOffset((currentOffset) => Math.floor(currentOffset / newValue) * newValue);
    }

    return (
        <>
            <button disabled={offset <= 0} type="button" onClick={handlePrevious}>Previous</button>
            <button type="button" onClick={handleNext}>Next</button>

            <label htmlFor="results">Results Per Page</label>
            <select id="results" name="results" onChange={handleResultsChange}>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>

        </>
    );
}

export {
    Pagination
}