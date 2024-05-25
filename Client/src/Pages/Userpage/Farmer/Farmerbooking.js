import React from "react";
import { useState } from "react";

function Farmerbooking() {
  const [users, setUsers] = useState([]);
  const [machinery, setMachinery] = useState([]);
  const [Farmer, setFarmer] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(users.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers.map((number) => (
      <button
        className="pagenumber"
        key={number}
        onClick={() => handlePageChange(number)}
        disabled={currentPage === number}
      >
        {number}
      </button>
    ));
  };
  return (
    <div>
      <div className="Notecontainer" id="notecontainer">
        <p className="verification" id="verification">
          Waiting for your Confirmation!
        </p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>District</th>
              <th>Acre Count</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <td>kjhbekfb</td>
            <td>sinnathampanai</td>
            <td>vavuniya</td>
            <td>2 Acre</td>
            <td className="verifycationconfirm">
              <button className="Confirm">Confirm</button>
              <button className="Confirm" id="cancel">
                Cancel
              </button>
            </td>
          </tbody>
        </table>
        <div className="pagination">{renderPageNumbers()}</div>
      </div>
    </div>
  );
}

export default Farmerbooking;
