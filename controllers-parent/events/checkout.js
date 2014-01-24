function CheckoutController($scope) {

	$scope.selectPayment

	$scope.$on("selectPayment", function(e, params) {
		console.log("CheckoutController: recebendo evento")
		console.log("evento de pagamento selecionado")
		console.log(params)
		console.log(e)
	})


}