function Report({ report }) {
  return (
    <div>
      <h1>Report Dane</h1>
      <ol>
        {report.map((data) => (
          <li key={data.id}>
            <div>
              <h2>{data.day}</h2>
              <h3>{data.total}</h3>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Report;
