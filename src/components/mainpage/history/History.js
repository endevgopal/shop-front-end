import React, { useContext } from 'react';
import { GlobalState } from '../../../GlobalState';
import { Link } from 'react-router-dom';
import './history.css';

function History() {
  const state = useContext(GlobalState);
  const [history] = state.userApi.history;

  return (
    <div className="history">
      <h2>History</h2>
      <h4>You Have {history.length} Ordered</h4>
      <div className="history_page">
        <table>
          <thead>
            <tr>
              <td>payment ID</td>
              <td>Date of Purchased</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {history.map((item) => (
              <tr key={item._id}>
                <td>{item.paymentID}</td>
                <td>{new Date(item.createdAt).toLocaleTimeString()}</td>
                <td>
                  <Link to={`history/${item._id}`}>View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default History;
