
app.service('myService',function(){
    this.user={};

    this.getUser = function(){
        return this.user;
    }

    this.setUser = function(user){
        this.user = user;
    }
});