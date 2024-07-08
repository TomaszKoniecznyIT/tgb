export default function AboutContent() {
  return (
    <>
      <div>
        <h1>Idea for an application.</h1>
        <p>
          The idea for this app originated from my current job. I needed a
          simple application to monitor the progress of monthly sales goals in
          stores and to provide information on which days of the week we
          experience the highest traffic, allowing us to allocate more staff
          during peak times.
        </p>
      </div>
      <div>
        <h1>Programming languages ​​and technologies used in the project</h1>
        <p>
          In the project, I used JavaScript with React for the part of the
          application you see. ChartJS is responsible for the charts. However,
          much more is hidden underneath. The API, written in Python using Flask
          and SQLAlchemy, handles communication with the PostgreSQL database.
          Passwords are hashed for security, and tokens are used for
          authorization. Thanks to platforms like Netlify, Heroku, and
          ElephantSQL, the application is now available online for use. Tools
          such as DBeaver, Postman, and Midjourney were also invaluable in the
          development process.
        </p>
      </div>
    </>
  );
}
