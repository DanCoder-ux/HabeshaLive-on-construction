<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const follower = ref(null);
const targetX = ref(0);
const targetY = ref(0);
const currentX = ref(0);
const currentY = ref(0);
const buttonsid = ref(["trybtn", "purchasecredit", "", "", ""]);
const blurValue = ref(0);
let blurAnimationFrame = null;

// Variables for transition speed
const blurInDuration = ref(500); // Duration for blur in (in milliseconds)
const blurOutDuration = ref(1000); // Duration for blur out (in milliseconds)

const updatePosition = () => {
  const dx = targetX.value - currentX.value;
  const dy = targetY.value - currentY.value;
  currentX.value += dx * 0.1; // Adjust the easing factor as needed
  currentY.value += dy * 0.1;
  if (follower.value) {
    follower.value.style.top = currentY.value + 'px';
    follower.value.style.left = currentX.value + 'px';
  }
  requestAnimationFrame(updatePosition);
};

const handleMouseMove = (event) => {
  const smoothiContainer = document.getElementById('smoothi');
  if (smoothiContainer) {
    const rect = smoothiContainer.getBoundingClientRect();
    targetX.value = event.clientX - rect.left + smoothiContainer.scrollLeft;
    targetY.value = event.clientY - rect.top + smoothiContainer.scrollTop;
  } else {
    targetX.value = event.clientX;
    targetY.value = event.clientY;
  }
};

const addHoverListeners = () => {
  buttonsid.value.forEach(id => {
    const button = document.getElementById(id);
    if (button) {
      button.addEventListener("mouseover", handleMouseOver);
      button.addEventListener("mouseout", handleMouseOut);
    }
  });
};

const removeHoverListeners = () => {
  buttonsid.value.forEach(id => {
    const button = document.getElementById(id);
    if (button) {
      button.removeEventListener("mouseover", handleMouseOver);
      button.removeEventListener("mouseout", handleMouseOut);
    }
  });
};

const smoothBlur = (start, end, duration) => {
  const startTime = performance.now();

  const animateBlur = (currentTime) => {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const currentBlur = start + (end - start) * progress;

    if (follower.value) {
      follower.value.style.filter = `blur(${currentBlur}px)`;
    }

    if (progress < 1) {
      blurAnimationFrame = requestAnimationFrame(animateBlur);
    }
  };

  blurAnimationFrame = requestAnimationFrame(animateBlur);
};

const handleMouseOver = () => {
  if (blurAnimationFrame) {
    cancelAnimationFrame(blurAnimationFrame);
  }
  smoothBlur(blurValue.value, 20, blurInDuration.value); // Use blurInDuration for blur in
  blurValue.value = 20;
  if (follower.value) {
    follower.value.style.transform = "scale(4)";
  }
};

const handleMouseOut = () => {
  if (blurAnimationFrame) {
    cancelAnimationFrame(blurAnimationFrame);
  }
  smoothBlur(blurValue.value, 0, blurOutDuration.value); // Use blurOutDuration for blur out
  blurValue.value = 0;
  if (follower.value) {
    follower.value.style.transform = "scale(1)";
    follower.value.style.transform = "translate(-50%, -50%)";
  }
};

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove);
  requestAnimationFrame(updatePosition);
  addHoverListeners();
});

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove);
  removeHoverListeners();
  if (blurAnimationFrame) {
    cancelAnimationFrame(blurAnimationFrame);
  }
});
</script>

<template>
  <div
    class="cicl w-10 h-10 bg-[#f911b783] absolute z-20 rounded-full pointer-events-none"
    style="transform: translate(-50%, -50%);"
    id="follower"
    ref="follower"
  ></div>
</template>

<style scoped>
#follower {
  transition: transform 0.5s ease-in-out;
  transform: translate(-50%, -50%);
   overflow: hidden;
}

</style>