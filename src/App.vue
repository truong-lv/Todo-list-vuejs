<template>
  <div class="app-container">
    <h1 class="app-header">Vue TODO LIST</h1>

    <div class="add-task">
      <input type="text" placeholder="Add new task" class="task-input">
      <input type="submit" class="submit-task" value="" title="add-task">
    </div>

    <ul class="task-list">
      <li class="task">
        <label class="task-list-item-label">
          <input type="checkbox">
          <span>Task</span>
        </label>
        <span class="delete-btn" title="delete-task"></span>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App'
  
}
</script>

