// JavaScript Document


		new Vue({
			el: '#app',
			data: {
				fruits: [
					{id: 1,name: "BBVA",color: "Rojo"},
					{id: 2,name: "Santander",color: "Verde"},
					{id: 3,name: "Bankindra",color: "Amarillo"},
					{id: 4,name: "Banbajio",color: "Rojo"},
					{id: 5,name: "Banamex",color: "Rojo"}
				],
				filterFieldNombre:'',
				filterFieldColor:''
			},
			methods: {
				filterNombre: function (fruits) {
					var show=true;
					if(fruits.name.toLocaleLowerCase().indexOf(this.filterFieldNombre.toLocaleLowerCase())<0||fruits.color.toLocaleLowerCase().indexOf(this.filterFieldColor.toLocaleLowerCase())<0)
						show=false;
					return show;
				}
			}

		});