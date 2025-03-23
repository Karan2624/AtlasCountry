export const Contact = () => {
    const handleFormSubmit = (formData) => {
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);
    }
    return (
        <section className="section-contact">
            <div className="container-title">
                contact us
            </div>
            <div className="contact-wrapper container">
                <form action={handleFormSubmit}>
                    <input required name="username" type="text" placeholder="enter your name" autoComplete="off" className="form-control"/>
                    <input type="text" name="email" placeholder="Enter your email" required className="from-control" autoComplete="off" />
                    <textarea className="form-control" rows="10" placeholder="Enter your Message" name="message" autoComplete="off" required />
                    <button value="send" type="submit">Submit</button>
                </form>
               
            </div>
        </section>
    )
}