import './SignInForm.css';

const SignInForm = () => {
    return ( 
        <div className="form mb-3">
            <form method="post">
                <h5>Sign in to your account.</h5>
                <div className="form-input">
                    <label htmlFor="email" className="visually-hidden">Email</label>
                    <input className="form-control" type="email" name="email" id="email" placeholder="Email address" autoFocus autoComplete="on" required/>
                </div>
                <div className="form-input">
                    <label htmlFor="password" className="visually-hidden">Password</label>
                    <input className="form-control" type="password" name="password" id="password" required aria-required autoComplete="on" placeholder="Password"/>
                </div>
                <button className='btn btn-success' type="submit">Sign in</button>
            </form>
        </div>
     );
}
 
export default SignInForm;
