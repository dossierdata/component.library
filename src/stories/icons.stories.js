/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue';
import { component as VueCodeHighlight } from 'vue-code-highlight';
import DDIcon from 'dossierdata-component-library/src/components/basic/DDIconOld.vue';
import * as smallIcons from 'dossierdata-component-library/src/assets/small-icons';
import * as bigIcons from 'dossierdata-component-library/src/assets/big-icons';
import * as bicolorIcons from 'dossierdata-component-library/src/assets/bicolor-icons';


storiesOf('Assets/Icons', module)
  .addParameters({
    options: {
      showPanel: false,
      isToolshown: false,
    },
    percy: {
      skip: true,
    },
  })
  .add('Small icons', () => ({
    components: {
      DDIcon,
      VueCodeHighlight,
    },
    data() {
      return {
        icons: Object.entries(smallIcons),
      };
    },
    template: `
      <div>
        <vue-code-highlight>{{
          'import { mailIcon } from "dossierdata-component-library/src/assets/small-icons";'
        }}</vue-code-highlight>
        <section style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr;">
          <div
            v-for="([name, icon]) in icons"
            style="padding: 16px 8px; display: flex; flex-direction: column; align-items: center; justify-content: center;"
          >
          <DDIcon
            :src="icon"
          />
          <p style="font-size: 14px">{{ name }}</p>
          </div>
        </section>
      </div>
    `,
  }))
  .add('Big icons', () => ({
    components: {
      DDIcon,
      VueCodeHighlight,
    },
    data() {
      return {
        icons: Object.entries(bigIcons),
      };
    },
    template: `
      <div>
        <vue-code-highlight>{{
          'import { mailIcon } from "dossierdata-component-library/src/assets/big-icons";'
        }}</vue-code-highlight>
        <section style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr;">
          <div
            v-for="([name, icon]) in icons"
            style="padding: 16px 8px; display: flex; flex-direction: column; align-items: center; justify-content: center;"
          >
          <DDIcon
            :src="icon"
          />
          <p style="font-size: 14px">{{ name }}</p>
          </div>
        </section>
      </div>
    `,
  }))
  .add('Bicolor icons', () => ({
    components: {
      DDIcon,
      VueCodeHighlight,
    },
    data() {
      return {
        icons: Object.entries(bicolorIcons),
      };
    },
    template: `
      <div>
        <vue-code-highlight>{{
          'import { mailIcon } from "dossierdata-component-library/src/assets/bicolor-icons";'
        }}</vue-code-highlight>
        <section style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr;">
          <div
            v-for="([name, icon]) in icons"
            style="padding: 16px 8px; display: flex; flex-direction: column; align-items: center; justify-content: center;"
          >
          <DDIcon
            :src="icon"
          />
          <p style="font-size: 14px">{{ name }}</p>
          </div>
        </section>
      </div>
    `,
  }));
