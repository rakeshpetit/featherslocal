// const feathers = require('feathers/client');

var socket = io('http://localhost:3030', {
    transports: ['websocket']
});

var app = feathers();

app.configure(feathers.socketio(socket));
app.configure(feathers.authentication());


window.onload=function(){
    const content = document.querySelector('#allContent');
    content.style.display = 'none';
    const loginForm = document.querySelector('#loginForm');    
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(loginForm);
            const login = {
                email: formData.get('email'),
                password: formData.get('password')
            };
            app.authenticate({
                strategy: 'local',
                email: login.email,
                password: login.password
            }).then(data => {
                console.log(data);
                // window.location.href="site/index.html";
                content.style.display = '';
                loginForm.style.display = 'none';
                
              }).catch(err => console.log(err)
              );
    
        });
    
  }





