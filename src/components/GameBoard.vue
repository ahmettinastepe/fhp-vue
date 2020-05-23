<template>
  <div style="text-align: center;">
    <!-- Next Steps -->
    <h2>Oyun Alanı</h2>
    <p>Bakalım Tamamlayabilecek misin :)</p>

    <!-- <input type="hidden" #selection /> -->

    <div class="card-container">
      <div style="margin-right: 50px; background-color: darkgreen;" class="terminal-error">
        <pre>Doğru</pre>
        <pre style="font-size: 24px; font-weight: bolder;">{{ successCount }}</pre>
      </div>
      <!-- GameBoard -->
      <div class="terminal">
        <pre>
          <table class="card-container"> 
            <tr v-for="(group, i) in grouped" :key="i">
              <td
                v-for="(item, i) in group"
                :key="i"
                @click="selectButton(item)"
                :class="{'btn-element-active': item.isSelected, 'btn-element': !item.isSelected, 'select-out': item.isRemoved}"
              >
                <span>{{ item.isSelected && !item.isRemoved ? item.title : null }}</span>
              </td>
            </tr>
          </table>
      </pre>
      </div>
      <div style="margin-left: 50px;" class="terminal-error">
        <pre>Yanlış</pre>
        <pre style="font-size: 24px; font-weight: bolder;">{{ errorCount }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameBoard",
  props: ["grouped", "btnLenght"],
  data() {
    return {
      selectButtons: [],
      removeButtons: [],
      errorCount: 0,
      successCount: 0,
      counter: 0
    };
  },
  methods: {
    selectButton(button) {
      for (let i = 0; i < this.selectButtons.length; i++) {
        if (button == this.selectButtons[i]) return;
      }

      if (this.selectButtons.length == 2) return;

      button.isSelected = true;
      this.selectButtons.push(button);

      if (this.selectButtons.length == 2) {
        setTimeout(() => {
          if (this.selectButtons[0].title == this.selectButtons[1].title) {
            this.successCount++;
            this.selectButtons[0].isRemoved = true;
            this.selectButtons[1].isRemoved = true;
            this.removeButtons.push(this.selectButtons[0]);
            this.removeButtons.push(this.selectButtons[1]);
            this.selectButtons = [];
            this.counter++;
            this.boardControl();
          } else {
            this.errorCount++;
            this.selectButtons[0].isSelected = false;
            this.selectButtons[1].isSelected = false;
            this.selectButtons = [];
          }
        }, 700);
      }
    },

    boardControl() {
      if (this.btnLenght / 2 == this.counter) {
        alert(`Oyun bitti..! Hata sayınız: ${this.errorCount}`);
        this.$emit("newGame", true);
      }
    }
  }
};
</script>

<style scoped>
.terminal {
  position: relative;
  /* width: 80%;
    max-width: 100%; */
  border-radius: 6px;
  padding-top: 45px;
  margin-top: 8px;
  overflow: hidden;
  background-color: rgb(15, 15, 16);
}

.terminal-error {
  position: relative;
  text-align: center;
  width: 100px;
  height: 100px;
  border-radius: 6px;
  padding-top: 45px;
  margin-top: 8px;
  overflow: hidden;
  background-color: rgb(202, 6, 6);
}

.terminal::before {
  content: "\2022 \2022 \2022";
  position: absolute;
  top: 0;
  left: 0;
  height: 4px;
  background: rgb(58, 58, 58);
  color: #c2c3c4;
  width: 100%;
  font-size: 2rem;
  line-height: 0;
  padding: 14px 0;
  text-indent: 4px;
}

.terminal-error::before {
  content: "\2022 \2022 \2022";
  position: absolute;
  top: 0;
  left: 0;
  height: 4px;
  background: rgb(58, 58, 58);
  color: #c2c3c4;
  width: 100%;
  font-size: 2rem;
  line-height: 0;
  padding: 14px 0;
  text-indent: 4px;
}

.terminal pre {
  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
  color: white;
  padding: 0 1rem 1rem;
  margin: 0;
}

.terminal-error pre {
  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
  color: white;
}

.btn-element {
  border-radius: 4px;
  border: 1px solid #eee;
  background-color: #fafafa;
  height: 60px;
  font-size: larger;
  color: #fafafa;
  margin-right: 4px;
  margin-bottom: 4px;
  /*padding: 16px; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  line-height: 24px;
  cursor: pointer;
}

.btn-element-active {
  border-radius: 4px;
  border: 1px solid #eee;
  /* background-color: #fafafa; */
  height: 60px;
  font-size: larger;
  font-weight: bolder;
  /* color: #1976d2; */
  margin-right: 4px;
  margin-bottom: 4px;
  /*padding: 16px; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  line-height: 24px;
}

.select-out {
  border-radius: 4px;
  border: 1px solid #0f0f10;
  background-color: #0f0f10;
  height: 60px;
  width: 60px;
  font-size: larger;
  color: #0f0f10;
  margin-right: 4px;
  /*padding: 16px; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  line-height: 24px;
}
</style>