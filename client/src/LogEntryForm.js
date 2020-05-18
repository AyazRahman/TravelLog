import React from "react";

const LogEntryForm = () => {
  return (
    <form className="entry-form">
      <label for="title">Title</label>

      <input name="title" />
      <label for="comments">Comments</label>
      <textarea name="comments" rows={3}></textarea>
      <label for="description">Description</label>
      <textarea name="description" rows={3}></textarea>
      <label for="image">Image</label>
      <input name="image" />
      <label for="visitDate">Title</label>
      <input name="visitDate" type="date" />
      <button>Create Entry</button>
    </form>
  );
};

export default LogEntryForm;
