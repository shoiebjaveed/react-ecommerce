import Card from '../components/UI/Card';
import classes from './Contact.module.css';



const submitFormHandler = async (e) => {
    e.preventDefault()
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    const userDetails = {
        name,
        email,
        mobile
    }

    const res = await fetch('https://react-ecom-bookings-default-rtdb.firebaseio.com/userDetails.json', {
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers: {
        'Content-type': 'application/json'
      }
    })
    const data = await res.json();
    console.log(data)
    
  }


const Contact = () => {

    return (
        <Card className={classes.card}>
            <h1>Contact us</h1>
            <h3>for bookings enter your details</h3>
            <section className={classes.form}>
        <form onSubmit={submitFormHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Name</label>
          <input type='text' id='name' />
        </div>
        <div className={classes.control}>
          <label htmlFor='opening-text'>Email</label>
          <input type='email' id='email' />
        </div>
        <div className={classes.control}>
          <label htmlFor='date'>Mobile</label>
          <input type='number' id='mobile' />
        </div>
        <div className={classes.control}>
        <button>Book a call</button>
        </div>
      </form>
      </section>
      </Card>
    )
}

export default Contact;