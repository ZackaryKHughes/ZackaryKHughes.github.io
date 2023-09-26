const scriptURL = 'https://script.google.com/macros/s/AKfycbysXakwJN94dlTtR7kOwx5kY3WLWsBD7J3Om8Q4I71d6hePUVWo34RZg3MJE3-Uc8ogPA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {msg.innerHTML = "Message Sent Successfully"})
        setTimeout(function(){msg.innerHTML = ""},5000)
            form.reset()
        .catch(error => console.error('Error!', error.message))
})