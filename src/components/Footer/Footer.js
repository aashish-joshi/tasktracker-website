export const Footer = () => {
    const date = new Date();

    return (
        <footer className="footer">
            <h5 className='footer-title'>TaskTracker &copy; { date.getFullYear() } Aashish Joshi</h5>
        </footer>
    )
};
