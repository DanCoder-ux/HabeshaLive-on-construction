<script setup>
import { ref, defineProps, defineEmits, watch } from 'vue';
import Button from './ui/button/Button.vue';

const props = defineProps({
    knums: {
        type: Array,
        default: () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    },
    modelValue: {
        type: String,
        default: '0',
        required: true
    },
    btnVariant: {
        type: String,
        default: 'outline'
    },
    btnMargin: {
        type: String,
        default: 'm-0'
    },
    btnSize: {
        type: String,
        default: 'h-1/3 w-1/3'
    }
});

const emits = defineEmits(['update:modelValue']);

let value = ref(props.modelValue);

watch(() => props.modelValue, (newValue) => {
    value.value = newValue;
});

const updateValue = (numadded) => {
    value.value = value.value + numadded;
    emits('update:modelValue', value.value);
};

const clearValue = () => {
    value.value = "";
    emits('update:modelValue', value.value);
};

const subtract = () => {
    value.value = value.value.slice(0, -1);
    emits('update:modelValue', value.value);
};
</script>

<template>
    <div class="w-full h-[50%] flex flex-wrap gap-0 place-items-end content-start">
        <Button v-for="num in props.knums" :key="num" :variant="props.btnVariant" :class="[props.btnMargin, props.btnSize, 'rounded-none']" @click="updateValue(num)">
            {{ num }}
        </Button>
        <Button :class="[props.btnMargin, props.btnSize, 'rounded-none']" :variant="props.btnVariant" @click="subtract">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-backspace">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M20 6a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-11l-5 -5a1.5 1.5 0 0 1 0 -2l5 -5z" />
                <path d="M12 10l4 4m0 -4l-4 4" />
            </svg>
        </Button>
        <Button :class="[props.btnMargin, props.btnSize, 'rounded-none']" :variant="props.btnVariant" @click="clearValue">
            C
        </Button>
    </div>
</template>