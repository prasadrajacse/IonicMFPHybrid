
/* JavaScript content from js/main.js in folder common */
function wlCommonInit(){
	/*
	 * Use of WL.Client.connect() API before any connectivity to a MobileFirst Server is required. 
	 * This API should be called only once, before any other WL.Client methods that communicate with the MobileFirst Server.
	 * Don't forget to specify and implement onSuccess and onFailure callback functions for WL.Client.connect(), e.g:
	 *    
	 *
	 *
	 */
	/*angular.element(document).ready(function() {
		angular.bootstrap(document, ['starter']);
	});*/

	// Common initialization code goes here
	var env = WL.Client.getEnvironment();
	if(env === WL.Environment.IPHONE || env === WL.Environment.IPAD){
		document.body.classList.add('platform-ios');
	} else if(env === WL.Environment.ANDROID){
		document.body.classList.add('platform-android');
	}

	     WL.Client.connect({
	     		onSuccess: function () {
					alert('connected');
				},
	     		onFailure: function (error) {
					alert(error);
				}
	     });

	// Common initialization code goes here
	
}

/* JavaScript content from js/main.js in folder android */
// This method is invoked after loading the main HTML and successful initialization of the MobileFirst runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
}