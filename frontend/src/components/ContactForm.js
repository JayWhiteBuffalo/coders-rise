

export default function ContactForm() {


    return(

<form onSubmit={(e) => {e.preventDefault()}}>
  <div class="form-group">
    <label for="fName">First Name</label>
    <input type="text" class="form-control" id="fName" placeholder="First Name" required></input>
  </div>

  <div class="form-group">
    <label for="lName">Last Name</label>
    <input type="text" class="form-control" id="lName" placeholder="Last Name" required></input>
  </div>

  <div class="form-group">
    <label for="emailAdd">Email</label>
    <input type="email" class="form-control" id="email" placeholder="name@example.com" required ></input>
  </div>
  
  <div class="form-group">
    <label for="contactMessage">Leave your message here</label>
    <textarea class="form-control" id="contactMessage" rows="3"></textarea>
  </div>

  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
);
}