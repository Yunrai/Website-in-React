function ContactForm(){
    return(
        <>
         <form novalidate id="contactform">
                <label for="fname">Nume</label>
                <input type="text" name="Nume Complet" required/>
                <label for="fname">Email</label>
                <input type="email" name="Email" required/>
                <label for="fname">Titlul Mesajului</label>
                <input type="text" name="Titlul Mesajului" required/>
                <label for="fname">Mesajul tău</label>
                <textarea name="Mesaj" rows="8" placeholder="Scrie mesajul tău aici"></textarea>
                <button type="submit">Trimite</button>
        </form>
        </>
    )
}

export default ContactForm;