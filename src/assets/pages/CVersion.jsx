import { useState } from "react";
import CLeft from "../../components/CLeft";
import CRight from "../../components/CRight";
function CVersion({ tickets, setTickets }) {
  const [choice, setChoice] = useState(1);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({
    employee: "",title: "",category: "Software",priority: "Low",description: "",});
  const addTicket = (e) => {
    e.preventDefault();
    const newTicket = {id: tickets.length + 1001,employee: form.employee,title: form.title,category: form.category,priority: form.priority,description: form.description,status: "Open", };
    setTickets([...tickets, newTicket]);
    setForm({employee: "",title: "",category: "Software",priority: "Low",description: "",});
  };
  const updateStatus = (id, newStatus) => {
    const updatedTickets = tickets.map((ticket) =>
      ticket.id === id ? { ...ticket, status: newStatus } : ticket,);
    setTickets(updatedTickets);};
  const deleteTicket = (id) => {
    const updatedTickets = tickets.filter((ticket) => ticket.id !== id);
    setTickets(updatedTickets);};
  const filteredTickets = tickets.filter(
    (ticket) =>
      ticket.employee.toLowerCase().includes(search.toLowerCase()) ||
      ticket.title.toLowerCase().includes(search.toLowerCase()), );
  return (
    <section className="c-version-page">
      <div className="container">
        {/* Page Header */}
        <div className="text-center py-5">
          <span className="text-primary fw-semibold small text-uppercase">C Version</span>
          <h1>IT Help Desk </h1>
          <p>Manage IT support tickets using the C version.</p>
        </div>
        {/* Main Layout */}
         <div className="row g-4">
          {/* Left Side */}         
          <CLeft choice={choice} setChoice={setChoice} />
          {/* Right Side - Ticket Form */}
          <CRight
  choice={choice}
  tickets={tickets}
  form={form}
  setForm={setForm}
  search={search}
  setSearch={setSearch}
  addTicket={addTicket}
  updateStatus={updateStatus}
  deleteTicket={deleteTicket}
  filteredTickets={filteredTickets}
/>
  </div></div></section>
  )}export default CVersion;
