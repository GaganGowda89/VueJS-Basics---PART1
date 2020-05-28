new Vue({

el: '#app',
data: {
show: true,
title: 'vue app...let start ',
cssClass:'',
click: 0,
persons: [
  {name: 'MAX', age: 30},
  {name: 'RAM', age: 26},
  {name: 'ELI', age: 34}
]
},
methods: {
changeTitle(){
     this.title = 'Maga Method Works !!'
  },
 incrementMe(){
    this.click ++;
   
   }    
 },
 computed: {
   counter(){
     return this.click * 2;
   }
  },
  filters: {
    'uppercase': function(value){
       return value.toUpperCase();
    }
  },
  components: {
  'app-user' : {
  data:  function() {
    return {
      
      persons: [
  {name: 'MAX', age: 30},
  {name: 'RAM', age: 26},
  {name: 'ELI', age: 34}
]
    };
  },
  template:`<div><div class="user" v-for="user in persons">
<p> Username: {{ user.name }} - {{ user.age}}
</p>
</div></div>`
   }
  }
});
