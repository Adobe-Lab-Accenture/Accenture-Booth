import React, {useState} from 'react';

const App = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (submitted) {
      setSubmitted(true);
      window.location = 'https://adobe-lab-accenture.github.io/Accenture-Booth/';
    }
  };

  return (
    <>
      <style>
        {`
          body {
            font-family: 'Arial', sans-serif;
            background-color: #f2f2f2;
            margin: 0;
            padding: 0;
          }

          .container {
            padding: 20px;
          }

          header {
            background-color: #fff;
            color: #000;
            padding: 20px 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          #logo {
            max-width: 150px;
          }

          h1 {
            font-size: 36px;
            margin: 0;
          }

          #content {
            background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, #b455aa 36%, rgba(0, 212, 255, 1) 100%);
            border-radius: 10px;
            padding: 30px 80px;
            margin: 20px 0px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }

          .section {
            margin: 30px 0px;
            text-align: center;
          }

          .image-booth {
            max-width: 500px;
            max-height: 500px;
            padding: 20px;
            background-color: white;
          }

          .about-us {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          h2 {
            font-size: 28px;
            color: #fff;
            margin: 20px 0;
          }

          p {
            font-size: 18px;
            color: #ccc;
            line-height: 1.5;
          }

          .camera-container {
            display: inline-grid;
            width: fit-content;
            background-color: #f2f2f2;
            border: 1px solid #ccc;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 20px 40px;
          }

          .btn {
            background-color: #004b8d;
            color: #fff;
            padding: 12px 24px;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s;
            margin: 20px 0px;
            width: fit-content;
          }

          .btn:hover {
            background-color: #00396d;
          }

          .additional-info {
            margin-top: 60px;
          }

          footer {
            background-color: #be82ff;
            color: #fff;
            padding: 20px 0;
            text-align: center;
          }

          #userDetailsModal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.4);
            z-index: 1;
          }

          form {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          label {
            font-size: 16px;
            font-weight: 700;
            margin: 10px 0;
            text-align: left;
            width: 100%;
          }

          input[type="text"],
          input[type="email"],
          input[type="tel"] {
            width: 100%;
            padding: 10px;
            margin: 5px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
          }

          button[type="submit"] {
            background-color: #004b8d;
            color: #fff;
            padding: 12px 24px;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s;
            margin: 20px 0;
            border-radius: 5px;
          }

          button[type="submit"]:hover {
            background-color: #00396d;
          }
        `}
      </style>

      <header>
        <img
          id="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Accenture_logo.svg"
          alt="Accenture Logo"
        />
        <h1>Accenture x Adobe</h1>
      </header>

      <div id="content">
        <section className="section" id="about">
          <img
            className="image-booth"
            src="https://res.cloudinary.com/dpmlpcghg/image/upload/v1698713903/Screenshot_2023-10-31_at_11.58.13_am_zjlztz.png"
            alt="Booth"
          />
          <div className="about-us">
            <h2>Guess the prompt!</h2>
            <p>Do you have what it takes to be a Gen AI prompt engineer?</p>
          </div>
        </section>
        <section>
          <input
            type="text"
            style={{ width: '100%', height: '100%' }}
            data-cfminput="true"
            placeholder="Users were frequently stuck on the 'Hours/Contacts/Addresses' fragment after they configure one of these sub-fragments. A note to prompt users to the next "
            disabled=""
            aria-invalid="false"
          />

          <iframe
            name="hidden_iframe"
            id="hidden_iframe"
            title="Google Form Response"
            style={{ display: 'none' }}
            onLoad={() => handleSubmit()}
          ></iframe>

          <form
            id="submit-form"
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdxzWYAEHDD0HCcOAZidlfBvE1-Jfn5v1gDomrwLLzpoFe_Zw/formResponse"
            method="Post"
            onSubmit={() => (setSubmitted(true))}
            target="hidden_iframe"
          >
            <h2 className="form-heading">Please register your response</h2>
            <label>Full Name*</label>
            <input type="text" name="entry.648560916" placeholder="Full Name" required />
            <label>Organization*</label>
            <input type="text" name="entry.1851415518" placeholder="Organization" required />
            <label>Email*</label>
            <input type="text" name="entry.1193286841" placeholder="Email" required />
            <label>Phone</label>
            <input type="text" name="entry.1203715144" placeholder="Phone" />
            <label>Your answer*</label>
            <input type="text" name="entry.1297402032" placeholder="Your answer" required />
            <input type="submit" id="submit" value="Submit" className="test321" />
          </form>
        </section>

        <div className="additional-info section">
          <h2>Learn more about Accenture and Adobe.</h2>
        </div>
      </div>

      <footer>
        <p>&copy; 2023 Accenture x Adobe. All rights reserved.</p>
      </footer>
    </>
  );
};

export default App;
