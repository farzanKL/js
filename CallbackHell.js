
//An example of ecommerce website to show CallbackHell.

const cart = ["shoes", "pants", "kurta"];

api.createOrder(cart, function () {

    api.proceedToPayment(function () {

        api.showOrderSummary(
            function () {
                api.updateWallet()
            }
        )
    })

})

//In above code,Here one api is dependent into another api due to multiple callback function,
//hence it leads to CallbackHell and the code keeps growing horizantally instead vertically i.e.
//it makes pyramid of doom, Means the code becomes unreadable & unmaintainable.
//Also Ccallback causes Inversion of control i.e. losing the controls over the code means due to callback,
//granting the control of execution of callback function to its parent function.
//and now the access goes to that function whether it will execute or not.
