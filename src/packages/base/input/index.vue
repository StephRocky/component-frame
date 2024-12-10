<template>
  <to-input
    v-model="modelValue"
    v-bind="{ ...info.config }"
    v-on="getEventHandlers(info, handlers)"
  />
</template>

<script type="text/ecmascript-6">
import { model, event } from '@/hook/meth'
export default {
	name: 'Input',
	mixins: [model, event],
	props: {
    parentNodeKey: {
      type: [String, Number],
      default: "",
    },
		info: {
      type: Object,
      default: () => ({}),
    },
  },
	model: {
		prop: 'value',
		event: 'update'
	},
	inject: ['handlerCallback'],
	data() {
		return {
			handlers: {
				click: this.click,
				input: this.input,
				blur: this.blur,
				focus: this.focus,
				clear: this.clear
			}
		}
	},
	methods: {
    click() {
			const callbackArgs = {
				event: event,
				params: arguments,
				info: this.info,
				handler: 'click'
			}
			this.handlerCallback(callbackArgs)
		},
    input() {
			const callbackArgs = {
				event: event,
				params: arguments,
				info: this.info,
				handler: 'input'
			}
			this.handlerCallback(callbackArgs)
		},
    blur() {
			const callbackArgs = {
				event: event,
				params: arguments,
				info: this.info,
				handler: 'blur'
			}
			this.handlerCallback(callbackArgs)
		},
    focus() {
			const callbackArgs = {
				event: event,
				params: arguments,
				info: this.info,
				handler: 'focus'
			}
			this.handlerCallback(callbackArgs)
		},
    clear() {
			const callbackArgs = {
				event: event,
				params: arguments,
				info: this.info,
				handler: 'clear'
			}
			this.handlerCallback(callbackArgs)
		}
  }
}
</script>
