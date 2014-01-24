function PaymentController($scope) {
	$scope.payment
	$scope.payments = [{gateway:"MOIP", type:"Boleto", bank:"Itau"},
					   {gateway:"MOIP", type:"Cartão de Crédito", brand:"VISA"},
					   {gateway:"MOIP", type:"Cartão de Crédito", brand:"MASTERCARD"},
					   {gateway:"MOIP", type:"Cartão de Crédito", brand:"MASTERCARD"},
					   {gateway:"MOIP", type:"Debit", bank:"Itau"}]

	$scope.selectPayment = function(payment) {
	/*	console.log("Controller Pagamento: " + payment)
		console.log($scope.$parent)
		$scope.$parent.selectPayment =  payment*/
		$scope.payment = payment
		console.log("PagamentoController: emitindo evento")
		$scope.$emit('selectPayment', {payment: payment})
	}
	
}