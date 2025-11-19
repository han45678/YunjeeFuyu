<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { pageview } from 'vue-gtag';
const route = useRoute();
pageview(route);

onMounted(() => {
  (function(a,e,f,g,b,c,d){a.taq||(a[b]=a[b]||function(){a[b].q.push(arguments);a[b].tamTrackSendStatus&&a[b].tamTrackSendStatus()},a[b].q=a[b].q||[],c=e.createElement(f),d=e.getElementsByTagName(f)[0],c.async=1,c.src="https://adc.tamedia.com.tw/tr/"+g,d.parentNode.insertBefore(c,d))})(window,document,"script","pixel.js","taq");
});
</script>