import App from './App.svelte';

const wrapper = document.createElement('div');
const shadow = wrapper.attachShadow({mode: "open"});
new App({target: shadow});
