<template>
  <div id="app">
    <div class="content">
      <h1 class="stampedText">mes notes</h1>
      <transition name="fade" mode="out-in">
        <div v-if="selectedNote === null">
          <transition-group name="fade" tag="p">
            <noteListItem
              v-for="(note, index) in notes"
              :key="index"
              @selectme="selectedNote = note"
              @deleteme="deleteNote(index)"
              :note="note"
            />
          </transition-group>
          <div class="buttonAddContainer">
            <button @click="addNote" class="item btn primary">
              <span class="material-icons">add</span>
            </button>
          </div>
        </div>

        <editNote
          v-else
          @save="saveList"
          @cancel="selectedNote = null"
          :note="selectedNote"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import { Note } from "./models/Note";
import editNote from "./components/editNote";
import noteListItem from "./components/noteListItem";

export default {
  name: "App",
  components: { editNote, noteListItem },
  data: () => {
    return {
      selectedNote: null,
      notes: []
    };
  },
  created() {
    const localNotes = localStorage.getItem("myNotes");
    if (localNotes === null) {
      console.log("no list");
      return;
    }
    JSON.parse(localNotes).forEach(rawNote => {
      this.notes.push(new Note(rawNote));
    });
  },
  methods: {
    addNote() {
      this.selectedNote = new Note();
      this.notes.push(this.selectedNote);
    },
    saveList() {
      localStorage.setItem("myNotes", JSON.stringify(this.notes));
      this.selectedNote = null;
    },
    deleteNote(index) {
      this.notes.splice(index, 1);
      this.saveList();
    }
  }
};
</script>

<style lang="scss">
@import "style/base";

.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
#app {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    0.375turn,
    lighten(color(background), 5%),
    darken(color(background), 5%)
  );
}
.content {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  h1 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
}
.buttonAddContainer {
  display: flex;
  justify-content: flex-end;
}
</style>
