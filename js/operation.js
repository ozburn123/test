// JavaScript Document


		new Vue({
			el: '#app',
			data: {
				user: {
					user: null,
					password: null,
					
				}

			},
			methods: {
				valida: function () {
					const requestOptions = {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(this.user)
					};
					fetch("http://localhost:8080/bankindra/valida", requestOptions)
						.then(response => response.status)
						.then(response =>{
							if(response==200){
								alert("Accediendo al sistema");
								location.href="success.html";
							} else {
								alert ("Usuario o contraseña incorrectos");
								location.href="demoBankindra.html";
							}
						} )
					this.user.user=null;
					this.user.password=null;
				}
			}

		});