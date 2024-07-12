import classes from "./AboutContent.module.css";

export default function AboutContent() {
  return (
    <div className={classes.aboutContentContainer}>
      <div>
        <h1>Welcome to our Sales Tracking Application!</h1>
        <p>
          This tool is designed to help you monitor and manage your store's
          sales performance against monthly targets efficiently and effectively.
        </p>
      </div>
      <div>
        <h2>Idea for an application.</h2>
        <p>
          The idea for this app originated from my current job. I needed a
          simple application to monitor the progress of monthly sales goals in
          stores and to provide information on which days of the week we
          experience the highest traffic, allowing us to allocate more staff
          during peak times.
        </p>
      </div>
      <div>
        <h2>Programming languages ​and technologies used in the project</h2>
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
      <div>
        <h2>Here's a quick guide on how to use the application:</h2>
        <h3>For Managers:</h3>
        <h4>Register as a Manager:</h4>
        <p>
          Begin by creating your manager account through the registration page.
        </p>
        <h4>Create Store Accounts:</h4>
        <p>
          Once registered, you can create accounts for each store under your
          supervision.
        </p>
        <h4>Set Monthly Sales Targets:</h4>
        <p>
          Assign monthly sales targets for each store to help track and motivate
          sales performance.
        </p>
        <h4>Generate Reports:</h4>
        <p>
          Access comprehensive reports to monitor the sales performance of each
          store.
        </p>
        <p>Reports include:</p>
        <ol>Total monthly sales.</ol>
        <ol>Percentage of target achieved.</ol>
        <ol>Daily sales figures.</ol>
        <ol>
          Deviations from the average daily sales required to meet targets.
        </ol>
        <ol>Average sales broken down by day of the week.</ol>
        <ol>
          Mid-month projections indicating the required average daily sales to
          meet the end-of-month target.
        </ol>
        <h3>For Store Users:</h3>
        <h4>Log Daily Sales:</h4>
        <p>
          Enter daily sales figures into the system to keep track of your
          store's progress.
        </p>
        <h4>View Reports:</h4>
        <p>
          Generate and review reports specific to your store to analyze sales
          performance and identify areas for improvement.
        </p>
        <h3>Key Features:</h3>
        <h4>Date-Range Reports:</h4>
        <p>
          Access detailed sales data for your store between any specified dates
          to gain insights into sales trends and performance.
        </p>
        <h4>Monthly Sales Reports:</h4>
        <p>
          Get a comprehensive overview of monthly sales performance, including
          total sales, target achievement percentage, daily sales figures,
          deviations from target, and average sales per day of the week.
        </p>
        <p>
          Mid-month reports provide an estimate of the average daily sales
          needed to achieve the monthly target.
        </p>
        <h3>Data Storage:</h3>
        <p>
          All sales data and user information are securely stored in a
          PostgreSQL database, ensuring reliability and accessibility.
        </p>
        <h3>Automatic Logout:</h3>
        <p>
          For security reasons, the application will automatically log you out
          after a set period of time.
        </p>
      </div>
    </div>
  );
}
