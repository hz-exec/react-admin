import "./newUser.css"

export default function NewUser() {
  return (
    <div className='newUser'>
        <form>
              <div className="newUserItem">
                  <label>Username</label>
                  <input type="text" placeholder="john" />
              </div>
              <div className="newUserItem">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" />
              </div>
              <div className="newUserItem">
                  <label>Email</label>
                  <input type="email" placeholder="john@gmail.com" />
              </div>
              <div className="newUserItem">
                  <label>Password</label>
                  <input type="password" placeholder="password" />
              </div>
              <div className="newUserItem">
                  <label>Phone</label>
                  <input type="text" placeholder="+1 234 567 89" />
              </div>
              <div className="newUserItem">
                  <label>Address</label>
                  <input type="text" placeholder="New York | USA" />
              </div>
              <div className="newUserItem">
                  <label>Gender</label>
                  <input type="radio" name="gender" id="male" value="male" />
                  <label for="male"></label>
                  <input type="radio" name="gender" id="female" value="female" />
                  <label for="female"></label>
                  <input type="radio" name="gender" id="other" value="other" />
                  <label for="other"></label>
              </div>
        </form>
    </div>
  )
}
