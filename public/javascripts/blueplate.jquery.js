(function($) {

	$.fn.bp_task = function(task,settings) {
		var config = {
			id: 0,
			template: $("<div>"),
			onMouseOver: "",
			onMouseOut: ""
		};
		
		if (settings) $.extend(config, settings);
		
		var container = this;
		
		render(this);
		
		container.mouseover(function(){
			// console.log("mouseout");
		});
		
		container.mouseout(function(){
			// console.log("mouseout");
		});
		
		function update(){
			console.log("update");
		}
		
		function destroy(){
			console.log("destroy");
		}
		
    	function render(self){
			console.log("render",config.template);
			container.append(config.template.clone());
			container.data("task",task);
			// container.data("type","task");
			container.find(".subject").html(task.description);
			// container.draggable();
		}
		
		return this; 
		
	}
 
 })(jQuery);

