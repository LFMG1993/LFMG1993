document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_kujd59r', 'template_qb1h4op', this)
            .then(function() {
                console.log('SUCCESS!');
                alert('Su mensaje ha sido enviado. Nos pondremos en contacto!');
            }, function(error) {
                console.log('FAILED...', error);
                alert('Hubo un error al enviar su mensaje. Por favor, inténtelo de nuevo.');
            });
    });
});