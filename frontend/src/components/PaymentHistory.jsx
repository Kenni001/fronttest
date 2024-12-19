import { useState, useEffect } from "react";
import axios from "axios";

const PaymentHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const { data } = await axios.get(
        "https://fronttest-taupe.vercel.app/api/payments/history"
      );
      setHistory(data);
    };
    fetchHistory();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Amount</th>
          <th>Currency</th>
          <th>Status</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {history.map((payment) => (
          <tr key={payment._id}>
            <td>{payment.amount}</td>
            <td>{payment.currency}</td>
            <td>{payment.status}</td>
            <td>{new Date(payment.createdAt).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PaymentHistory;
