<template>
  <div class="pagination-container">
    <div class="pagination">
      <button class="button button--pagination pagination__item" type="button">1</button>
      <button class="button button--pagination pagination__item" type="button">...</button>
      <button class="button button--pagination pagination__item" type="button">4</button>
      <button
        class="button button--pagination pagination__item pagination__item--selected"
        type="button"
      >5</button>
      <button class="button button--pagination pagination__item" type="button">6</button>
      <button class="button button--pagination pagination__item" type="button">...</button>
      <button class="button button--pagination pagination__item" type="button">59</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaginationPanel',
};
</script>
