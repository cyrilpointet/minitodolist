<template>
  <div class="noteListItem">
    <div class="item text" @click="$emit('selectme')">
      <p>{{ note.text }}</p>
    </div>

    <button class="btn warning" @click.stop="$emit('deleteme')">
      <span class="material-icons">delete</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "noteListItem",
  props: ["note"]
};
</script>

<style lang="scss">
.noteListItem {
  display: flex;
  margin-bottom: 1rem;
  .text {
    flex-grow: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-right: 1rem;
    height: 48px;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    border-radius: 12px;
    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
