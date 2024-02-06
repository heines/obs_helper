<template>
  <div class="hello">
    <h1>OBS Helper (Draft)</h1>
    <h2>Links(Vook)</h2>
    <ul>
      <li><a href="https://vook.vc/n/5455" target="_blank" rel="noopener">Setting</a></li>
      <li><a href="https://vook.vc/n/5462" target="_blank" rel="noopener">Comment</a></li>
    </ul>
    <h2>TOOLS</h2>
    <h3>配信URLからチャットURLを取得</h3>
    <p>
      配信URL（https://youtube.com/live/＊＊＊＊＊?feature=share/）を入力
    </p>
    <div class="live"><input class="live__text" v-model="liveUrl" /><span class="btn delete" @click="deleteText"></span></div>
    <p>
      チャットURL
    </p>
    <div class="output" v-if="chat">
      <p class="output__text">{{ chat }}</p>
      <span class="btn copy" @click="copyTextToClipboard"></span>
    </div>
    <p v-else-if="isError">想定したフォーマットじゃない気がする</p>
    <p v-else>（ここに表示されます）</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      liveUrl: ''
    }
  },
  computed: {
    chat() {
      const pattern = /https:\/\/youtube\.com\/live\/(\w+)\?feature=share/;
      const data = pattern.exec(this.liveUrl);
      return data ? `https://studio.youtube.com/live_chat?is_popout=1&v=${data[1]}` : '';
    },
    isError() {
      return !this.chat && this.liveUrl;
    }
  },
  methods: {
    deleteText() {
      this.liveUrl = '';
    },
    copyTextToClipboard() {
      navigator.clipboard.writeText(this.chat)
      .then(function() {
        console.log('Async: Copying to clipboard was successful!');
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.live,
.output {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
}
.live__text {
  width: 60%;
  font-size: 16px;
}
.output__text {
  display: block;
  padding: 0.2em 0.6em;
  background-color: #EEE;
  border-radius: 2px;
}
.btn {
  display: block;
  height: 2em;
  width: 2em;
  flex-shrink: 0;
  background-color: #CCC;
  border-radius: 2px;
  cursor: pointer;
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;
}
.btn.copy {
  background-image: url('../assets/icon_copy.svg');
}
.btn.delete {
  background-image: url('../assets/icon_trash.svg');
}

</style>
