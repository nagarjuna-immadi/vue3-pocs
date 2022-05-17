import { onMounted, onUnmounted } from 'vue';

export default function addRemoveEvents(target, event, handler) {
  onMounted(() => {
    target.addEventListener(event, handler);
  });

  onUnmounted(() => {
    target.addEventListener(event, handler);
  });
}
