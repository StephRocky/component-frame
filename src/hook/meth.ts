import { mapMutations } from "vuex";
import type { packagesAttrsType } from "@/utils/config-type";
import type { voidFunction } from "@/utils/package-type";
import { defineComponent } from "vue";

export const model = defineComponent({
  props: {
    info: {
      type: Object,
      default: () => ({}),
    },
    parentNodeKey: {
      type: [String, Number],
      default: "",
    },
  },
  data() {
    return {
      modelValue: "",
    };
  },
  watch: {
    "info.eleValue": {
      immediate: true,
      handler(newVal) {
        console.log("触发修改");
        this.modelValue = newVal;
      },
    },
    modelValue: {
      immediate: true,
      handler(newVal) {
        !this.parentNodeKey &&
          this.setBaseForm({
            key: this.info.eleKey,
            val: newVal,
          });
        this.$emit("update", newVal);
      },
    },
  },
  methods: {
    ...mapMutations(["setBaseForm"]),
  },
});

export const event = defineComponent({
  methods: {
    getEventHandlers(
      info: packagesAttrsType,
      handlers: Record<string, voidFunction>
    ): Record<string, voidFunction> {
      const eventHandlers: Record<string, voidFunction> = {};
      if (info.eleEvent?.length === 0) return eventHandlers;
      for (const eventHandler of info.eleEvent) {
        if (typeof handlers[eventHandler] === "function") {
          eventHandlers[eventHandler] = handlers[eventHandler];
        }
      }
      return eventHandlers;
    },
  },
});
