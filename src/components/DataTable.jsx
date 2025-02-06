import React, { useState } from 'react';

const DataTable = ({ data, columns }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredData = data.filter((row) =>
        columns.some((column) =>
            row[column].toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <input
                        type="search"
                        className="form-control form-control-sm"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                </div>
            </div>
            <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                <table className="table my-0" id="dataTable">
                    <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index}>{column}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {filteredData.map((row, index) => (
                        <tr key={index}>
                            {columns.map((column, colIndex) => (
                                <td key={colIndex}>{row[column]}</td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                    <tfoot>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index}>{column}</th>
                        ))}
                    </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default DataTable;