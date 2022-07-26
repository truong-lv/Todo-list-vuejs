<template>
  <div class="app-container">
    <h1 class="app-header">Vue TODO LIST</h1>

    <div class="add-task">
      <input type="text" placeholder="Add new task" class="task-input" v-model="tasks.name" @keyup.enter="newItem">
      <input type="submit" class="submit-task" value="" title="add-task" @click="newItem">
    </div>

    <ul class="task-list">
      <li class="task-list-item" v-for="task in tasks"
                v-bind:key="task.id" >
        <label class="task-list-item-label">
          <input type="checkbox">
          <span>{{task.name}}</span>
        </label>
        <div class="task-list-control">
          <span class="edit-btn" title="edit-task" @click="deleteItem(task)">{{task.del}}</span>
        <span class="delete-btn" title="delete-task" @click="deleteItem(task)">{{task.del}}</span>
        </div>
        
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      title:' To do list',
      tasks:[
        {id:1,name:'Làm đồ án'},
        {id:2,name:'Nghiên cứu source'},
        {id:3,name:'Học framework mới'}
      ]
    }
  },
  methods:{
    newItem: function(){
      if(!this.tasks.name){
        return
      }
      this.tasks.push({
        name:this.tasks.name,
        del:''
      })
      this.tasks.name='';
    },
    deleteItem: function(task){
      this.tasks.splice(this.tasks.indexOf(task),1);
    }
  }
}
</script>

