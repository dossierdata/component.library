import './src/plugins/mdi-icons';
import 'ant-design-vue/dist/antd.css';

// Basic
export { default as DDIconOld } from './src/components/basic/DDIconOld.vue';
export { default as DDIcon } from './src/components/basic/DDIcon.vue';

// Buttons
export {
  default as DDButtonOld, TYPES as DDButtonTypes,
} from './src/components/basic/buttons/DDButtonOld.vue';

export { default as DDButton } from './src/components/basic/buttons/DDButton.vue';

// Layout
export { default as DDCard } from './src/components/basic/layout/DDCard.vue';

// Table

// Form

// Tooltip

// Gallery

// Notifications

// Services
export { default as BreakpointsService } from './src/services/breakpoints';
export { default as DateService } from './src/services/date';
export { default as EventEmitterService } from './src/services/event-emitter';
export { default as FlickityService } from './src/services/flickity';
export { default as FormValidationService } from './src/services/formValidation';
export { default as ScrollingService } from './src/services/scrolling';
export { default as UtilsService } from './src/services/utils';

export { default as Antd } from 'ant-design-vue/lib';
