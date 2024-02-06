<template>
  <div class="hello">
    <h1>OBS Helper (Draft)</h1>
    <h2>Links(Vook)</h2>
    <ul>
      <li><a href="https://vook.vc/n/5455" target="_blank" rel="noopener">Setting</a></li>
      <li><a href="https://vook.vc/n/5462" target="_blank" rel="noopener">Comment</a></li>
    </ul>
    <h2>chat URL</h2>
    <p>
      配信URL
    </p>
    <input v-model="liveUrl" />
    <p>
      チャットURL
    </p>
    <div class="output" v-show="chat">
      <p class="output__text">{{ chat }}</p>
      <span class="output__copy" @click="copyTextToClipboard"></span>
    </div>
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
      console.log(this.liveUrl);
      const pattern = /https:\/\/youtube\.com\/live\/(\w+)\?feature=share/;
      const data = pattern.exec(this.liveUrl);
      return data ? `https://studio.youtube.com/live_chat?is_popout=1&v=${data[1]}` : '';
    }
  },
  methods: {
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
.output {
  display: flex;
  align-items: center;
  gap: 0.5em;
}
.output__text {
  display: block;
  padding: 0.2em;
  background-color: #EEE;
  border-radius: 2px;
}
.output__copy {
  display: block;
  height: 2em;
  width: 2em;
  flex-shrink: 0;
  background-color: #CCC;
  border-radius: 2px;
  cursor: pointer;
  background-image: url('../assets/icon_copy.svg');
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
