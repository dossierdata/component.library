import './styles/DDIcon.css';
import { DDIcon } from 'dossierdata-component-library';
import { apartmentFloorIcon as bigIcon } from 'dossierdata-component-library/src/assets/big-icons';
import multiColorIcon from './assets/ic_multi-color.svg';
import multiColorIconWithClasses from './assets/ic_multi-color--with-classes.svg';
import classFromFillNote from '../notes/DDIconClassFromFill.md';
import fillFromClassNote from '../notes/DDIconFillFromClass.md';

export default {
  title: 'Components/DDIcon',
  component: DDIcon,
  parameters: {
    percy: {
      skip: true,
    },
  },
  args: {
    src: bigIcon,
    title: 'MyIcon',
    id: 'MyIconId',
    description: 'IconDescription',
    classFromFill: {},
    fillFromClass: {},
  },
};

const Template = template => (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DDIcon },
  template,
});

export const Default = Template(`
  <div>
    <p>The <b>&lt;svg&gt;</svg></b> element is the root of the component,
      so you can use its native attributes, like <b>width</b> and <b>height</b> in this example:</p>
    <DDIcon
      :src="src"
      :title="title"
      :id="id"
      :description="description"
      width="64"
      height="64"
    />
    <br>
    <DDIcon
      :src="src"
      :title="title"
      :id="id"
      :description="description"
      width="128"
      height="128"
    />
    <p>or <b>transform</b>:</p>
    <DDIcon
      :src="src"
      :title="title"
      :id="id"
      :description="description"
      width="128"
      height="128"
      transform="rotate(90)"
    />
    <br>
    <DDIcon
      :src="src"
      :title="title"
      :id="id"
      :description="description"
      width="128"
      height="128"
      transform="skewX(-10)"
    />
  </div>
`).bind({});

export const UsingClassFromFill = Template(`
  <div>
    <p>Check the docs description for implementation details</p>
    <DDIcon
      :src="src"
      :title="title"
      :id="id"
      :description="description"
      :class-from-fill="classFromFill"
      width="200"
      height="200"
    />
    <p>We add <b>primary-color</b> and <b>secondary-color</b> classes to the svg paths based on their fill color
      (you can inspect the svg to make sure they were added successfully).</p><br>
    <p>For demo purposes we change the fill of the secondary color on hover.</p>
  </div>
`).bind({});
UsingClassFromFill.args = {
  src: multiColorIcon,
  classFromFill: { '#1895FF': 'secondary-color', '#1C3553': 'primary-color' },
};
UsingClassFromFill.parameters = {
  docs: {
    description: {
      story: classFromFillNote,
    },
  },
};

export const UsingFillFromClass = Template(`
  <div>
    <p>Check the docs description for implementation details</p>
    <DDIcon
      :src="src"
      :title="title"
      :id="id"
      :description="description"
      :fill-from-class="fillFromClass"
      width="200"
      height="200"
    />

    <p>We change the fill color of the paths based on their class (originally defined in the icon's file)</p><br>
  </div>
`).bind({});
UsingFillFromClass.args = {
  src: multiColorIconWithClasses,
  fillFromClass: { 'color-1': 'gray', 'color-2': 'rgb(200, 200, 200)' },
};
UsingFillFromClass.parameters = {
  docs: {
    description: {
      story: fillFromClassNote,
    },
  },
};
