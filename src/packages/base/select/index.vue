<template>
  <to-select
    v-model="modelValue"
    v-bind="{ ...info.config }"
    v-on="getEventHandlers(info)"
  />
</template>

<script type="text/ecmascript-6">
import { model, event } from '@/hook/meth'
export default {
	name: 'Select',
	mixins: [model, event],
	props: {
		info: {
			type: Object,
			default: () => ({})
		},
		parentNodeKey: {
			type: [String, Number],
			default: ''
		}
	},
	inject: ['page'],
	data() {
		return {
		}
	},
	methods: {
		change() {
			let callbackArgs = {
				event: event,
				params: arguments,
				info: this.info,
				handler: 'change'
			}
			this.page.handlerCallback(callbackArgs)
		}
	}
}
</script>
