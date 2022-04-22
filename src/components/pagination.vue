<template>
  <div class="pagination-container">
    <div class="pagination">
      <span>{{ pagination }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaginationPanel',
  data() {
    return {
      pagination: '1    ...    4    5    6    ...    59',
    };
  },
};
</script>
