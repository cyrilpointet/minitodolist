<template>
  <div>
    <p class="stampedText">{{ note.created.toLocaleDateString() }}</p>
    <textarea
      class="textContainer"
      v-model="note.text"
      placeholder="ajoutez plusieurs lignes"
    />
    <div class="buttonContainer">
      <button class="btn base" @click="$emit('cancel')">
        <span class="material-icons">undo</span>
      </button>
      <button class="btn primary" @click="$emit('save')">
        <span class="material-icons">done</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "editNote",
  props: ["note"]
};
</script>

<style lang="scss">
@import "../style/base";

.buttonContainer {
  display: flex;
  justify-content: space-between;
}
.textContainer {
  font-family: 'Varela Round', sans-serif;
  font-size: 16px;
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 70vh;
  resize: none;
  padding: 1rem;
  background-color: lighten(color(background), 5%);
  box-shadow: -5px -5px 5px lighten(color(background), 10%) inset,
    5px 5px 5px darken(color(background), 10%) inset;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  margin: 1rem 0;
}
</style>
