<template>
  <div class="app-container">
    <h1 class="app-header">Vue TODO LIST</h1>

    <div class="add-task">
      <input type="text" placeholder="Add new task" class="task-input" v-model="taskName" @keyup.enter="submitItem">
      <input type="submit" class="submit-task" value="" title="add-task" @click="submitItem">
    </div>
    <ul class="task-list">
      <li class="task-list-item" v-for="(task,index) in tasks"
                v-bind:key="task.id" >
        <label class="task-list-item-label">
          <input type="checkbox"
                  v-model="task.isDone"
                  @change="doneItem()">
          <span>{{task.name}}</span>
        </label>
        <div class="task-list-control">
          <span class="edit-btn" title="edit-task" @click="editItem(index)">{{task.del}}</span>
        <span class="delete-btn" title="delete-task" @click="deleteItem(task)">{{task.del}}</span>
        </div>
        
      </li>
    </ul>
  </div>
</template>

<script>
import localAdapter from './LocalStorangeHelper'
// this is feature change
// this is release change(hot fix update)
export default {
  name: 'App',
  data(){
    return {
      taskName:'',
      editIndex:null,
      tasks:[]
    }
  },
  methods:{
    submitItem: function(){
      if(!this.taskName){
        return
      }

      if(this.editIndex===null){
        const item={
          name:this.taskName,
          del:'',
          isDone:false
        }
        this.tasks.push(item)
        localAdapter.saveTask(this.tasks)
      }else{
        this.tasks[this.editIndex].name=this.taskName;
        this.editIndex=null;
      }
      
      this.taskName='';
    },

    doneItem: function(){
      localAdapter.saveTask(this.tasks)
    },

    deleteItem: function(task){
      this.tasks.splice(this.tasks.indexOf(task),1);
    },

    editItem: function(index){
      this.taskName=this.tasks[index].name;
      this.editIndex=index;
    }
  },
  watch:{
    tasks(newTasks){
      localAdapter.saveTask(newTasks)
    }
  },
  created(){
    if(localAdapter.getTask()){
      this.tasks=localAdapter.getTask()

    }
  }
}
</script>

