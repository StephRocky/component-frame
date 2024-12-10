interface configAttrs {
  col?: number;
  level?: number;
}

// 元素组件名称
type containerEleNames =
  | "input"
  | "select"
  | "import"
  | "export"
  | "upload"
  | "segment"
  | "date-picker"
  | "date-range"
  | "checkbox";

// 构件组件名称
type baseEleNames = "header" | "form" | "table";

// 事件类型
type eleEventTypes = "click" | "change" | "focus" | "blur" | "input" | "clear";

export interface packagesAttrsType {
  eleId: string | number; // 组件唯一标识
  eleName: containerEleNames | baseEleNames; // 组件名称
  eleType: "container" | "base"; // 组件类型
  eleKey: string; // 组件key
  eleValue: string; // 组件默认值
  eleEvent: eleEventTypes[]; // 组件事件
  config: configAttrs; // 组件属性
  classId: string | number; // 关联的组件Id;
  className: containerEleNames; // 关联的组件名称;
}
