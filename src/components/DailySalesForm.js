import { Form } from "react-router-dom";

export default function DailySale({ onClose }) {
  return (
    <Form>
      <h1>Daily Sale</h1>
      <div>
        <button>previous</button>
        <button>next</button>
      </div>
      <div>
        <p>
          <label htmlFor="date">Day</label>
          <input id="date" type="date" name="date" />
        </p>
        <p>
          <label htmlFor="number">Total Sale</label>
          <input id="number" type="number" name="number" />
        </p>
      </div>
      <div>
        <button onClick={onClose}>Cancel</button>
        <button type="submit">Save</button>
      </div>
    </Form>
  );
}
