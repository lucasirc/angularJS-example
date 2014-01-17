function AddressController($scope) {


	$scope.address = {CEP: "12312-333", 
					  street: "Rua 12", 
					  number: "n 32", 
					  city: "Rio de Janeiro", 
					  neighborhood:"Botafogo", 
					  country: "Brasil"}

	$scope.addresses = [{CEP: "12312-333", 
					  		street: "Rua 12", 
					  		number: "n 32", 
					  		city: "Rio de Janeiro", 
					  		neighborhood:"Botafogo", 
					  		country: "Brasil"},
					  	 {CEP: "55555-111", 
							street: "Rua 52", 
							number: "n 12", 
							city: "São Paulo", 
							neighborhood:"Morumbi", 
							country: "Brasil"}
					  	]

	
}