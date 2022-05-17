import { ref } from 'vue';
import addRemoveEvents from './event';

export default function trackMouseMove() {
  const x = ref(0);
  const y = ref(0);

  function update(event) {
    x.value = event.pageX;
    y.value = event.pageY;
  }

  addRemoveEvents(window, 'mousemove', update);

  return { x, y };
}
