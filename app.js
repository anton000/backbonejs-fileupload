var Image = Backbone.Model.extend({ 
	
	readImage: function(file) {
	var reader = new FileReader();
    
    
  // closure to capture the file information.
	reader.onload = (function(theFile,model) {
		console.log('fname : ' + this.cid);
    		return function(e) {
    			//set model
			model.set({filename: theFile.name, filedata: e.target.result});
			model.save();
			};
		})(file,this);
		
		// Read in the image file as a data URL.
    reader.readAsDataURL(file);
		//return this;
    } 
});



var Images = Backbone.Collection.extend({
	model: Image

});
