const vue = new Vue({
    el : '#do-list' ,
    data : {
        tasks : [],
        tasktext : ""
    },
    methods : {
        addtask : function(){
            if(this.tasktext == " "){
                alert("can not push empty task");
            }else{
            this.tasks.push({words : this.tasktext , done : false}),
            this.tasktext = "" 
            }
            
            

        },
        deletetask : function(index){
            this.tasks.splice(index , 1)
        },
        deleteall : function(){
            this.tasks = [],
            this.tasktext = ""
        },
       
    }

})


     
