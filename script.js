let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");
let sideMenu = document.getElementById('sidemenu');

const opentab = (tabname) => {
    for (tabLink of tabLinks) {
        tabLink.classList.remove('active-link');
    }

    for (tabContent of tabContents) {
        tabContent.classList.remove('active-tab')
    }

    event.currentTarget.classList.add('active-link')

    document.getElementById(tabname).classList.add("active-tab")
}

const openmenu = () => {
    sideMenu.style.right = "0"
}

const closemenu = () => {
    sideMenu.style.right = "-200px"
}

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwegiC3CB-L_IOFWQiusErOqEHfdBAcPIlluC121B_q2PXJlnzjZAizSlOAMI1T8r193A/exec'
  const form = document.forms['submit-to-google-sheet']

  const msg = document.getElementById('msg');

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => { 
            msg.innerHTML = "Message Sent Successfully"
            setTimeout(() => {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
      .catch(error => console.error('Error!', error.message))
  })