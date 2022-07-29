<template>
  <datepicker :value="date" :inline="true"></datepicker>
</template>

<script>
export default {
    name: 'TimePicker',
    data() {
        return {
        date: new Date(2016, 9, 16),
        };
    },
};
</script>